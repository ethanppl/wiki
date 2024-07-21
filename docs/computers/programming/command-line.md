# Command Line Interface

Text-based interface.

## Resources

- [The Linux Command Line for Beginners | Ubuntu](https://ubuntu.com/tutorials/command-line-for-beginners#1-overview)
  - If you don't know what are `cd`, `ls`, and `grep`, this might be where to
    start
  - Ultimately, learn by trial and error
- [Command Line Interface Guidelines](https://clig.dev/)
  - A guide to building command line interfaces, very detailed and informative
  - The philosophy of a good CLI and the guidelines to follow when building one
- [The terminal | furbo.org](https://furbo.org/2014/09/03/the-terminal/)
  - A long list of commands in Unix and Mac

## Sites

- [Modern Unix](https://github.com/ibraheemdev/modern-unix)
  - A collection of modern alternatives for some classic Unix commands
- [Explain Shell](https://explainshell.com/)
  - Visually breaking down and explaining a shell command
- [tldr.sh](https://tldr.sh/)
  - Simplified and community-driven manual

## Links

- [What is the SSH randomart image for?](https://bytes.zone/posts/what-is-the-randomart-image-for/)
  - There is a "randomart image" from `ssh-keygen` from the terminal
  - Support comparing host keys visually, especially recognizing host keys that
    have been changed
- [CLI tools in the Python standard library | Simon Willison](https://til.simonwillison.net/python/stdlib-cli-tools)
  ([HN](https://news.ycombinator.com/item?id=36515531))
  - Server current directory over HTTP: `python -m http.server 8000`
  - Pretty-print JSON: `echo '{"key": "value"}' | python -m json.tool`
  - `tokenize`, `base64`, `random`, `calendar`, etc.
- [What does `2>/dev/null` means?](https://askubuntu.com/questions/350208/what-does-2-dev-null-mean)
  - `>` means redirect, `2> file` means redirect `stderr` to file, `/dev/null`
    is the null device
