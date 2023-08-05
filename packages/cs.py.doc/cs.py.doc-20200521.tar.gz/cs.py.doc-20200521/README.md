Create documentation from python modules and other objects.

*Latest release 20200521*:
Initial PyPI release.

## Function `module_doc(module, *, sort_key=<function <lambda> at 0x10293b430>, filter_key=<function <lambda> at 0x1029bc310>)`

Fetch the docstrings from a module and assemble a MarkDown document.

Parameters:
* `module`: the module or module name to inspect
* `sort_key`: optional key for sorting names in the documentation;
  default: `name.lower()`
* filter_key`: optional test for a key used to select or reject keys
  to appear in the documentation

## Function `obj_docstring(obj)`

Return a docstring for `obj` which has been passed through `stripped_dedent`.

This function uses `obj.__doc__` if it is not `None`,
otherwise `getcomments(obj)` if that is not `None`,
otherwise `''`.
The chosen string is passed through `stripped_dedent` before return.

# Release Log



*Release 20200521*:
Initial PyPI release.
