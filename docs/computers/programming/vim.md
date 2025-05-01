# Vim

A text editor.

There are other text editors out there.
[People can have different opinions](https://en.wikipedia.org/wiki/Editor_war).
It's just I like Vim and I recommend it.

Even you are not using the Vim editor in the terminal, I suggest learning the
Vim navigation and editing commands. It makes it easier and faster to navigate.

Vim the editor runs in the terminal. But to navigate like in Vim, you can still
use VS Code, JetBrains or any other modern editors. There are plugins to emulate
and support Vim navigation inside these editors. Taking advantage of these
editors while still be able to navigate like in Vim.

- VS Code:
  [`vscodevim`](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)
- JetBrains: [`IdeaVim`](https://plugins.jetbrains.com/plugin/164-ideavim)

But if these modern editor is too slow or inflexible, then Vim or Neovim are
standalone and high efficient text editors in the terminal. There are numerous
plugins and configuration available. However, they do not work out of the box
the way you would expect how modern editors work. Some set up and configuration
are required to match the same functionality.

## Resources

- YouTube:
  [Vim As Your Editor | ThePrimeagen](https://youtube.com/playlist?list=PLm323Lc7iSW_wuxqmKx_xxNtJC_hJbQ7R)
  - I learned Vim from these serious of videos
  - Once the basics are there, enable Vim mode in editors
  - The rest can be self-taught and figured out on the go
- Run `vimtutor` and follow the tutorial

## Sites

Tips

- [Vim Cheat Sheet](https://vim.rtorr.com/)
- [Vim Tips Wiki](https://vim.fandom.com/wiki/Special:AllPages)

Some tools

- [Vim](https://www.vim.org/) the editor
- [Neovim](https://neovim.io/) the more extensible Vim with Lua API
- [LazyVim](https://www.lazyvim.org/) make neovim easy to customize and extend
- [NvChad](https://nvchad.com/) is another neovim config providing a solid
  defaults

## Links

- [Helping One Million Developers Exit Vim | Stack Overflow](https://stackoverflow.blog/2017/05/23/stack-overflow-helping-one-million-developers-exit-vim/)
  - How to exit the Vim editor is a common joke and one of the popular question
    on Stack Overflow
- [Moving Blazingly Fast With The Core Vim Motions](https://www.barbarianmeetscoding.com/boost-your-coding-fu-with-vscode-and-vim/moving-blazingly-fast-with-the-core-vim-motions/)
  - `w`, `b`, `e`, `ge` and capitalized for word
  - `f`, `t` and capitalized for find
  - `0`, `^`, `$`, `g_` for start/end of line
  - `{`, `}`, `Ctrl-u`, `Ctrl-d`, `%`, `gg`, `G` for jump and more
- [Understanding the Origins and the Evolution of Vi & Vim](https://pikuma.com/blog/origins-of-vim-text-editor)
  - From `ed` to `em`, `ex`, and `vi`, then to all the `vi` clones like `vim`
