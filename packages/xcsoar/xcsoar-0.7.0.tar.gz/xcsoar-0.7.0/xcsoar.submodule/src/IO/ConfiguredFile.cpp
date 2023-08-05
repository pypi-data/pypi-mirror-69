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

#include "ConfiguredFile.hpp"
#include "FileLineReader.hpp"
#include "ZipLineReader.hpp"
#include "Profile/Profile.hpp"

#include <assert.h>
#include <string.h>
#include <windef.h> /* for MAX_PATH */

NLineReader *
OpenConfiguredTextFileA(const char *profile_key)
{
  assert(profile_key != nullptr);

  TCHAR path[MAX_PATH];
  if (!Profile::GetPath(profile_key, path))
    return nullptr;

  FileLineReaderA *reader = new FileLineReaderA(path);
  if (reader->error()) {
    delete reader;
    return nullptr;
  }

  return reader;
}

TLineReader *
OpenConfiguredTextFile(const char *profile_key, Charset cs)
{
  assert(profile_key != nullptr);

  TCHAR path[MAX_PATH];
  if (!Profile::GetPath(profile_key, path))
    return nullptr;

  FileLineReader *reader = new FileLineReader(path, cs);
  if (reader == nullptr)
    return nullptr;

  if (reader->error()) {
    delete reader;
    return nullptr;
  }

  return reader;
}

static TLineReader *
OpenMapTextFile(const TCHAR *in_map_file, Charset cs)
{
  assert(in_map_file != nullptr);

  TCHAR path[MAX_PATH];
  if (!Profile::GetPath(ProfileKeys::MapFile, path))
    return nullptr;

  _tcscat(path, _T("/"));
  _tcscat(path, in_map_file);

  ZipLineReader *reader = new ZipLineReader(path, cs);
  if (reader == nullptr)
    return nullptr;

  if (reader->error()) {
    delete reader;
    return nullptr;
  }

  return reader;
}

TLineReader *
OpenConfiguredTextFile(const char *profile_key, const TCHAR *in_map_file,
                       Charset cs)
{
  assert(profile_key != nullptr);
  assert(in_map_file != nullptr);

  TLineReader *reader = OpenConfiguredTextFile(profile_key, cs);
  if (reader == nullptr)
    reader = OpenMapTextFile(in_map_file, cs);

  return reader;
}
