/*
Copyright_License {

  XCSoar Glide Computer - http://www.xcsoar.org/
  Copyright (C) 2000-2015 The XCSoar Project
  A detailed list of copyright holders can be found in the file "AUTHORS".

  This program is free software; you can redistribute it and/or
  modify it under the terms of the GNU General Public License
  as published by the Free Software Foundation; either version 2
  of the License, or (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program; if not, write to the Free Software
  Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
}
*/

#include "TCPClientPort.hpp"
#include "Util/StaticString.hxx"
#include "Net/StaticSocketAddress.hxx"

#ifdef HAVE_POSIX
#include "IO/Async/GlobalIOThread.hpp"

#include <errno.h>

TCPClientPort::~TCPClientPort()
{
  if (connecting.IsDefined()) {
    io_thread->LockRemove(connecting.ToFileDescriptor());
    connecting.Close();
  }
}

#endif

bool
TCPClientPort::Connect(const char *host, unsigned port)
{
  NarrowString<32> service;
  service.UnsafeFormat("%u", port);

  StaticSocketAddress address;
  if (!address.Lookup(host, service, SOCK_STREAM))
    return false;

  SocketDescriptor s;
  if (!s.CreateTCP())
    return false;

#ifdef HAVE_POSIX
  s.SetNonBlocking();
#endif

  if (s.Connect(address)) {
    Set(std::move(s));
    return true;
  }

#ifdef HAVE_POSIX
  if (errno == EINPROGRESS) {
    connecting = std::move(s);
    io_thread->LockAdd(connecting.ToFileDescriptor(), Poll::WRITE, *this);
    StateChanged();
    return true;
  }
#endif

  return false;
}

#ifdef HAVE_POSIX

PortState
TCPClientPort::GetState() const
{
  return connecting.IsDefined()
    ? PortState::LIMBO
    : SocketPort::GetState();
}

bool
TCPClientPort::OnSocketEvent(SocketDescriptor _socket, unsigned mask)
{
  if (gcc_likely(!connecting.IsDefined()))
    /* connection already established: let SocketPort handle reading
       from the connection */
    return SocketPort::OnSocketEvent(_socket, mask);

  /* connection ready: check connect error */

  assert(_socket == connecting);

  io_thread->Remove(connecting.ToFileDescriptor());

  int s_err = 0;
  socklen_t s_err_size = sizeof(s_err);
  if (getsockopt(connecting.Get(), SOL_SOCKET, SO_ERROR,
                 &s_err, &s_err_size) < 0)
    s_err = errno;

  if (s_err == 0) {
    /* connection has been established successfully */
    Set(std::move(connecting));
    connecting.SetUndefined();
  } else {
    /* there was a problem */
    connecting.Close();
    StateChanged();
  }

  return true;
}

#endif
