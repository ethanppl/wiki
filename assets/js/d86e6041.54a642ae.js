"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[2319],{5789:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var i=o(372),t=o(4848),s=o(8453);const r={title:"How I use keyd to remap my keyboard in Ubuntu 22.04 with Wayland",tags:[{label:"Ubuntu",permalink:"ubuntu"},{label:"Tips & Configs",permalink:"tips-and-configs"},{label:"Computers",permalink:"computers"}],toc_min_heading_level:2,toc_max_heading_level:3,authors:"ethan"},d=void 0,a={authorsImageUrls:[void 0]},c=[{value:"Why I Remap my Keyboard",id:"why-i-remap-my-keyboard",level:2},{value:"Basic Concepts in <code>keyd</code>",id:"basic-concepts-in-keyd",level:2},{value:"Sharing my Configuration",id:"sharing-my-configuration",level:2},{value:"Main layer",id:"main-layer",level:3},{value:"Shift layer",id:"shift-layer",level:3},{value:"The <code>z</code> layer",id:"the-z-layer",level:3},{value:"The <code>z+m</code> layer, a layer on top of a layer",id:"the-zm-layer-a-layer-on-top-of-a-layer",level:3},{value:"Other thoughts",id:"other-thoughts",level:2},{value:"Useful links",id:"useful-links",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Think about how you use your keyboard. Imagine how good it would be if your\n",(0,t.jsx)(n.code,{children:"CapsLock"})," can be used as ",(0,t.jsx)(n.code,{children:"Ctrl"}),", how much better it would be for your left\npinky? That is the power of remapping the keyboard. It means you can customize\nthe functionality of each key on your keyboard."]}),"\n",(0,t.jsxs)(n.p,{children:["This is a walkthrough of my setup in Ubuntu using ",(0,t.jsx)(n.code,{children:"keyd"}),". A guide I wish it\nexisted when I first try to find out how to remap my keyboard in Ubuntu."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://imgs.xkcd.com/comics/borrow_your_laptop.png",alt:"xkcd 1806"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"https://xkcd.com/1806/",children:"xkcd 1806: borrow your laptop"})})}),"\n",(0,t.jsx)(n.h2,{id:"why-i-remap-my-keyboard",children:"Why I Remap my Keyboard"}),"\n",(0,t.jsxs)(n.p,{children:["After I ",(0,t.jsx)(n.a,{href:"/blog/2024/02/29/dual-boot-guide",children:"dual-boot with Ubuntu"})," and used it as\nmy daily driver for work and personal use, one key thing I missed is\n",(0,t.jsx)(n.a,{href:"https://www.autohotkey.com/",children:"AutoHotkey"}),'. It is a software that I used to remap\nmy keyboard in Windows and create shortcuts and "hotstrings". For example,']}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Remapping ",(0,t.jsx)(n.code,{children:"CapsLock"})," to ",(0,t.jsx)(n.code,{children:"Ctrl"})," on hold, but works as ",(0,t.jsx)(n.code,{children:"Esc"})," when clicked alone"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"z+d"})," to scroll down and ",(0,t.jsx)(n.code,{children:"z+u"})," to scroll up, and other ways to move my mouse"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"z+e"})," and ",(0,t.jsx)(n.code,{children:"z+g"})," to insert my email addresses"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"|!="}),", ",(0,t.jsx)(n.code,{children:"|->"}),", ",(0,t.jsx)(n.code,{children:"|<-"})," will be replaced by not equal (\u2260), right arrow (\u2192) and\nleft arrow (\u2190), etc., automatically"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["I shared\n",(0,t.jsx)(n.a,{href:"https://github.com/ethanppl/ahk",children:"my AHK configuration in this repository"})," if\nyou are interested. I might write about it later too."]}),"\n",(0,t.jsxs)(n.p,{children:["I think remapping keyboard is one of the most important change I made to my\nlaptop ever since I know how to use a computer. It is like the first time you\ndiscovered you can use ",(0,t.jsx)(n.code,{children:"Ctrl+C"})," rather than right click and select copy. I\nhighly encourage everyone to try it, especially for keys like ",(0,t.jsx)(n.code,{children:"CapsLock"})," that is\nin a very convenient location but is rarely used."]}),"\n",(0,t.jsxs)(n.p,{children:["So once I boot to Ubuntu, the first thing I wanted to do is to replicate this\nsetup. Unfortunately, AHK only works for Windows, so I need to look for\nalternatives. The first difficulty that you might face as well is Ubuntu 22.04\nby default uses ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Wayland_(protocol)",children:"Wayland"})," as\nthe window system, but a lot of tools available online works for\n",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/X_Window_System",children:"X11"})," only. For example, there is\n",(0,t.jsx)(n.a,{href:"https://github.com/autokey/autokey",children:"AutoKey"})," that seems to be popular but only\nworks for X11."]}),"\n",(0,t.jsxs)(n.p,{children:["I first tried ",(0,t.jsx)(n.a,{href:"https://github.com/sezanzeb/input-remapper",children:(0,t.jsx)(n.code,{children:"input-remapper"})}),". It\nlooks promising with nice graphical user interface, but it didn't work out when\nI tried to add more complicated logics. I also tried\n",(0,t.jsx)(n.a,{href:"https://github.com/boppreh/keyboard",children:"keyboard"}),", a Python module which allows me\nto create custom keyboard events in Python code. It's like coding my own daemon,\nbut I found it too much overhead and quite laggy. In the end, I found\n",(0,t.jsx)(n.a,{href:"https://wiki.archlinux.org/title/Input_remap_utilities",children:"a list of input remapping utilities"}),"\nprovided by Arch Linux wiki. Going through the list and I chose\n",(0,t.jsx)(n.a,{href:"https://github.com/rvaiya/keyd",children:(0,t.jsx)(n.code,{children:"keyd"})})," which works for me quite well over the\npast year."]}),"\n",(0,t.jsxs)(n.p,{children:["If you are using Windows, you can check\n",(0,t.jsx)(n.a,{href:"https://www.autohotkey.com/",children:"AutoHotkey"})," as linked above. If you are on Mac, I\nread that\n",(0,t.jsx)(n.a,{href:"https://karabiner-elements.pqrs.org/docs/getting-started/features/",children:"Karabiner"}),"\nis good, but I have not used a Mac before. If your keyboard supports it,\n",(0,t.jsx)(n.a,{href:"https://docs.qmk.fm/#/newbs",children:"QMK"}),"/",(0,t.jsx)(n.a,{href:"https://www.caniusevia.com/docs/specification",children:"VIA"}),"\nmight be good for you. Even if ",(0,t.jsx)(n.code,{children:"keyd"})," doesn't work for you, you may follow along\nto get some inspiration even though the syntax of the config is not the same."]}),"\n",(0,t.jsxs)(n.h2,{id:"basic-concepts-in-keyd",children:["Basic Concepts in ",(0,t.jsx)(n.code,{children:"keyd"})]}),"\n",(0,t.jsxs)(n.p,{children:["The very first thing to understand in ",(0,t.jsx)(n.code,{children:"keyd"})," config is it operates in terms of\nlayers. The most intuitive way for me to understand a layer is the ",(0,t.jsx)(n.code,{children:"Shift"})," key.\nWhen the ",(0,t.jsx)(n.code,{children:"Shift"})," key is pressed and hold, a different layer is activated and all\nthe keys on your keyboard have a different meaning. And what ",(0,t.jsx)(n.code,{children:"keyd"})," allows you\nto do is to define custom layers, that is, defining how the layers are activated\nand deactivated, and what each key means in each of the defined layer."]}),"\n",(0,t.jsxs)(n.p,{children:["The major reason I select ",(0,t.jsx)(n.code,{children:"keyd"})," is it works in X, sway and gnome in Wayland.\nSecond, it natively supports key overloading, which allows me to configure the\n",(0,t.jsx)(n.code,{children:"CapsLock"})," key to behave as ",(0,t.jsx)(n.code,{children:"Ctrl"})," on hold while ",(0,t.jsx)(n.code,{children:"Esc"})," when tapped. From what I\ntest, it is instant and fast too."]}),"\n",(0,t.jsxs)(n.p,{children:["To get started, install ",(0,t.jsx)(n.code,{children:"keyd"})," from source. Clone\n",(0,t.jsx)(n.a,{href:"https://github.com/rvaiya/keyd",children:"the repository"})," and build it from source.\nFollow the instructions in the\n",(0,t.jsx)(n.a,{href:"https://github.com/rvaiya/keyd?tab=readme-ov-file#from-source",children:"README"})," to\ninstall it."]}),"\n",(0,t.jsx)(n.p,{children:"Here are some helpful commands to know:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"sudo systemctl enable keyd"}),": start ",(0,t.jsx)(n.code,{children:"keyd"}),", probably run it once in your\nlifetime"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"sudo keyd reload"}),": reload the config every time after you edit the config"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"sudo keyd monitor"}),": print key events, useful to debug what is remapped"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"keyd list-keys"}),": list all the valid key names, useful to check the\npossibilities"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"backspace+escape+enter"})," keyboard combo: terminate ",(0,t.jsx)(n.code,{children:"keyd"})," anywhere anytime in\ncase you severely messed up (happened once to me)"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"sharing-my-configuration",children:"Sharing my Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Here is the full config if you are interested. I will explain it line by line\nbelow."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'[ids]\n\n*\n\n[main]\n\n# Maps capslock to escape when pressed and control when held.\ncapslock = overload(control, esc)\n\n# Maps z to a custom layer, but just \'z\' when pressed.\nz = overload(z, z)\n\n# Shift layer\n[shift:S]\n\n## shift+capslock is capslock\ncapslock = capslock\n\n# Custom z layer\n[z]\n\n## Escape common patterns\ni = macro(zi)\no = macro(zo)\n\n## Emails\ne = macro(hi@ethanppl.com)\ng = macro(hi@ethanppl.com)\n\n## Simplify complicated shortcut keys\nv = C-S-v\nn = C-S-a\nx = A-f4\ns = command(systemctl suspend)\n\n## Arrows\nj = down\nk = up\nh = left\nl = right\n\n## Media / modifier\nm = oneshot(media)\n\n[media]\n\nj = previoussong\nk = playpause\nl = nextsong\n\na = macro({ enter 10ms "Aut 10ms hor 10ms iza 10ms tio 10ms n": space "Bea 10ms rer space C-v)\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"main-layer",children:"Main layer"}),"\n",(0,t.jsx)(n.p,{children:"Let's go through it line by line."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"capslock = overload(control, esc)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This is the most important feature that I need, as introduced in the beginning.\nAccording to the man page, ",(0,t.jsx)(n.code,{children:"overload(<layer>, <action>)"}),' "activates the layer on\nhold while executes the action on tap". This line means ',(0,t.jsx)(n.code,{children:"CapsLock"})," will act like\n",(0,t.jsx)(n.code,{children:"Ctrl"})," when used with other keys. But when I tap it only, it works as ",(0,t.jsx)(n.code,{children:"Esc"}),".\nThis makes key combo like ",(0,t.jsx)(n.code,{children:"Ctrl+C"})," way easier than before, where the ",(0,t.jsx)(n.code,{children:"Ctrl"})," key\nis in the bottom left. It also makes ",(0,t.jsx)(n.code,{children:"Esc"})," easier, which is used a lot in Vim.\nThis single line is the biggest reason why I picked ",(0,t.jsx)(n.code,{children:"keyd"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"z = overload(z, z)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This might seem weird when you first look at it, but think about the key ",(0,t.jsx)(n.code,{children:"z"})," as\nits own layer (remember, layer is like the ",(0,t.jsx)(n.code,{children:"Shift"})," key). So when ",(0,t.jsx)(n.code,{children:"z"})," is hold, it\nactivates a ",(0,t.jsx)(n.code,{children:"z"})," layer, like holding the ",(0,t.jsx)(n.code,{children:"Shift"})," key activate the shift layer,\nbut it acts as ",(0,t.jsx)(n.code,{children:"z"})," when tap alone. This gives me another modifier key (e.g.\n",(0,t.jsx)(n.code,{children:"Ctrl"}),", ",(0,t.jsx)(n.code,{children:"Alt"}),", ",(0,t.jsx)(n.code,{children:"Shift"}),"), without overriding what the default keyboard shortcuts\nthat come with software programs. But before we go into this special ",(0,t.jsx)(n.code,{children:"z"})," layer,\nwe need to fix one thing first."]}),"\n",(0,t.jsx)(n.h3,{id:"shift-layer",children:"Shift layer"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[shift:S]\n\ncapslock = capslock\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We don't have a ",(0,t.jsx)(n.code,{children:"CapsLock"})," key after we remap it. What this two lines do is\nthat, in the shift layer, map ",(0,t.jsx)(n.code,{children:"CapsLock"})," to work as ",(0,t.jsx)(n.code,{children:"CapsLock"}),". So to summarize,\nright now holding ",(0,t.jsx)(n.code,{children:"CapsLock"})," is ",(0,t.jsx)(n.code,{children:"Ctrl"}),", tapping ",(0,t.jsx)(n.code,{children:"CapsLock"})," once is ",(0,t.jsx)(n.code,{children:"Esc"}),", and\ndoing ",(0,t.jsx)(n.code,{children:"Shift+CapsLock"})," is ",(0,t.jsx)(n.code,{children:"CapsLock"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"the-z-layer",children:["The ",(0,t.jsx)(n.code,{children:"z"})," layer"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"i = macro(zi)\no = macro(zo)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["First thing is since I did this custom ",(0,t.jsx)(n.code,{children:"z"})," layer with AutoHotkey in Windows, I\nrealized the character ",(0,t.jsx)(n.code,{children:"i"})," and ",(0,t.jsx)(n.code,{children:"o"})," commonly follows the ",(0,t.jsx)(n.code,{children:"z"})," key (e.g. amazing\nand amazon). To avoid delay in typing or keys being ignored because I typed ",(0,t.jsx)(n.code,{children:"i"}),"\nbefore releasing ",(0,t.jsx)(n.code,{children:"z"}),". I mapped press and hold ",(0,t.jsx)(n.code,{children:"z"})," then ",(0,t.jsx)(n.code,{children:"i"})," (",(0,t.jsx)(n.code,{children:"z+i"}),") to output\n",(0,t.jsx)(n.code,{children:"zi"})," and ",(0,t.jsx)(n.code,{children:"z+o"})," to output ",(0,t.jsx)(n.code,{children:"zo"})," here."]}),"\n",(0,t.jsxs)(n.p,{children:["I use ",(0,t.jsx)(n.code,{children:"+"})," sign to mean press and hold the first key and type the second key. But\n",(0,t.jsx)(n.code,{children:"keyd"})," use ",(0,t.jsx)(n.code,{children:"+"})," sign to mean chording, which means two keys to be pressed at the\nsame time. I didn't use chording in my config and most of the documentation for\nkeyboard shortcuts often use ",(0,t.jsx)(n.code,{children:"+"})," sign like ",(0,t.jsx)(n.code,{children:"Ctrl+c"}),", so I hope it's easy to\nunderstand."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"e = macro(hi@ethanppl.com)\ng = macro(hi@ethanppl.com)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Next, I mapped ",(0,t.jsx)(n.code,{children:"z+e"})," and ",(0,t.jsx)(n.code,{children:"z+g"})," to two emails that I used the most for\ncommunication and sign in. You will be amazed how many times you type your email\neach day. And how much better you don't need to type ",(0,t.jsx)(n.code,{children:"@"})," anymore."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"v = C-S-v\nn = C-S-a\nx = A-f4\ns = command(systemctl suspend)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Here I simplified some commonly used shortcuts with the ",(0,t.jsx)(n.code,{children:"z"})," layer. In ",(0,t.jsx)(n.code,{children:"keyd"}),",\ncapitalized ",(0,t.jsx)(n.code,{children:"C"}),", ",(0,t.jsx)(n.code,{children:"S"})," and ",(0,t.jsx)(n.code,{children:"A"})," means ",(0,t.jsx)(n.code,{children:"Ctrl"}),", ",(0,t.jsx)(n.code,{children:"Shift"})," and ",(0,t.jsx)(n.code,{children:"Alt"})," key respectively.\nAnd the hyphen ",(0,t.jsx)(n.code,{children:"-"})," means press and hold. For example, ",(0,t.jsx)(n.code,{children:"z+v"})," is an alias of\n",(0,t.jsx)(n.code,{children:"Ctrl+Shift+V"})," which is often used as paste text only or the markdown preview in\nVSCode. ",(0,t.jsx)(n.code,{children:"z+n"})," is an alias of ",(0,t.jsx)(n.code,{children:"Ctrl+Shift+a"})," which shows information of all tabs\nin Chrome. ",(0,t.jsx)(n.code,{children:"z+x"})," is an alias of ",(0,t.jsx)(n.code,{children:"Alt-F4"})," which closes a window. And ",(0,t.jsx)(n.code,{children:"z+s"})," run\nthe ",(0,t.jsx)(n.code,{children:"systemctl suspend"})," command, which will suspend the laptop. I find this\nhelpful, and somehow I trust it to suspend my laptop successfully more than just\nclosing the lid of my laptop."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"j = down\nk = up\nh = left\nl = right\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Here I mapped ",(0,t.jsx)(n.code,{children:"j"}),", ",(0,t.jsx)(n.code,{children:"k"}),", ",(0,t.jsx)(n.code,{children:"h"}),", ",(0,t.jsx)(n.code,{children:"l"})," to be arrow keys. For example, holding ",(0,t.jsx)(n.code,{children:"z+l"}),"\nwill produce the right arrow key. The reason for these mappings (e.g. why ",(0,t.jsx)(n.code,{children:"j"})," is\ndown) are based on Vim motions. These are helpful because arrows are usually\nunreachable unless I move my palm away from my keyboard. Doing ",(0,t.jsx)(n.code,{children:"z+l"})," allows me\nto do things like autocomplete in terminal without moving my palm."]}),"\n",(0,t.jsxs)(n.p,{children:["You might also notice that I try to pair keys that are comfortable to reach when\nholding ",(0,t.jsx)(n.code,{children:"z"})," down, like I would avoid mapping anything to ",(0,t.jsx)(n.code,{children:"z+a"})," that is just\ncomplicated and unnatural to type."]}),"\n",(0,t.jsxs)(n.h3,{id:"the-zm-layer-a-layer-on-top-of-a-layer",children:["The ",(0,t.jsx)(n.code,{children:"z+m"})," layer, a layer on top of a layer"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"m = oneshot(media)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Still in the ",(0,t.jsx)(n.code,{children:"z"})," layer, I defined the ",(0,t.jsx)(n.code,{children:"m"})," key to activate the ",(0,t.jsx)(n.code,{children:"media"})," layer. It\nactivates this layer as ",(0,t.jsx)(n.code,{children:"oneshot"}),". The man page defined ",(0,t.jsx)(n.code,{children:"oneshot"}),' as "If tapped,\nactivate the supplied layer for the duration of the next key press". It means\nthe layer is activated once tapped, and it will be toggled off only after\nanother key is pressed. This means the ',(0,t.jsx)(n.code,{children:"media"})," layer is activated once we tap\n",(0,t.jsx)(n.code,{children:"z+m"}),", and we don't have to hold it for it to be active (unlike the ",(0,t.jsx)(n.code,{children:"shift"})," or\n",(0,t.jsx)(n.code,{children:"z"})," layer)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[media]\n\nj = previoussong\nk = playpause\nl = nextsong\n"})}),"\n",(0,t.jsxs)(n.p,{children:["I discovered these keys when browsing through the ",(0,t.jsx)(n.code,{children:"keyd list-keys"})," command. And\nUbuntu support these keys. How this works is once I pressed ",(0,t.jsx)(n.code,{children:"z+m"}),", then tap ",(0,t.jsx)(n.code,{children:"l"}),",\nit will emit a ",(0,t.jsx)(n.code,{children:"nextsong"})," key press. What this allows me to do is whichever\nactive window I am in, I can use ",(0,t.jsx)(n.code,{children:"z+m"}),", then ",(0,t.jsx)(n.code,{children:"j"}),", ",(0,t.jsx)(n.code,{children:"k"}),", or ",(0,t.jsx)(n.code,{children:"l"})," to go back, pause,\nor skip a song in Spotify, which I think is pretty amazing."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'a = macro({ enter 10ms "Aut 10ms hor 10ms iza 10ms tio 10ms n": space "Bea 10ms rer space C-v)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["One last line which doesn't relate to media actually, but I put it in any way.\nIt is used to help me type the authorization header in GraphQL playground. What\nI have to do is copy the token that I want to use, then type ",(0,t.jsx)(n.code,{children:"z+m"})," and ",(0,t.jsx)(n.code,{children:"a"}),", it\nwill help me generate the whole"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n  "Authorization": "Bearer <token_copied_here>"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["It is taking advantage of the GraphQL playground I used that will help me close\nthe ",(0,t.jsx)(n.code,{children:"{"})," curly braces. With some trial and error I realize I cannot make ",(0,t.jsx)(n.code,{children:"keyd"}),"\nto type all keys at once, so I leave some delay in between and that works\nbetter. Having it run ",(0,t.jsx)(n.code,{children:"Ctrl+V"})," to paste also helps a lot. I find this saves me\nquite some time each day."]}),"\n",(0,t.jsx)(n.h2,{id:"other-thoughts",children:"Other thoughts"}),"\n",(0,t.jsxs)(n.p,{children:["There are many other features in ",(0,t.jsx)(n.code,{children:"keyd"})," that is up to you to explore. I have\nadded different configs in and out over the year until I settle down to this set\nof commands. For example, initially I also configured a shortcut to type\n",(0,t.jsx)(n.code,{children:"console.log"})," and ",(0,t.jsx)(n.code,{children:"IO.inspect"})," for TypeScript and Elixir, other than the\nauthorization header shortcut, but I found out I rarely used them and I removed\nthem."]}),"\n",(0,t.jsxs)(n.p,{children:["I also tried ",(0,t.jsx)(n.code,{children:"oneshot(shift)"})," which is recommended in the ",(0,t.jsx)(n.code,{children:"keyd"})," README. But it\ndidn't work for me. I find out I often tap ",(0,t.jsx)(n.code,{children:"Shift"})," but changed my mind\nafterwards, which makes me accidentally typed characters in uppercase. I also\nfind out ",(0,t.jsx)(n.code,{children:"oneshot(shift)"})," doesn't work well with Shift and drag to select in\nbulk with mouse because it doesn't understand there is a mouse click and\ndeactivate the shift layer after I realize the ",(0,t.jsx)(n.code,{children:"Shift"})," key."]}),"\n",(0,t.jsxs)(n.p,{children:["Another thing I found is the ",(0,t.jsx)(n.code,{children:"command()"})," call doesn't always work. I once\ninstalled ",(0,t.jsx)(n.code,{children:"copyq"})," to get clipboard history and I configured ",(0,t.jsx)(n.code,{children:"z+c"})," to be\n",(0,t.jsx)(n.code,{children:"command(copyq show)"}),", but it never worked. It's not a dealbreaker and I didn't\nspend time to debug why."]}),"\n",(0,t.jsxs)(n.p,{children:["One thing you might already notice is there is no more hotstrings, which I had\nin ",(0,t.jsx)(n.a,{href:"https://github.com/ethanppl/ahk",children:"my AutoHotkey configuration"}),". I can no\nlonger type ",(0,t.jsx)(n.code,{children:"\u2260"}),", ",(0,t.jsx)(n.code,{children:"\u2192"}),", ",(0,t.jsx)(n.code,{children:"\u2190"})," and other special characters that easily. I realize\nconfiguration like ",(0,t.jsx)(n.code,{children:"l = \u2190"})," doesn't work. After reading the man page, I believe I\ncan make it works by setting up Unicode support, which have some other external\nconfiguration required, and I have not spent the time investigating."]}),"\n",(0,t.jsxs)(n.p,{children:["There is also no more mouse control. There is no way to move my mouse with\n",(0,t.jsx)(n.code,{children:"keyd"})," because all ",(0,t.jsx)(n.code,{children:"keyd"})," does is to remap keys. I know there are other daemons\nin Linux that are designed for that, but I have not tried. I remember I found\none before, but it only works for X11."]}),"\n",(0,t.jsxs)(n.p,{children:["There are also some minor problems that I wish to solve in the future. For\nexample, ",(0,t.jsx)(n.code,{children:"Ctrl+<arrows>"})," is a common key combination that I do, but I can't\neasily do that with ",(0,t.jsx)(n.code,{children:"CapsLock+z+<hjkl>"})," because the relative position of\n",(0,t.jsx)(n.code,{children:"CapsLock"})," and ",(0,t.jsx)(n.code,{children:"z"})," is too close."]}),"\n",(0,t.jsxs)(n.p,{children:["I would like to try mapping specific shortcuts to specific applications too. But\nmost of the time I find the default configs coming with the app works good\nenough. Also, I did not configure any keys to launch an application because I\nfind ",(0,t.jsx)(n.code,{children:"meta+<num>"})," good enough to open the windows that are pinned to the task\nbar. For example, ",(0,t.jsx)(n.code,{children:"win+2"})," always open my browser and ",(0,t.jsx)(n.code,{children:"win+3"})," open VSCode."]}),"\n",(0,t.jsxs)(n.p,{children:["That is how my configuration in ",(0,t.jsx)(n.code,{children:"keyd"})," works and some of my reasoning behind it.\nI hope you like this explanation, and it inspires you to remap your keyboard\ntoo. It genuinely improved my life."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["You might be interested in ",(0,t.jsx)(n.a,{href:"/computers/keyboard",children:"this page about keyboards"})," in\nmy Wiki too."]})}),"\n",(0,t.jsx)(n.h2,{id:"useful-links",children:"Useful links"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.a,{href:"https://github.com/rvaiya/keyd",children:[(0,t.jsx)(n.code,{children:"keyd"})," repository"]})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.a,{href:"https://github.com/rvaiya/keyd/tree/master/examples",children:[(0,t.jsx)(n.code,{children:"keyd"})," examples"]})," by the\ncreator"]}),"\n",(0,t.jsxs)(n.li,{children:["If you are stuck, you might find a solution by searching the\n",(0,t.jsxs)(n.a,{href:"https://github.com/rvaiya/keyd/issues",children:["issues in ",(0,t.jsx)(n.code,{children:"keyd"})]})]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>d});var i=o(6540);const t={},s=i.createContext(t);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(s.Provider,{value:n},e.children)}},372:e=>{e.exports=JSON.parse('{"permalink":"/blog/2024/09/08/keyd","source":"@site/blog/2024-09-08-keyd.md","title":"How I use keyd to remap my keyboard in Ubuntu 22.04 with Wayland","description":"Think about how you use your keyboard. Imagine how good it would be if your","date":"2024-09-08T00:00:00.000Z","tags":[{"inline":true,"label":"Ubuntu","permalink":"/blog/tags/ubuntu"},{"inline":true,"label":"Tips & Configs","permalink":"/blog/tags/tips-and-configs"},{"inline":true,"label":"Computers","permalink":"/blog/tags/computers"}],"readingTime":12.42,"hasTruncateMarker":true,"authors":[{"name":"Ethan Pang","url":"https://github.com/ethanppl","imageURL":"https://github.com/ethanppl.png","key":"ethan","page":null}],"frontMatter":{"title":"How I use keyd to remap my keyboard in Ubuntu 22.04 with Wayland","tags":[{"label":"Ubuntu","permalink":"ubuntu"},{"label":"Tips & Configs","permalink":"tips-and-configs"},{"label":"Computers","permalink":"computers"}],"toc_min_heading_level":2,"toc_max_heading_level":3,"authors":"ethan"},"unlisted":false,"prevItem":{"title":"How does multifactor authentication (MFA) work?","permalink":"/blog/2024/12/28/mfa-totp"},"nextItem":{"title":"Don\'t say it\'s a weird bug, because it makes you look stupid","permalink":"/blog/2024/06/19/weird-issue"}}')}}]);