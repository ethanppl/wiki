# Tips/Tricks/Configs

A few tricks and configurations improved my user experience.

Related

- [Keyboard](./keyboard.md) — see keyboard remapping with AutoHotkey or keyd

## Links

### Linux

- [`Received disconnect from x.x.x.x port 22:2: Too many authentication failures`](https://www.tecmint.com/fix-ssh-too-many-authentication-failures-error/)
  - `IdentitiesOnly=yes`
- [Size of folder and files in a directory](https://unix.stackexchange.com/questions/185764/how-do-i-get-the-size-of-a-directory-on-the-command-line)
  - `du -h --max-depth=1 | sort -hr`
- [How to make active window visually stand out more in Ubuntu 18.04 Gnome 3](https://askubuntu.com/questions/1098539/how-to-make-active-window-visually-stand-out-more-in-ubuntu-18-04-gnome-3)
  - `~/.config/gtk-3.0/gtk.css` set `decoration`/ `decoration:backdrop` and
    `headerbar.titlebar`/`headerbar.titlebar:backdrop`
- Tmux copy to clipboard
  - Add `set -s copy-comand 'xclip -selection clipboard -i'` in `.tmux.conf`
    (tmux 3.2 and later)
  - All of the following doesn't work but gave me some ideas:
  - [StackExchange](https://unix.stackexchange.com/questions/348913/copy-selection-to-a-clipboard-in-tmux),
    [StackOverflow](https://stackoverflow.com/questions/48129640/how-can-i-copy-text-from-a-tmux-window-to-the-system-clipboard),
    [Clipboard | Tmux Wiki](https://github.com/tmux/tmux/wiki/Clipboard)
- [PulseAudio/Examples | ArchWiki](https://wiki.archlinux.org/title/PulseAudio/Examples)
  - Problem I faced: plugin mic also changed the output device from earphones to
    mic output
  - Solution: select an input only profile for the mic card
  - `set-card-profile <card-name> <profile-name>`
    ([reference](https://wiki.archlinux.org/title/PulseAudio/Examples#Set_the_default_output_sink_profile))
- [A Guide to Customizing Your tmux conf](https://hamvocke.com/blog/a-guide-to-customizing-your-tmux-conf/)
  - Changing the prefix key, split commands, pane navigation, etc.

### Windows

- [Pinout "Sound" to Windows Taskbar](https://superuser.com/questions/1271817/how-to-pin-out-sound-to-windows-taskbar)
- [Windows search configuration](https://devblogs.microsoft.com/windows-search-platform/configuration-and-settings/)
  — remove folders like `node_modules` in the list of search locations to speed
  up searches
- [Start specific Chrome user profile](https://superuser.com/questions/377186/how-do-i-start-chrome-using-a-specified-user-profile)
  — specify `--profile-directory=Default`
- [Filesystems in Windows and WSL](https://learn.microsoft.com/en-us/windows/wsl/filesystems)
  - Path to WSL in Windows: `\\wsl.localhost\Ubuntu-20.04`
  - Path to Windows in WSL: `/mnt/c/`.
