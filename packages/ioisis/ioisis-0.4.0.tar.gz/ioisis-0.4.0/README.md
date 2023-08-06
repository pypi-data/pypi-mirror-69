# IOISIS - I/O tools for converting ISIS data in Python

This is a Python library with a command line interface (CLI)
intended to access data from ISIS database files
and convert among distinct file formats.

The converters available in the CLI are:

|  **Command**      | **Description**                           |
|:-----------------:|:-----------------------------------------:|
| `bruma-mst2csv`   | MST+XRF to CSV based on Bruma             |
| `bruma-mst2jsonl` | MST+XRF to JSON Lines based on Bruma      |
| `csv2iso`         | CSV to ISO2709                            |
| `csv2jsonl`       | CSV to JSON Lines                         |
| `csv2mst`         | CSV to ISIS/FFI Master File Format        |
| `iso2csv`         | ISO2709 to CSV                            |
| `iso2jsonl`       | ISO2709 to JSON Lines                     |
| `jsonl2csv`       | JSON Lines to CSV                         |
| `jsonl2iso`       | JSON Lines to ISO2709                     |
| `jsonl2mst`       | JSON Lines to ISIS/FFI Master File Format |
| `mst2csv`         | ISIS/FFI Master File Format to CSV        |
| `mst2jsonl`       | ISIS/FFI Master File Format to JSON Lines |

