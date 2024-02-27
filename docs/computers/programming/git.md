# Git

Git commands.

## Sites

- [oh shit, git](https://ohshitgit.com/) or
  [dang it, git](https://dangitgit.com/), when you think you messed up
- [Git Tips and Tricks](https://blog.gitbutler.com/git-tips-and-tricks/)
  - `git blame -w -C -C -C -L 15,26 path/to/file`, ignore rename, movements,
    etc.
  - `git diff --word-diff`, diff by word, e.g. tailwind
  - `git config --global branch.sort -committerdate`, sort branches by last
    commit
  - `git push --force-with-lease`, only force push if the ref is latest
  - `git maintenance start`, cron job for prefetch and other optimizations
  - `git config core.fsmonitor true` on large repo, faster `git status`

## Notes

- [Remove files that are in `.gitignore` but still in the repository](https://stackoverflow.com/questions/13541615/how-to-remove-files-that-are-listed-in-the-gitignore-but-still-on-the-repositor)
  - `git rm --cached path/to/file`
- [Copy or reset a single file from another branch/commit](https://stackoverflow.com/questions/7147270/hard-reset-of-a-single-file)
  - `git checkout <branch/commit> -- file-name.txt`
- [Delete a collection of branches with grep](https://stackoverflow.com/questions/3670355/can-you-delete-multiple-branches-in-one-command-with-git)
  - `` git branch -d `git branch | grep <pattern>` ``
- [Ignore a file without `.gitignore`](https://luisdalmolin.dev/blog/ignoring-files-in-git-without-gitignore/)
  - Use `.git/info/exclude` and maybe need
    `git update-index —assume-unchanged path/to/file.ext`

## Links

- [Why SQLite Does Note Use Git](https://www.sqlite.org/whynotgit.html)
  ([HN](https://news.ycombinator.com/item?id=36830813))
  - Lacks situational awareness, difficult to find successors and descendants,
    complex model, no historical branch names, etc.
- [The Git object model](http://shafiul.github.io/gitbook/1_the_git_object_model.html)
  - From a blob object, to a tree object, to a commit object and how they all
    fit together in a Git repo
- [Where do you files live in a Git repository? Julia Evans](https://jvns.ca/blog/2023/09/14/in-a-git-repository--where-do-your-files-live-/)
  - Tracing and finding any version of a specific file in the `.git` directory
  - Content addressed storage: the name of the file is the hash of the content,
    same content doesn't take extra space
- [Organizing multiple git identities](https://garrit.xyz/posts/2023-10-13-organizing-multiple-git-identities)
  ([HN](https://news.ycombinator.com/item?id=37886049))
  - Organize repos into separate directories
  - Git config can conditionally include other git config file with
    ```
    [includeIf "gitdir:~/personal/"]
      path = ~/.gitconfig-personal
    ```
- [Some miscellaneous git facts | Julia Evans](https://jvns.ca/blog/2023/10/20/some-miscellaneous-git-facts/)
  - About the staging area, internals of stashes, types of references, and merge
    commits diff
- [Git branches: intuition and reality | Julia Evans](https://jvns.ca/blog/2023/11/23/branches-intuition-reality/)
  - Git branches are the full history of commits, not just the diff between
    branches
  - Intuitive model: branches only contains "offshoot commits". This is helpful
    explaining some but not all git operations
- [GQL - Git Query Language | Github @AmrDeveloper](https://github.com/AmrDeveloper/GQL)
  - SQL like language to perform queries on files inside `.git`
  - "Tables" for `references`, `commits`, `diffs`, `branches`, and `tags`
  - E.g.: `SELECT DISTINCT title as tt FROM commits`
- [Inside `.git` | Julia Evans](https://jvns.ca/blog/2024/01/26/inside-git/)
  - A comic and explanation of what's each directory is for in `.git`
- [My favourite Git commit](https://dhwthompson.com/2019/my-favourite-git-commit)
  ([HN](https://news.ycombinator.com/item?id=39217149) has some good comments
  too)
  - [The commit `63b36f93bf75a848e2125008aa1e880c5861cf46`](https://github.com/alphagov/govuk-puppet/commit/63b36f93bf75a848e2125008aa1e880c5861cf46),
    plus some comments of the commit in GitHub
  - Explains the reason for change, error message is searchable, tells a story,
    reader learns something, and it builds compassion and trust
  - Or maybe I would put it in the PR description or internal docs
- [Popular git config options](https://jvns.ca/blog/2024/02/16/popular-git-config-options/)
  - A few I like: `merge.conflictstyle zdiff3`, `diff.algorithm histogram`,
    `push.autoSetupRemote true`
