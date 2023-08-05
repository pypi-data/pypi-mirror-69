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

#include "WStringUtil.hpp"
#include "WStringAPI.hpp"
#include "WCharUtil.hpp"

#include <algorithm>

#include <string.h>
#include <stdlib.h>

bool
StringStartsWith(const wchar_t *haystack, const wchar_t *needle)
{
  return memcmp(haystack, needle, StringLength(needle) * sizeof(needle[0])) == 0;
}

bool
StringEndsWith(const wchar_t *haystack, const wchar_t *needle)
{
  const size_t haystack_length = StringLength(haystack);
  const size_t needle_length = StringLength(needle);

  return haystack_length >= needle_length &&
    StringIsEqual(haystack + haystack_length - needle_length, needle);
}

bool
StringEndsWithIgnoreCase(const wchar_t *haystack, const wchar_t *needle)
{
  const size_t haystack_length = StringLength(haystack);
  const size_t needle_length = StringLength(needle);

  return haystack_length >= needle_length &&
    StringIsEqualIgnoreCase(haystack + haystack_length - needle_length,
                            needle);
}

const wchar_t *
StringAfterPrefix(const wchar_t *string, const wchar_t *prefix)
{
  assert(string != nullptr);
  assert(prefix != nullptr);

  size_t prefix_length = StringLength(prefix);
  return StringIsEqual(string, prefix, prefix_length)
    ? string + prefix_length
    : nullptr;
}

const wchar_t *
StringAfterPrefixCI(const wchar_t *string, const wchar_t *prefix)
{
  assert(string != nullptr);
  assert(prefix != nullptr);

  size_t prefix_length = StringLength(prefix);
  return StringIsEqual(string, prefix, prefix_length)
    ? string + prefix_length
    : nullptr;
}

wchar_t *
CopyString(wchar_t *gcc_restrict dest, const wchar_t *gcc_restrict src,
           size_t size)
{
  size_t length = StringLength(src);
  if (length >= size)
    length = size - 1;

  wchar_t *p = std::copy_n(src, length, dest);
  *p = L'\0';
  return p;
}

void
CopyASCII(wchar_t *dest, const wchar_t *src)
{
  do {
    if (IsASCII(*src))
      *dest++ = *src;
  } while (*src++ != L'\0');
}

wchar_t *
CopyASCII(wchar_t *dest, size_t dest_size,
          const wchar_t *src, const wchar_t *src_end)
{
  assert(dest != nullptr);
  assert(dest_size > 0);
  assert(src != nullptr);
  assert(src_end != nullptr);
  assert(src_end >= src);

  const wchar_t *const dest_end = dest + dest_size;
  for (; dest != dest_end && src != src_end; ++src)
    if (IsASCII(*src))
      *dest++ = *src;

  return dest;
}

void
CopyASCII(wchar_t *dest, const char *src)
{
  do {
    if (IsASCII(*src))
      *dest++ = (wchar_t)*src;
  } while (*src++ != '\0');
}

template<typename D, typename S>
static D *
TemplateCopyASCII(D *dest, size_t dest_size, const S *src, const S *src_end)
{
  assert(dest != nullptr);
  assert(dest_size > 0);
  assert(src != nullptr);
  assert(src_end != nullptr);
  assert(src_end >= src);

  const D *const dest_end = dest + dest_size;
  for (; dest != dest_end && src != src_end; ++src)
    if (IsASCII(*src))
      *dest++ = *src;

  return dest;
}

wchar_t *
CopyASCII(wchar_t *dest, size_t dest_size, const char *src, const char *src_end)
{
  return TemplateCopyASCII(dest, dest_size, src, src_end);
}

char *
CopyASCII(char *dest, size_t dest_size, const wchar_t *src, const wchar_t *src_end)
{
  return TemplateCopyASCII(dest, dest_size, src, src_end);
}

void
CopyASCIIUpper(char *dest, const wchar_t *src)
{
  do {
    wchar_t t = *src;
    if (IsASCII(t)) {
      char ch = (char)t;
      if (IsLowerAlphaASCII(ch))
        ch -= 'a' - 'A';

      *dest++ = ch;
    }
  } while (*src++ != '\0');
}

const wchar_t *
StripLeft(const wchar_t *p)
{
  while (IsWhitespaceNotNull(*p))
    ++p;
  return p;
}

const wchar_t *
StripRight(const wchar_t *p, const wchar_t *end)
{
  while (end > p && IsWhitespaceOrNull(end[-1]))
    --end;

  return end;
}

size_t
StripRight(const wchar_t *p, size_t length)
{
  while (length > 0 && IsWhitespaceOrNull(p[length - 1]))
    --length;

  return length;
}

void
StripRight(wchar_t *p)
{
  size_t old_length = StringLength(p);
  size_t new_length = StripRight(p, old_length);
  p[new_length] = 0;
}

wchar_t *
NormalizeSearchString(wchar_t *gcc_restrict dest,
                      const wchar_t *gcc_restrict src)
{
  wchar_t *retval = dest;

  for (; !StringIsEmpty(src); ++src)
    if (IsAlphaNumericASCII(*src))
      *dest++ = ToUpperASCII(*src);

  *dest = L'\0';

  return retval;
}

bool
StringStartsWithIgnoreCase(const wchar_t *haystack, const wchar_t *needle)
{
  return StringIsEqualIgnoreCase(haystack, needle,
                                 StringLength(needle));
}

wchar_t *
DuplicateString(const wchar_t *p, size_t length)
{
  wchar_t *q = (wchar_t *)malloc((length + 1) * sizeof(*p));
  if (q != nullptr)
    *std::copy_n(p, length, q) = L'\0';
  return q;
}
