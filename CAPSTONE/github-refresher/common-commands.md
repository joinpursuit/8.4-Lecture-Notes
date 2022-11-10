| git | Argument |  Flag(s)/Additional arguments                          |   Description             |
| :-: | :------: | :-------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------: |
| git |init   |                                                                                                     |                                                          Initializes a new repository                                                          |
| git |   add    | `.` (everything on this directory level and lower) or filename or `-A` (all the files in this repo) |  Takes untracked files and adds them to the staging area so that they can be committed                              |
| git |  commit  |  -m 'some message'  |      Takes a snapshot of files in the staging area/ saves this version of them as a commit                              |
| git |  remote  |       -v         | Shows the remote repositories associated with the local repository. Most repositories have an alias for their urls like `origin` or `upstream` |
| git |   pull   | upstream master    |     Gets files from a url with an alias of `upstream` from its branch `master`                                   |
| git |   push   |    origin dev  |    Sends files to a url with an alias of `origin` to its branch `dev`                                       |
| git |   log    | --oneline                                              |                              Shows a log of commits of a repo (--oneline shows a truncated message)_`q` to exit_                               |
| git |  status  |             |     Shows the state of files in a repo (untracked, modified, staged)                                        |


[git docs](https://www.git-scm.com/doc)
