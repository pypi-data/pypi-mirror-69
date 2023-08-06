# Fn Deps

Simple helpers for managing and publishing dependencies.

This is used by teh fn_graph project and currently only supports poetry based repos. The primary point is to make publishing a package easy and dependable. The main call is:

`fn_deps publish <major|minor|patch>`

This will:

* Check there are no uncommitted changed
* Check you are up to date with the origin/master branch
* Update the package version
* Use dephell to create a setup.py (very nice for local development)
* Commit the changes ot the version and setup.py
* Build the package
* Tag the commit with the version
* Push the branch and the tags to origin
* Publish the package on Pypi

If anything goes wrong it will revert to the original commit without any changes.