*Note*:
The `bruma-*` commands and the `bruma` module
use a specific pre-compiled version
of [Bruma](https://github.com/scieloorg/Bruma)
through [JPype](https://github.com/jpype-project/jpype),
which requires the JVM (Java Virtual Machine).
The `iso` and `mst` modules, as well as
the other modules and CLI commands
don't require Bruma.
Bruma only gets downloaded in its first use.

The Python-based alternative to Bruma
was created from scratch,
and it's based on [Construct](https://github.com/construct/construct),
a Python library that allows a declarative implementation
of the binary file structures
for both parsing and building.
Currently,
the ISO (ISO2709-based file format),
the MST (ISIS/FFI Master file format) and
the XRF (ISIS/FFI Cross-reference file format)
file formats can be parsed/built with the library,
but the XRF files aren't used nor built
by the Bruma-independent library/CLI.

Most details regarding the parse/build process
can be configured in both the library and the CLI,
including the several variations of the MST file
that are specific to CISIS.
CISIS has a serialization behavior dependent of the architecture
and of its compilation flags,
but `ioisis` can deal with most (perhaps all)
the distinct MST "file formats" that can be generated/read
by some specific CISIS version.

Everything in `ioisis` is platform-independent,
and most of its defaults are based on the *lindG4* version of CISIS,
and on the [isis2json](https://github.com/scieloorg/isis2json)
*MongoDB type 1* (`-mt1`) output.
The `--xylose` option of several CLI commands
switches the JSONL defaults to use the dictionary structure
expected by [Xylose](https://github.com/scieloorg/xylose).


## Installation and testing

It requires Python 3.6+,
and it's prepared to be tested in every Python version
with [tox](https://github.com/tox-dev/tox)
and [pytest](https://pytest.org).

```bash
# Installation
pip install ioisis

# Testing (one can install tox with "pip install tox")
tox                      # Test on all Python versions
tox -e py38 -- -k scanf  # Run "scanf" tests on Python 3.8
```


## Command Line Interface (CLI)

To use the CLI command, use `ioisis` or `python -m ioisis`.
Examples:

```bash
# Convert file.mst to a JSONL in the standard output stream
ioisis mst2jsonl file.mst

# Convert file.iso in UTF-8 to an ASCII file.jsonl
ioisis iso2jsonl --ienc utf-8 --jenc ascii file.iso file.jsonl

# Convert file.jsonl to file.iso where the JSON lines are like
# {"tag": ["field", ...], ...}
ioisis jsonl2iso file.jsonl file.iso

# Convert big-endian lindG4 MST data to CSV (one line for each field)
# ignoring noise in the MST file that might appear between records
# (it can access data from corrupt MST files)
ioisis mst2csv --ibp ignore --be file.mst file.csv

# Convert active and logically deleted records from file.mst
# to filtered.mst, selecting records and filtering out fields with jq,
# using a "v" prefix to the field tags,
# reseting the MFN to 1, 2, etc. while keeping its order
# instead of using the in-file order, besides enforcing a new encoding,
# with a file that might already have some records partially in UTF-8
ioisis bruma-mst2jsonl --all --ftf v%z --menc latin1 --utf8 file.mst \
| jq -c 'select(.v35 == ["PRINT"]) | del(.v901) | del(.v540)'
| ioisis jsonl2mst --ftf v%z --menc latin1 - filtered.mst
```

By default, the input and output are the standard streams,
but some commands require a file name, not a pipe/stream.
Bruma requires the MST input to be a file name
since the XRF will be found based on it
(only the `bruma-*` commands require XRF).
The `*2mst` commands require a file name for the MST output
because the first record of it (the control record)
has some information that will be available
only after generating the entire file (i.e., it's created at the end),
this makes the random access a requirement.

All commands have an alias:
their names with only the first character of the extension
(or `b` for `bruma-`).
Try `ioisis --help` for more information about all commands
and `ioisis csv2mst --help` for the specific `csv2mst` help
(every command has its own help).

The encoding of all files are explicit through a `--_enc` option,
where the `_` should be replaced
by the first letter of the file extension,
hence `--menc` has the MST encoding,
`--cenc` the CSV encoding,
and so on.
For the `bruma-*` commands, the `--menc` is handled in Java,
all other encoding options are handled in Python.
The `--utf8` option forces the input to be handled as UTF-8,
and only the parts of it that aren't in such encoding
are handled by the specific file format encoding,
that is, the `--_enc` option become a fallback for UTF-8.
This helps loading data from databases with mixed encoding data.


### JSON/CSV mode, field and subfield processing

There are several other options to the CLI commands
intended to customize the process,
perhaps the most important of these options
is the `-m/--mode`,
which regards to the field and record formats in JSONL files
(and the `-M/--cmode`, which does the same for CSV files).
The valid values for it are:

* `field` (*default*):
  Use the raw field value string (ignore the subfield parsing options)
* `pairs`:
  Split the field string as an array of `[key, value]` subfield pairs
* `nest`:
  Split the field string as a `{key: value}` object,
  keeping the last subfield value of a key
  when the key appears more than once
* `inest`:
  CISIS-like subfield nesting processing, similar to the `nest`,
  but keeps the first entry with the key instead of the last one
  (only makes difference when `--no-number`)
* `tidy`:
  Tabular format where the records are splitten,
  and each field is regarded as a single JSON line
  like `{"mfn": mfn, "index": index, "tag": field_key, "data": value}`
* `stidy`:
  Subfield tidy format, it's similar to the `tidy` format
  but the fields are themselves splitten
  in a way that each subfield is regarded
  as a single JSON line in the result,
  including the subfield key in the `"sub"` key of the result

When used together with `--no-number`,
the `field`, `pairs` and `nest` modes are respectively similar
to the `-mt1`, `-mt2` and `-mt3` options of `isis2json`.
The `inest` mode isn't available in `isis2json`,
it follows the CISIS behavior on subfield querying instead.
For CSV, only the `tidy` and `stidy` formats are available,
given that the remaining formats aren't tabular.

The `--ftf` is an option that expects a *field tag formatter* template
for processing the field tag, and it's the same
for both JSON/CSV output (rendering/building) and input (parsing).
These are the interpreted sequences:

* `%d`: Tag number
* `%r`: Tag as a string in its raw format.
* `%z`: Same to `%r`, but removes the leading zeros from ISO tags
* `%i`: Field index number in the record, starting from zero
* `%%`: Escape for the `%` character

*Note*:
`%d` and `%i` options might have a numeric parameter in the middle
like the `printf`'s `%d` (e.g. recall `"%03d" % 15` in Python).

For the subfield processing, there are several options available:

* `--prefix`:
  Character/string that starts a new subfield in the field text
* `--length`:
  Size of the subfield key/tag (number of characters)
* `--lower/--no-lower`:
  Toggle for the normalization of the subfield key/tag,
  which is performed by simply lowering their case
* `--first`:
  The subfield key/tag to be used by the leading field data
  before the first prefix appears
* `--empty/--no-empty`:
  Toggle to show/hide the subfields with no characters at all
  (apart from the subfield key/tag)
* `--number/--no-number`:
  Repeated subfield keys are handled by adding a number suffix to them,
  starting from `1` in the first repeat,
  and this option toggles this behavior (to add the suffix or not)
* `--zero/--no-zero`:
  Choose if the first occurrence of each subfield key in a field
  should have a `0` suffix
  to follow the numbering described in the previous option
  (it has no effect when `--no-number`)
* `--sfcheck/--no-sfcheck` (for JSONL/CSV input only):
  Check if the specification of the subfield parsing/unparsing rules
  given in the previous parameters would resynthesize all input fields
  exactly in the way they appear

The `--xylose` option
is just an alternative way of using "`--mode=inest --ftf=v%z`".
To be more similar
to the [isis2json](https://github.com/scieloorg/isis2json) output
while still making use of the format expected by
[Xylose](https://github.com/scieloorg/xylose),
you should use instead "`--mode=nest --no-number --ftf=v%z`".


### Common MST/ISO input options

Both MST and ISO records have a STATUS flag,
which answers this question: *is this record logically deleted*?
STATUS equals to 1 means True (*deleted*), 0 means False (*active*).

Every record in the MST file structure has an MFN,
a serial number/ID of the record in the database.
A major difference between the `bruma-mst2*` commands
and the `mst2*` ones
is in the way they handle the MFN:
Bruma always access the MST file through the XRF file,
jumping the addresses to iterate through the records
sorting them by MFN,
whereas the Python implementation gets the records
in their block/offset order
(i.e., the order they appear in the input file).
For ISO files, there's no MFN stored,
but `ioisis` can generate it (starting from 1, like common MST records)
if they're required (e.g. for creating CSV files).

These options are common to several commands
when reading from MST or ISO files:

* `--only-active/--all`:
  Flag to select if the STATUS=1 records (logically deleted records)
  should be in the output or not
* `--prepend-mfn/--no-mfn`:
  Add an artificial field `mfn` at the beginning of each record
  with the record MFN as a string (though it's always a number)
* `--prepend-status/--no-status`
  Add an artificial field `status` at the beginning of each record
  with the record STATUS as a string
  (though it's usually just zero or one)


### ISO-specific options

The ISO file can be seen as just a sequence of records glued together.
Each record has 3 parts: a *leader*, a *directory* and *field values*.
The *leader* has some metadata,
most of them only accessible through the library, not the CLI
(only the STATUS is used by the CLI).
The *directory* is a sequence of constant-sized structures
(*directory items*),
each of them representing a single field
(its tag, its value length and its relative offset),
which is matched with its respective value
in the last part of the record.

Internally to the ISO file,
after the directory and between each field value,
there's a **field terminator**.
At the end of the record, there's both a **field terminator**
and, finally, a **record terminator**.
By default, CISIS uses the "`#`" as the terminator,
the same one for field and record,
and that's also the `ioisis` default.
But it's not always the case for input/output files.
For example, in the MARC21 specifications
the field terminator is the "`\x1e`" character
and the record terminator is the "`\x1d`" character.

These are the options for ISO I/O commands:

* `--ft`:
  ISO Field terminator
* `--rt`:
  ISO Record terminator
* `--line`:
  Line length for splitting a record (not counting the EOL)
* `--eol`:
  End of line (EOL) character or string, ignored if `--line=0`

The default values for them are the CISIS ones,
which are intended to make it possible to see the ISO file
as a common text file.
By default, every ISO record (raw bytes)
is splitten into lines of 80 bytes,
and an EOL gets printed after the record terminator,
so two records won't share the same line.
The line splitting is a CISIS-specific behavior,
it's required in order to open the ISO files it exports,
and it might make debugging easier.
Using "`--line=0`" disables this behavior,
joining everything as a single huge line.
The terminators might have more than one character, as well as the EOL,
and these 3 parameters (like other inputs shown as *BYTES* in the help)
are parsed by the CLI,
so "`\t`" is recognized as the TAB character
and "`\n`" as a LF (Line Feed).


### MST-specific options (Python/construct)

The options shown here regards to the Python implementation
of the MST file format builder/parser,
these are not available for the `bruma-*` commands.

The ISIS/FFI Master File Format (MST file) structure
is a binary file divided as joined records.
The overall structure of it is documented in the *Appendix G*
of the [Mini-micro CDS/ISIS: reference manual (version 2.3)](
  https://unesdoc.unesco.org/ark:/48223/pf0000211280
), however it's incomplete,
several enhancements had been done in the file structure
in order to make it possible to fit more data in these databases.
Nevertheless, the MST file is still a file with joined records,
where each record has 3 blocks: leader, directory and field values.
It's similar to an ISO file with an empty field and record terminator,
but the leader and directory items are binary,
the metadata isn't the same,
and the padding, alignment and sizes are quite hard to properly grasp.

This is the internal structure of the leader and a directory item
in a single record of a MST file
(it doesn't apply to the control record):

```raw
                   -------------------------------------------------
                  |    Format | ISIS     ISIS     FFI      FFI      |
                  | Alignment | 2        4        2        4        |
 -----------------------------+-------------------------------------|
|         Leader size (bytes) | 18       20       22       24       |
| Directory item size (bytes) | 6        6        10       12       |
|-----------------------------+-------------------------------------|
|           |      00-01      | MFN.1    MFN.1    MFN.1    MFN.1    |
|           |      02-03      | MFN.2    MFN.2    MFN.2    MFN.2    |
|           |      04-05      | MFRL     MFRL     MFRL.1   MFRL.1   |
|           |      06-07      | MFBWB.1  (filler) MFRL.2   MFRL.2   |
|           |      08-09      | MFBWB.2  MFBWB.1  MFBWB.1  MFBWB.1  |
|  Leader   |      10-11      | MFBWP    MFBWB.2  MFBWB.2  MFBWB.2  |
|           |      12-13      | BASE     MFBWP    MFBWP    MFBWP    |
|           |      14-15      | NVF      BASE     BASE.1   (filler) |
|           |      16-17      | STATUS   NVF      BASE.2   BASE.1   |
|           |      18-19      |          STATUS   NVF      BASE.2   |
|           |      20-21      |                   STATUS   NVF      |
|           |      22-23      |                            STATUS   |
|-----------+-----------------+-------------------------------------|
|           |      00-01      | TAG      TAG      TAG      TAG      |
|           |      02-03      | POS      POS      POS.1    (filler) |
| Directory |      04-05      | LEN      LEN      POS.2    POS.1    |
|   item    |      06-07      |                   LEN.1    POS.2    |
|           |      08-09      |                   LEN.2    LEN.1    |
|           |      10-11      |                            LEN.2    |
 -----------+-----------------+-------------------------------------|
            |  Offset (bytes) |              Structure              |
             -------------------------------------------------------
```

These structure names follow the Mini-micro CDS/ISIS reference manual,
where the "`.1`" and "`.2`" suffixes are there to expose
where the field has 4 bytes, otherwise the field has just 2 bytes.
The starting offset of every field must be
an integer multiple of the alignment number, hence the fillers.
The endianness don't change the position of any of these fields,
it just change the order of the 2 or 4 bytes of the field itself
(where *little* endian, known as "swapped" in CISIS,
means that the last byte of the data
is at the *lowest* address/offset).
Most of that structure shown up to now
can be controlled through three parameters:
the **Format**, the **Intra-record alignment** and the **Endianness**.
These are the two possible formats:

* *ISIS file format*:
  The original standard documented in the reference manual
* *FFI file format*:
  An alternative to overcome the record size of 16 bytes (MFRL),
  doubling it and all the other fields that has something to do
  with the internal offsets of a record

These are the MST-specific options
that control the main structure of its records:

* `--end`:
  Tells whether the bytes of each field are `big` or `little` endian,
  the `--le` and `--be` are shorthands for these, respectively
* `--format`:
  Choose the `isis` or `ffi` file format,
  the `--isis` and `--ffi` are shorthands for these
* `--packed/--unpacked`:
  These control the leader/directory alignment,
  *packed* means that their alignment is 2,
  whereas *unpacked* means that their aligment is 4.

The MST file has a leading record called the *Control record*,
whose MFN (*Master file number*, here *file* stands for a record)
is zero.
It has this 32-bytes structure
(apart from a trailing filler of 32 bytes in CISIS):

```raw
 -----------------------------
|  Offset (bytes) | Structure |
|-----------------+-----------|
|      00-01      | CTLMFN.1  |
|      02-03      | CTLMFN.2  |
|      04-05      | NXTMFN.1  |
|      06-07      | NXTMFN.2  |
|      08-09      | NXTMFB.1  |
|      10-11      | NXTMFB.2  |
|      12-13      | NXTMFP    |
|      14-15      | TYPE      |
|      16-17      | RECCNT.1  |
|      18-19      | RECCNT.2  |
|      20-21      | MFCXX1.1  |
|      22-23      | MFCXX1.2  |
|      24-25      | MFCXX2.1  |
|      26-27      | MFCXX2.2  |
|      28-29      | MFCXX3.1  |
|      30-31      | MFCXX3.2  |
 -----------------------------
```

The most important field in there is the TYPE shown above,
which is written as MFTYPE in the CDS/ISIS reference manual,
but the TYPE has actually two single-byte fields in it,
and the order of these two
is the only multi-field scenario that depends on the endianness:

* MSTXL *(most significant byte)*:
  The offset *shift* in all XRF entries (to be discussed)
* MFTYPE *(least significant byte)*:
  The master file type (should always be zero for user database files)

We've already seen the intra-record differences
among distinct MST file formats,
but the overall structure itself has differences.
A really important parameter for the overall MST file structure is the
**Inter-record alignment**.
Some details about the overall file structure and alignment are:

* The file is divided as 512-bytes *blocks*,
  and the last block should be filled up to the end
* The first record must be the control record
* The records are simply stacked one after another,
  but with alignment constraints:
  * The BASE and MFN fields of a record must be in the same block
  * The record itself should have an alignment of 2 bytes
    (word alignment, the ISIS default for inter-record alignment)

The *shift* name comes from the XRF file structure,
which has just 32 bytes
to store both the block, the offset and some flags.
The XRF should be capable of pointing to the address of every record
in the MST file,
hence some "bit twiddling" must be done to enable larger MST files.
This had been done through the MSTXL field,
which represents the *shift*,
the number of times we must *bit-shift the offset to the right*.
Doing so we lose the least significant bits,
hence our offsets should always be aligned to "2^shift"
(two raised to the power of *shift*).
That's the main inter-record alignment constraint we have.

These are the MST-specific options
regarding the inter-record alignment:

* `--control-len`:
  Length of the control record, in bytes,
  to control the first filler size
* `--shift` (MST file output only):
  The MSTXL value,
  telling the inter-record alignment should be of at least
  *2 raised to the power of MSTXL* bytes
* `--shift4is3/--shift4isnt3`:
  Toggle if MSTXL equals to 3 in a file or in `--shift`
  should be regarded as 4,
  it's a historical behavior of CISIS
* `--min-modulus`:
  The minimum inter-record alignment, in bytes (2 by default).
  This option makes it possible to bypass the standard word alignment,
  "`--min-modulus=1 --shift=0`" would make MST files
  with byte-alignment (i.e., with no inter-record padding/filler)

There are three locking mechanisms in ISIS
that might be stored in an MST file:

- EWLOCK *(Exclusive Write Lock)*:
  It's a flag, stored in MFCXX3 (control record)
- DELOCK *(Data Entry Lock)*:
  It's a counter, stored in MFCXX2 (control record),
  of how many records are locked at once
- RLOCK *(Record Lock)*:
  It's the sign of the MFRL (record length) of every record
  (the record size is actually the absolute value of MFRL)

Usually these makes no difference when the ISIS is just a static file
that no process is modifying,
and the `ioisis` CLI ignores the EWLOCK and DELOCK
(they can be accessed by `ioisis` as a library, though).
There's one option in `ioisis` to enable/disable
the interpretation of all these locks,
and it's exposed to the CLI since it affects the RLOCK:

* `--lockable/--no-locks`:
  Control if the MFRL should be signed (lockable)
  or unsigned (no RLOCK, doubling the record length limit)

Several are the fillers (padding characters)
that might appear in the MST file
due to the several alignment constraints.
Another issue with the MST file
is that it doesn't have one single filler for all these cases,
and perhaps some tool in some specific architecture
might behave differently.
As the parser is strict (i.e., it checks the alignment and fillers),
some of these might need to be tuned before loading the MST file,
and these are the commands that makes that possible:

* `--filler`:
  Default filler for unset filler options, but the record filler
* `--record-filler`:
  For the trailing record data, after the last field value
  (the default is a whitespace)
* `--control-filler`:
  For the trailing bytes of the control record
* `--slack-filler`:
  For the leader/directory when `--unpacked`
* `--block-filler`:
  For the last bytes in a 512-bytes block
  that don't belong to any record
  (end of file or due to the "MFN+BASE in the same block" constraint)

The filler options above have a single parameter,
which should always be a 2-characters string
with the filler byte code in hexadecimal.

Finally, sometimes the input MST file is corrupt and can't be loaded,
e.g. because the block filler isn't clean,
or because a MFRL is smaller than the actual record data.
Since the overall record structure has some internal constraints
(sizes and offsets/addresses),
`ioisis` can go ahead
ignoring the next few bytes that makes no sense as a new record.
To do so, one should call it with the *Invalid block padding* option
(`--ibp`),
whose value can be:

* `check` (default):
  The strict behavior, `ioisis` crashes when some invalid data appears
  in some offset that should have a record
* `ignore`:
  Silently skips the invalid data
* `store`:
  Put the trailing information in an artificial `ibp` field
  of the output, in hexadecimal


## Library

A common data structure in the library for representing a single record
is the *tidy list of tag-value pairs*, or **tl**.
It doesn't have anything to do with the `tidy`/`stidy` JSONL/CSV modes,
it's just a way to store the data
avoiding the scattered structure of the raw record container.
To load data with the library:

```python
from ioisis import bruma, iso, mst, fieldutils

# In the mst module, you must create a StructCreator instance
mst_sc = mst.StructCreator(ibp="store")
with open("file.mst", "rb") as raw_mst_file:
    for raw_tl in mst_sc.iter_raw_tl(raw_mst_file):
        tl = fieldutils.nest_decode(raw_tl, encoding="cp1252")
        ...

# For bruma.iter_tl the input must be a file name
for tl in bruma.iter_tl("file.mst", encoding="cp1252"):
    raw_tl = fieldutils.nest_encode(raw_tl, encoding="utf-8")
    ...

# The idea is similar for an ISO file, but ...
for raw_tl in iso.iter_raw_tl("file.iso"):
    tl = utf8_fix_nest_decode(raw_tl, encoding="latin1")
    ...

# ... for ISO files, you can always use either a file name
# or any file-like object open in "rb" mode
with open("file.iso", "rb") as raw_iso_file:
    for tl in iso.iter_tl(raw_iso_file, encoding="latin1"):
        ...
```

The following generator functions/methods
are the ones that appeared in the example above:

* `mst.StructCreator.iter_raw_tl`: Read MST keeping data in bytestrings
* `iso.iter_raw_tl`: Read ISO keeping data in bytestrings
* `bruma.iter_tl`: Read MST already decoding its contents
* `iso.iter_tl`: Read ISO already decoding its contents

It's worth noting that the following functions
from the `fieldutils` module
allows encoding/decoding all record fields/subfields at once:

* `nest_encode`
* `nest_decode`
* `utf8_fix_nest_decode`

The latter is the same to `nest_decode`,
but uses the given encoding as a fallback,
trying first to decoded all the contents as UTF-8.

What's the content of a single decoded *tl*?
It's a list of `[tag, value]` pairs (as lists or tuples), like:

```raw
[["5", "S"],
 ["6", "c"],
 ["10", "br1.1"],
 ["62", "Example Institute"]]
```

One can generate a single ISO record from a *tl*:

```python
>>> from ioisis import iso, fieldutils
>>> tl = [["1", "test"], ["8", "it"]]
>>> raw_tl = fieldutils.nest_encode(tl, encoding="utf-8")
>>> raw_tl
[[b'1', b'test'], [b'8', b'it']]
>>> con = fieldutils.tl2con(raw_tl, ftf=iso.DEFAULT_ISO_FTF)
>>> con
{'dir': [{'tag': b'001'}, {'tag': b'008'}], 'fields': [b'test', b'it']}
>>> iso.DEFAULT_RECORD_STRUCT.build(con)
b'000580000000000490004500001000500000008000300005#test#it##\n'

```

The process to create records is to convert them to the
*internal [construct] container format* (or simply **con**),
which is done by `fieldutils.tl2con`.
To create an MST file,
you can use the `build_stream` method of the `mst.StructCreator`,
whose first parameter should be a generator of *con* instances,
and the second is the seekable file object.

There's still a third format, called the *record dict* format,
which is based on the JSONL "`--mode=field`" output format.
It has less resources available internally to the library
when compared with the abovementioned alternative,
but it might be simpler to use in some cases:

```python
>>> iso.dict2bytes({"1": ["testing"], "8": ["it"]})
b'000610000000000490004500001000800000008000300008#testing#it##\n'

# The same, but from the tl
>>> tl = [["1", "testing"], ["8", "it"]]
>>> record = fieldutils.tl2record(tl)
>>> iso.dict2bytes(record)
b'000610000000000490004500001000800000008000300008#testing#it##\n'

```

To load ISIS data from `bruma` or `iso`,
you can also use the `iter_records` function
of the respective module,
but it's more customizable
if you use the `fieldutils` converter functions:

* `record2tl`
* `tl2record`
* `tl2con`

Perhaps the simplest way to understand the behavior of the library
is to use the CLI and to check the code of the called command.


### Modules

The modules available in the `ioisis` package are:

| **Module**    | **Content**                                         |
|:-------------:|:---------------------------------------------------:|
| `bruma`       | Everything about MST file processing based on Bruma |
| `ccons`       | Custom construct classes                            |
| `fieldutils`  | Field/subfield processing functions and classes     |
| `iso`         | ISO parsing/building stuff tools on construct       |
| `java`        | Java interfacing resources based on JPype1          |
| `mst`         | MST/XRF parsing/building tools based on construct   |
| `streamutils` | Classes for precise file/pipe processing            |
| `__main__`    | CLI (Command Line Interface)                        |

Usually, the only modules one would need from `ioisis`
to use it as a library
are `iso`, `mst`, `bruma` and `fieldutils`,
the remaining modules can be seen as internal stuff.

By default, the `mst` module doesn't use/create XRF files.
One can create/load XRF data using the struct created by
the `mst.StructCreator.create_xrf_struct` method.


### ISO construct containers (lower level data access Python API)

The `iso` module
uses the [Construct](https://github.com/construct/construct) library,
which makes it possible to create
a declarative "structure" object
that can perform bidirectional building/parsing
of bytestrings (instances of `bytes`)
or streams (files open in the `"rb"` mode)
from/to construct containers (dictionaries).


#### Building and parsing a single record

This low level data access
doesn't perform any string encoding/decoding,
so every *value* in the input dictionary
used for building some ISO data
should be a raw bytestring.
Likewise, the parser doesn't decode the encoded strings
(tags, fields and metadata),
keeping bytestrings in the result.

Here's an example
with a record in the "minimal" format expected by the ISO builder.
The values are bytestrings,
and each directory entry matches its field value based on their index.

```python
>>> lowlevel_dict = {
...     "dir": [{"tag": b"001"}, {"tag": b"555"}],
...     "fields": [b"a", b"test"],
... }

# Build a single ISO record bytestring from a construct.Container/dict
>>> iso_data = iso.DEFAULT_RECORD_STRUCT.build(lowlevel_dict)
>>> iso_data
b'000570000000000490004500001000200000555000500002#a#test##\n'

# Parse a single ISO record bytestring to a construct.Container
>>> con = iso.DEFAULT_RECORD_STRUCT.parse(iso_data)

# The construct.Container instance inherits from dict.
# The directory and fields are instances of construct.ListContainer,
# a class that inherits from list.
>>> [directory["tag"] for directory in con["dir"]]
[b'001', b'555']
>>> con.fields  # Its items can be accessed as attributes
ListContainer([b'a', b'test'])
>>> len(con.fields) == con.num_fields == 2  # A computed attribute
True

# This function directly converts that construct.Container object
# to a dictionary of already decoded strings in the the more common
# {tag: [field, ...], ..} format (default ISO encoding is cp1252):
>>> iso.con2dict(con).items()  # It's a defaultdict(list)
dict_items([('1', ['a']), ('555', ['test'])])

```


#### Other record fields

Each ISO record is divided in 3 parts:

* Leader (24 bytes header with metadata)
* Directory (metadata for each field value, mainly its 3-bytes *tag*)
* Fields (the field values themselves as bytestrings)

The *leader* has:

* Single character metadata (`status`, `type`, `coding`)
* Two numeric metadata (`indicator_count` and `identifier_len`),
  which should range only from 0 to 9
* Free room for "vendor-specific" stuff as bytestrings:
  `custom_2` and `custom_3`,
  where the numbers are their size in bytes
* An entry map, i.e., the size of each field of the directory:
  `len_len`, `pos_len` and `custom_len`,
  which should range only from 0 to 9
* A single byte, `reserved`, literally reserved for future use

```python
>>> con.len_len, con.pos_len, con.custom_len
(4, 5, 0)

```

Actually, the `reserved` is part of the entry map,
but it has no specific meaning there,
and it doesn't need to be a number.
Apart from the entry map and the not included length/address fields,
none of these metadata has any meaning when reading the ISO content,
and they're all filled with zeros by default
(the ASCII zero when they're strings).

```python
>>> con.status, con.type, con.coding, con.indicator_count
(b'0', b'0', b'0', 0)

```

Length and position fields that are stored in the record
(`total_len`, `base_addr`, `dir.len`, `dir.pos`)
are computed in build time and checked on parsing.
We don't need to worry about these fields,
but we can read them if needed.
For example, one directory record (a dictionary) has this:

```python
>>> con.dir[1]
Container(tag=b'555', len=5, pos=2, custom=b'')

```

As the default `dir.custom` field has zero length,
it's not really useful for most use cases.
Given that, we've already seen all the fields there are
in the low level ISO representation of a single record.


#### Tweaking the field lengths

The ISO2709 specification tells us
that a directory entry should have exactly 12 bytes,
which means that `len_len + pos_len + custom_len` should be 9.
However, that's not an actual restriction for this library,
so we don't need to worry about that,
as long as the entry map have the correct information.

Let's customize the length to get a smaller ISO
with some data in the `custom` field of the directory,
using a 8 bytes directory:

```python
>>> dir8_dict = {
...     "len_len": 1,
...     "pos_len": 3,
...     "custom_len": 1,
...     "dir": [{"tag": b"001", "custom": b"X"}, {"tag": b"555"}],
...     "fields": [b"a", b"test"],
... }
>>> dir8_iso = iso.DEFAULT_RECORD_STRUCT.build(dir8_dict)
>>> dir8_iso
b'0004900000000004100013100012000X55550020#a#test##\n'
>>> dir8_con = iso.DEFAULT_RECORD_STRUCT.parse(dir8_iso)
>>> dir8_con.dir[0]
Container(tag=b'001', len=2, pos=0, custom=b'X')
>>> dir8_con.dir[1]  # The default is always zero!
Container(tag=b'555', len=5, pos=2, custom=b'0')
>>> dir8_con.len_len, dir8_con.pos_len, dir8_con.custom_len
(1, 3, 1)

```

What happens if we try to build from a dictionary
that doesn't fit with the given sizes?

```python
>>> invalid_dict = {
...     "len_len": 1,
...     "pos_len": 9,
...     "dir": [{"tag": b"555"}],
...     "fields": [b"a string with more than 9 characters"],
... }
>>> iso.DEFAULT_RECORD_STRUCT.build(invalid_dict)
Traceback (most recent call last):
  ...
construct.core.StreamError: Error in path (building) -> dir -> len
bytes object of wrong length, expected 1, found 2

```


### ISO files, line breaking and delimiters

The ISO files usually have more than a single record.
However, these files are created by simply concatenating ISO records.
That simple: concatenating two ISO files
should result in another valid ISO file
with all the records from both.

Although that's not part of the ISO2709 specification,
the `iso.DEFAULT_RECORD_STRUCT` parser/builder object
assumes that:

* All lines of a given record but the last one
  must have exactly 80 bytes,
  and a line feed (`\x0a`) must be included after that;
* Every line must belong to a single record;
* The last line of a single record must finish with a `\x0a`.

That's the behavior of `iso.LineSplitRestreamed`,
which "wraps" internally the record structure
to give this "line splitting" behavior,
but that can be avoided by setting the `line_len` to `None` or zero
when creating a custom record struct.


#### Parsing/building data with meaningful line breaking characters

Suppose we want to store these values:

```python
>>> newline_info_dict = {
...     "dir": [{"tag": b"SIZ"}, {"tag": b"SIZ"}, {"tag": b"SIZ"}],
...     "fields": [b"linux^c\n^s1", b"win^c\r\n^s2", b"mac^c\r^s1"],
... }

```

That makes sense as an example of an ISO record
with three `SIZ` fields, each with three subfields,
where the second subfield
is the default newline character of some environment,
and the third subfield is its size.
Although can build that using the `DEFAULT_RECORD_STRUCT`
(the end of line never gets mixed with the content),
we know beforehand that our values have newline characters,
and we might want an alternative struct
without that "wrapped" line breaking behavior:

```python
>>> breakless_struct = iso.create_record_struct(line_len=0)
>>> newline_info_iso = breakless_struct.build(newline_info_dict)
>>> newline_info_iso
b'000950000000000610004500SIZ001200000SIZ001100012SIZ001000023#linux^c\n^s1#win^c\r\n^s2#mac^c\r^s1##'
>>> newline_info_con = breakless_struct.parse(newline_info_iso)
>>> newline_info_simple_dict = dict(iso.con2dict(newline_info_con))
>>> newline_info_simple_dict
{'SIZ': ['linux^c\n^s1', 'win^c\r\n^s2', 'mac^c\r^s1']}
>>> newline_info_iso == iso.dict2bytes(
...     newline_info_simple_dict,
...     record_struct=breakless_struct,
... )
True

```


#### Parsing/building with a custom line breaking and delimiters

The default builder/parser for a single record
was created with:

```python
DEFAULT_RECORD_STRUCT = iso.create_record_struct(
    field_terminator=iso.DEFAULT_FIELD_TERMINATOR,
    record_terminator=iso.DEFAULT_RECORD_TERMINATOR,
    line_len=iso.DEFAULT_LINE_LEN,
    newline=iso.DEFAULT_NEWLINE,
)
```

We can create a custom object using other values.
To use it, we'll pass that object
as the `record_struct` keyword argument
when calling the functions.


```python
>>> simple_data = {
...     "OBJ": ["mouse", "keyboard"],
...     "INF": ["old"],
...     "SIZ": ["34"],
... }
>>> custom_struct = iso.create_record_struct(
...     field_terminator=b";",
...     record_terminator=b"@",
...     line_len=20,
...     newline=b"\n",
... )
>>> simple_data_iso = iso.dict2bytes(
...     simple_data,
...     record_struct=custom_struct,
... )
>>> from pprint import pprint
>>> pprint(simple_data_iso.decode("ascii"))
('00096000000000073000\n'
 '4500OBJ000600000OBJ0\n'
 '00900006INF000400015\n'
 'SIZ000300019;mouse;k\n'
 'eyboard;old;34;@\n')
>>> simple_data_con = custom_struct.parse(simple_data_iso)
>>> simple_data == iso.con2dict(simple_data_con)
True

```

The calculated sizes don't count the extra line breaking characters:

```python
>>> simple_data_con.total_len, simple_data_con.base_addr
(96, 73)

```
