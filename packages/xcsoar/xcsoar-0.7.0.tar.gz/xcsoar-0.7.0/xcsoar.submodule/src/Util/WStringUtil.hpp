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

#ifndef WSTRING_UTIL_HPP
#define WSTRING_UTIL_HPP

#include "Compiler.h"

#include <assert.h>
#include <wchar.h>

static inline bool
StringIsEmpty(const wchar_t *string)
{
  return *string == 0;
}

gcc_pure
bool
StringStartsWith(const wchar_t *haystack, const wchar_t *needle);

gcc_pure
bool
StringEndsWith(const wchar_t *haystack, const wchar_t *needle);

gcc_pure
bool
StringEndsWithIgnoreCase(const wchar_t *haystack, const wchar_t *needle);

/**
 * Returns the portion of the string after a prefix.  If the string
 * does not begin with the specified prefix, this function returns
 * nullptr.
 */
gcc_nonnull_all
const wchar_t *
StringAfterPrefix(const wchar_t *string, const wchar_t *prefix);

/**
 * Returns the portion of the string after a prefix.  If the string
 * does not begin with the specified prefix, this function returns
 * nullptr.
 * This function is case-independent.
 */
gcc_nonnull_all
const wchar_t *
StringAfterPrefixCI(const wchar_t *string, const wchar_t *prefix);

/**
 * Copy a string.  If the buffer is too small, then the string is
 * truncated.  This is a safer version of strncpy().
 *
 * @param size the size of the destination buffer (including the null
 * terminator)
 * @return a pointer to the null terminator
 */
gcc_nonnull_all
wchar_t *
CopyString(wchar_t *dest, const wchar_t *src, size_t size);

gcc_nonnull_all
void
CopyASCII(wchar_t *dest, const wchar_t *src);

gcc_nonnull_all
wchar_t *
CopyASCII(wchar_t *dest, size_t dest_size,
          const wchar_t *src, const wchar_t *src_end);

gcc_nonnull_all
void
CopyASCII(wchar_t *dest, const char *src);

gcc_nonnull_all
wchar_t *
CopyASCII(wchar_t *dest, size_t dest_size, const char *src, const char *src_end);

gcc_nonnull_all
char *
CopyASCII(char *dest, size_t dest_size, const wchar_t *src, const wchar_t *src_end);

gcc_nonnull_all
void
CopyASCIIUpper(char *dest, const wchar_t *src);

gcc_pure gcc_nonnull_all
const wchar_t *
StripLeft(const wchar_t *p);

gcc_pure
const wchar_t *
StripRight(const wchar_t *p, const wchar_t *end);

/**
 * Determine the string's end as if it was stripped on the right side.
 */
gcc_pure
static inline wchar_t *
StripRight(wchar_t *p, wchar_t *end)
{
  return const_cast<wchar_t *>(StripRight((const wchar_t *)p,
                                        (const wchar_t *)end));
}

/**
 * Determine the string's length as if it was stripped on the right
 * side.
 */
gcc_pure
size_t
StripRight(const wchar_t *p, size_t length);

gcc_nonnull_all
void
StripRight(wchar_t *p);

gcc_nonnull_all
wchar_t *
NormalizeSearchString(wchar_t *dest, const wchar_t *src);

gcc_pure
bool
StringStartsWithIgnoreCase(const wchar_t *haystack, const wchar_t *needle);

gcc_malloc gcc_nonnull_all
wchar_t *
DuplicateString(const wchar_t *p, size_t length);

#endif
