# Tips/Tricks/Configs

A few tricks and configurations improved my user experience.

Related

- [Keyboard](./keyboard.md) — see keyboard remapping with AutoHotkey, keyd, or
  Karabiner

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
- [Loom: our Linux starter pack | too inconsistent](https://tooinconsistent.com/writings/loom-introduction/)
  - A set of sensible default software that respect users
  - Distro: Arch; Window Manager: Niri; Editor: Neovim
  - Also `bat` (cat), `eza` (ls), `lazygit` (git), `zoxide` (cd)
- [omarchy](https://omarchy.org/)
  ([Manual](https://learn.omacom.io/2/the-omarchy-manual))
  - Opinionated linux setup by DHH, e.g. ship with Neovim with lazyvim by
    default

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

### Mac

- Mac specific shortcuts
  - `Cmd + Shift + 3`: capture full-screen
  - `Cmd + Shift + 4`: capture portion of screen
  - `Cmd + Shift + 4 + Space`: capture a window
  - `Cmd + Shift + 5`: capture with the screenshot app
  - `Cmd + ?`: open help menu and search the menu bar
  - `Cmd + Space`: spotlight
  - `Cmd + Option + q`: lock the screen
  - Read more on
    [Mac keyboard shortcuts](https://support.apple.com/en-us/102650) and
    [Take a screenshot on Mac](https://support.apple.com/en-us/102646)

<details>

<summary>A list of all shortcuts symbols using the `Option` key, e.g. `Option + 2` = ™</summary>

- This is based on the English US keyboard.
- `Option + Shift + k` is the Apple logo, but I am not able display it here
- For the accent key, first press the accent then type the letter. E.g. `ã` is
  `Option + n` then `a`

| _key_ | Option + key | Option + Shift + key |
| ----- | ------------ | -------------------- |
| 1     | ¡            | ⁄                    |
| 2     | ™            | €                    |
| 3     | £            | ‹                    |
| 4     | ¢            | ›                    |
| 5     | ∞            | ﬁ                    |
| 6     | §            | ﬂ                    |
| 7     | ¶            | ‡                    |
| 8     | •            | °                    |
| 9     | ª            | ·                    |
| 0     | º            | ‚                    |
| a     | å            | Å                    |
| b     | ∫            | ı                    |
| c     | ç            | Ç                    |
| d     | ∂            | Î                    |
| e     | ´ (accent)   | ´                    |
| f     | ƒ            | Ï                    |
| g     | ©            | ˝                    |
| h     | ˙            | Ó                    |
| i     | ˆ (accent)   | ˆ                    |
| j     | ∆            | Ô                    |
| k     | ˚            | (Apple icon)         |
| l     | ¬            | Ò                    |
| m     | µ            | Â                    |
| n     | ˜ (accent)   | ˜                    |
| o     | ø            | Ø                    |
| p     | π            | ∏                    |
| q     | œ            | Œ                    |
| r     | ®            | ‰                    |
| s     | ß            | Í                    |
| t     | †            | ˇ                    |
| u     | ¨ (accent)   | ¨                    |
| v     | √            | ◊                    |
| w     | ∑            | „                    |
| x     | ≈            | ˛                    |
| z     | Ω            | ¸                    |
| y     | ¥            | Á                    |
| `     | ` (accent)   | `                    |
| -     | –            | —                    |
| =     | ≠            | ±                    |
| [     | “            | ”                    |
| ]     | ‘            | ’                    |
| \     | «            | »                    |
| ;     | …            | Ú                    |
| '     | æ            | Æ                    |
| ,     | ≤            | ¯                    |
| .     | ≥            | ˘                    |
| /     | ÷            | ¿                    |

</details>

### ffmpeg

#### Trim

```bash
ffmpeg -ss 00:00:10 -to 00:00:50 -i input.mp4 -c copy output.mp4
ffmpeg -i input.mp4 -ss 00:00:10 -t 30 output.mp4
```

- `-ss`: start time of the clip, can also be `00:00:10.001` (with milliseconds)
- `-to`: end time of the clip, can also be `00:00:50.001` (with milliseconds)
- `-t 30`: duration of the clip instead of (`-to`), can also be `30.001` (with
  milliseconds)
- Put `-ss` before `-i` for faster seeking, but less accurate
- Put `-ss` after `-i` for frame-accurate cut but requires re-encoding

#### Re-encode / Compress

```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 18 -preset slow -c:a copy output.mp4
```

- `-crf 18`: `18` nearly lossless, `23` ffmpeg default, `28` smaller but start
  to see data loss
- `-preset slow`: slower encoding but better compression efficiency (better
  quality per MB)
- `-c:a copy`: copy the audio stream without re-encoding

#### Rescale

```bash
ffmpeg -i input.mp4 -vf scale=1920:-1 output.mp4
```

- `-vf scale=1920:-1`: rescale video to width `1920` while maintaining aspect
  ratio

#### Crop

```bash
ffmpeg -i input.mp4 -vf "crop=1920:1080:0:0" output.mp4
ffmpeg -i input.mp4 -vf "crop=1080:1080" output.mp4
ffmpeg -i input.mp4 -t 30 -vf cropdetect -f null -
```

- `-vf "crop=w:h:x:y"`: crop video to width `w`, height `h`, starting at
  position `x`,`y`
- Without x and y, the crop is automatically centred
- `-t 30 -vf cropdetect -f null -`: detect crop area for the first 30 seconds of
  the video, and outputs the crop parameters to the console

#### Extract / Remove audio

```bash
ffmpeg -i input.mp4 -vn -c:a libmp3lame -q:a 2 output.mp3
ffmpeg -i input.mp4 -an -c:v copy output.mp4
```

- `-vn`: video none, disable video recording
- `-an`: audio none, disable audio recording
- `-c:a libmp3lame`: encode audio to the MP3 codec
- `-q:a 2`: Sets the quality (2 is very high, 0 is highest)

#### JPG to WEBP

```bash
ffmpeg -i input.jpg \
  -vf "scale=1920:-1" \
  -c:v libwebp \
  -q:v 75 \
  -preset photo \
  -map_metadata -1 \
  output.webp
```

- `-vf "scale=1920:-1"`: rescale image to width `1920` with same aspect ratio
- `-c:v libwebp`: WEBP codec
- `-q:v 75`: quality of the output WEBP image (0-100, higher is better)
- `-preset photo`: use the photo preset for better quality
- `-map_metadata -1`: remove metadata from the output image
