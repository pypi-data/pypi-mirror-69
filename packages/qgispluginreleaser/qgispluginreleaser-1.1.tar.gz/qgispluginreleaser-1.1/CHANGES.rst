Changelog of qgispluginreleaser
===================================================


1.1 (2020-05-25)
----------------

- Allow the ``metadata.txt`` to also be one subdirectory deeper.


1.0 (2017-06-20)
----------------

- Use the codecs package in conjunction with "utf8" to read and write files.


0.2 (2016-02-01)
----------------

- Qgis expects zip filenames to use a dot as name/version separator instead of
  a dash. We now create the zipfile with a dot instead.


0.1 (2016-01-19)
----------------

- Initial project structure created with nensskel.

- Changing versions in metadata.txt in the prerelease/postrelease step.

- Creating a zipfile (with version number in the filename) automatically in
  the release step. Note that you must answer "yes" to the "checkout a tag?"
  question.
