# Tips/Tricks/Configs

A few tricks and configurations improved my user experience.

## Links

### Linux

- [`Received disconnect from x.x.x.x port 22:2: Too many authentication failures`](https://www.tecmint.com/fix-ssh-too-many-authentication-failures-error/)
  - `IdentitiesOnly=yes`
- [Size of folder and files in a directory](https://unix.stackexchange.com/questions/185764/how-do-i-get-the-size-of-a-directory-on-the-command-line)
  - `du -h --max-depth=1 | sort -hr`
- [How to make active window visually stand out more in Ubuntu 18.04 Gnome 3](https://askubuntu.com/questions/1098539/how-to-make-active-window-visually-stand-out-more-in-ubuntu-18-04-gnome-3)
  - `~/.config/gtk-3.0/gtk.css` set `decoration`/ `decoration:backdrop` and
    `headerbar.titlebar`/`headerbar.titlebar:backdrop`

### Windows

- [AutoHotkey](https://github.com/ethanppl/ahk),
  [run AHK on startup](https://stackoverflow.com/questions/41723490/how-to-build-ahk-scripts-automatically-on-startup)
- [Pinout "Sound" to Windows Taskbar](https://superuser.com/questions/1271817/how-to-pin-out-sound-to-windows-taskbar)
- [Windows search configuration](https://devblogs.microsoft.com/windows-search-platform/configuration-and-settings/)
  — remove folders like `node_modules` in the list of search locations to speed
  up searches
- [Start specific Chrome user profile](https://superuser.com/questions/377186/how-do-i-start-chrome-using-a-specified-user-profile)
  — specify `--profile-directory=Default`
- [Filesystems in Windows and WSL](https://learn.microsoft.com/en-us/windows/wsl/filesystems)
  - Path to WSL in Windows: `\\wsl.localhost\Ubuntu-20.04`
  - Path to Windows in WSL: `/mnt/c/`.
