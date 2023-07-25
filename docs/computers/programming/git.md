# Git

Git commands.

## Sites

- [oh shit, git](https://ohshitgit.com/) or
  [dang it, git](https://dangitgit.com/)

## Notes

- [Remove files that are in `.gitignore` but still in the repository](https://stackoverflow.com/questions/13541615/how-to-remove-files-that-are-listed-in-the-gitignore-but-still-on-the-repositor)
  - `git rm --cached path/to/file`
- [Copy or reset a single file from another branch/commit](https://stackoverflow.com/questions/7147270/hard-reset-of-a-single-file)
  - `git checkout <branch/commit> -- file-name.txt`

## Links

- [Why SQLite Does Note Use Git](https://www.sqlite.org/whynotgit.html)
  ([HN](https://news.ycombinator.com/item?id=36830813))
  - Lacks situational awareness, difficult to find successors and descendants,
    complex model, no historical branch names, etc.
