unrfc2047: a decoder for RFC2047 (MIME Part 3) encoded text.

*Latest release 20200524*:
Handle unknown charsets (parochially and abitrarily) and other decode failures.

## Function `unrfc2047(s)`

Accept a string `s` containing RFC2047 text encodings (or the whitespace
littered varieties that come from some low quality mail clients) and
decode them into flat Unicode.

See http://tools.ietf.org/html/rfc2047 for the specification.

# Release Log



*Release 20200524*:
Handle unknown charsets (parochially and abitrarily) and other decode failures.

*Release 20171231*:
Change final .decode to use "replace". Fix a bunch of warning format strings.

*Release 20170904*:
Initial PyPI release.
