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

#include "WaypointGlue.hpp"
#include "Factory.hpp"
#include "Profile/Profile.hpp"
#include "LogFile.hpp"
#include "Waypoint/Waypoints.hpp"
#include "WaypointReader.hpp"
#include "Language/Language.hpp"
#include "LocalPath.hpp"
#include "Operation/Operation.hpp"

#include <windef.h> /* for MAX_PATH */

static bool
LoadWaypointFile(Waypoints &waypoints, const TCHAR *path,
                 WaypointOrigin origin,
                 const RasterTerrain *terrain, OperationEnvironment &operation)
{
  if (!ReadWaypointFile(path, waypoints, WaypointFactory(origin, terrain),
                        operation)) {
    LogFormat(_T("Failed to read waypoint file: %s"), path);
    return false;
  }

  return true;
}

bool
WaypointGlue::LoadWaypoints(Waypoints &way_points,
                            const RasterTerrain *terrain,
                            OperationEnvironment &operation)
{
  LogFormat("ReadWaypoints");
  operation.SetText(_("Loading Waypoints..."));

  bool found = false;

  // Delete old waypoints
  way_points.Clear();

  TCHAR path[MAX_PATH];

  LocalPath(path, _T("user.cup"));
  LoadWaypointFile(way_points, path, WaypointOrigin::USER, terrain, operation);

  // ### FIRST FILE ###
  if (Profile::GetPath(ProfileKeys::WaypointFile, path))
    found |= LoadWaypointFile(way_points, path, WaypointOrigin::PRIMARY,
                              terrain, operation);

  // ### SECOND FILE ###
  if (Profile::GetPath(ProfileKeys::AdditionalWaypointFile, path))
    found |= LoadWaypointFile(way_points, path, WaypointOrigin::ADDITIONAL,
                              terrain, operation);

  // ### WATCHED WAYPOINT/THIRD FILE ###
  if (Profile::GetPath(ProfileKeys::WatchedWaypointFile, path))
    found |= LoadWaypointFile(way_points, path, WaypointOrigin::WATCHED,
                              terrain, operation);

  // ### MAP/FOURTH FILE ###

  // If no waypoint file found yet
  if (!found && Profile::GetPath(ProfileKeys::MapFile, path)) {
    TCHAR *tail = path + _tcslen(path);

    _tcscpy(tail, _T("/waypoints.xcw"));
    found |= LoadWaypointFile(way_points, path, WaypointOrigin::MAP,
                              terrain, operation);

    _tcscpy(tail, _T("/waypoints.cup"));
    found |= LoadWaypointFile(way_points, path, WaypointOrigin::MAP,
                              terrain, operation);
  }

  // Optimise the waypoint list after attaching new waypoints
  way_points.Optimise();

  // Return whether waypoints have been loaded into the waypoint list
  return found;
}
