"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[9698],{3431:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var s=i(4848),o=i(8453);const t={},r="Tips/Tricks/Configs",c={id:"computers/configs",title:"Tips/Tricks/Configs",description:"A few tricks and configurations improved my user experience.",source:"@site/docs/computers/configs.md",sourceDirName:"computers",slug:"/computers/configs",permalink:"/computers/configs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cellular Automaton",permalink:"/computers/cellular-automaton"},next:{title:"Cybersecurity",permalink:"/computers/cybersecurity"}},l={},d=[{value:"Links",id:"links",level:2},{value:"Linux",id:"linux",level:3},{value:"Windows",id:"windows",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"tipstricksconfigs",children:"Tips/Tricks/Configs"})}),"\n",(0,s.jsx)(n.p,{children:"A few tricks and configurations improved my user experience."}),"\n",(0,s.jsx)(n.p,{children:"Related"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/computers/keyboard",children:"Keyboard"})," \u2014 see keyboard remapping with AutoHotkey or keyd"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,s.jsx)(n.h3,{id:"linux",children:"Linux"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.tecmint.com/fix-ssh-too-many-authentication-failures-error/",children:(0,s.jsx)(n.code,{children:"Received disconnect from x.x.x.x port 22:2: Too many authentication failures"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"IdentitiesOnly=yes"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://unix.stackexchange.com/questions/185764/how-do-i-get-the-size-of-a-directory-on-the-command-line",children:"Size of folder and files in a directory"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"du -h --max-depth=1 | sort -hr"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://askubuntu.com/questions/1098539/how-to-make-active-window-visually-stand-out-more-in-ubuntu-18-04-gnome-3",children:"How to make active window visually stand out more in Ubuntu 18.04 Gnome 3"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"~/.config/gtk-3.0/gtk.css"})," set ",(0,s.jsx)(n.code,{children:"decoration"}),"/ ",(0,s.jsx)(n.code,{children:"decoration:backdrop"})," and\n",(0,s.jsx)(n.code,{children:"headerbar.titlebar"}),"/",(0,s.jsx)(n.code,{children:"headerbar.titlebar:backdrop"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Tmux copy to clipboard","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add ",(0,s.jsx)(n.code,{children:"set -s copy-comand 'xclip -selection clipboard -i'"})," in ",(0,s.jsx)(n.code,{children:".tmux.conf"}),"\n(tmux 3.2 and later)"]}),"\n",(0,s.jsx)(n.li,{children:"All of the following doesn't work but gave me some ideas:"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://unix.stackexchange.com/questions/348913/copy-selection-to-a-clipboard-in-tmux",children:"StackExchange"}),",\n",(0,s.jsx)(n.a,{href:"https://stackoverflow.com/questions/48129640/how-can-i-copy-text-from-a-tmux-window-to-the-system-clipboard",children:"StackOverflow"}),",\n",(0,s.jsx)(n.a,{href:"https://github.com/tmux/tmux/wiki/Clipboard",children:"Clipboard | Tmux Wiki"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://wiki.archlinux.org/title/PulseAudio/Examples",children:"PulseAudio/Examples | ArchWiki"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Problem I faced: plugin mic also changed the output device from earphones to\nmic output"}),"\n",(0,s.jsx)(n.li,{children:"Solution: select an input only profile for the mic card"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"set-card-profile <card-name> <profile-name>"}),"\n(",(0,s.jsx)(n.a,{href:"https://wiki.archlinux.org/title/PulseAudio/Examples#Set_the_default_output_sink_profile",children:"reference"}),")"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://hamvocke.com/blog/a-guide-to-customizing-your-tmux-conf/",children:"A Guide to Customizing Your tmux conf"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Changing the prefix key, split commands, pane navigation, etc."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"windows",children:"Windows"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://superuser.com/questions/1271817/how-to-pin-out-sound-to-windows-taskbar",children:'Pinout "Sound" to Windows Taskbar'})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://devblogs.microsoft.com/windows-search-platform/configuration-and-settings/",children:"Windows search configuration"}),"\n\u2014 remove folders like ",(0,s.jsx)(n.code,{children:"node_modules"})," in the list of search locations to speed\nup searches"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://superuser.com/questions/377186/how-do-i-start-chrome-using-a-specified-user-profile",children:"Start specific Chrome user profile"}),"\n\u2014 specify ",(0,s.jsx)(n.code,{children:"--profile-directory=Default"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/filesystems",children:"Filesystems in Windows and WSL"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Path to WSL in Windows: ",(0,s.jsx)(n.code,{children:"\\\\wsl.localhost\\Ubuntu-20.04"})]}),"\n",(0,s.jsxs)(n.li,{children:["Path to Windows in WSL: ",(0,s.jsx)(n.code,{children:"/mnt/c/"}),"."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var s=i(6540);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);