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

#include "File.hpp"
#include "Map.hpp"
#include "IO/KeyValueFileReader.hpp"
#include "IO/FileLineReader.hpp"
#include "IO/FileTransaction.hpp"
#include "IO/TextWriter.hpp"
#include "IO/KeyValueFileWriter.hpp"
#include "Util/StringAPI.hpp"
#include "Util/StringUtil.hpp"

bool
Profile::LoadFile(ProfileMap &map, const TCHAR *path)
{
  FileLineReaderA reader(path);
  if (reader.error())
    return false;

  KeyValueFileReader kvreader(reader);
  KeyValuePair pair;
  while (kvreader.Read(pair))
    /* ignore the "Vega*" values; the Vega driver used to abuse the
       profile to pass messages between the driver and the user
       interface */
    if (!StringIsEqual(pair.key, "Vega", 4))
      map.Set(pair.key, pair.value);

  return true;
}

namespace Profile {
  static bool SaveFile(const ProfileMap &map,
                       const FileTransaction &transaction);
}

inline bool
Profile::SaveFile(const ProfileMap &map,
                  const FileTransaction &transaction)
{
  TextWriter writer(transaction.GetTemporaryPath());
  // ... on error -> return
  if (!writer.IsOpen())
    return false;

  KeyValueFileWriter kvwriter(writer);
  for (const auto &i : map)
    kvwriter.Write(i.first.c_str(), i.second.c_str());

  return writer.Flush();
}

bool
Profile::SaveFile(const ProfileMap &map, const TCHAR *path)
{
  FileTransaction transaction(path);
  return SaveFile(map, transaction) && transaction.Commit();
}
