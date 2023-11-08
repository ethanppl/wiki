"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[7060],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),k=a,h=u["".concat(s,".").concat(k)]||u[k]||c[k]||i;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="Computer Network",l={unversionedId:"computers/network",id:"computers/network",title:"Computer Network",description:"Communications between computers.",source:"@site/docs/computers/network.md",sourceDirName:"computers",slug:"/computers/network",permalink:"/wiki/computers/network",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Database",permalink:"/wiki/computers/database"},next:{title:"Operating System",permalink:"/wiki/computers/os"}},s={},p=[{value:"Resources",id:"resources",level:2},{value:"Links",id:"links",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"computer-network"},"Computer Network"),(0,a.kt)("p",null,"Communications between computers."),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gaia.cs.umass.edu/kurose_ross/lectures.php"},"Computer Networking: A Top-Down Approach Course"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A textbook about the fundamentals of computer networking in the OSI model"),(0,a.kt)("li",{parentName:"ul"},"Application, transport, network, and link layer"),(0,a.kt)("li",{parentName:"ul"},"Contains videos, PowerPoints and Wireshark labs"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://beej.us/guide/bgnet0/html/split/"},"Beej's Guide to Network Concepts"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Basic network concepts with some projects done in Python")))),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.apalrd.net/posts/2023/network_ipv6/"},"I spent a week without IPv4 to understand IPv6 transition mechanisms"),"\n(",(0,a.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=35041829"},"HN"),")",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Advantages for the home lab network: avoid the problems from network address\ntranslation (NAT)"),(0,a.kt)("li",{parentName:"ul"},"Transition mechanisms: dual stack, stateless IP/ICMP transition, NAT64,\n464XLAT"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://subtls.pages.dev/"},"See this page fetch itself, byte by byte, over TLS"),"\n(",(0,a.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=35884437"},"HN"),")",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Annotated live demo of an HTTPS request, with handshakes, key exchanges,\ncertificate validation, decryption, etc."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://implement-dns.wizardzines.com/"},"Implement DNS in a weekend | Wizard Zines project"),"\n(",(0,a.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=35916064"},"HN"),")",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Build a DNS query in bytes, parse the response, implement a custom resolver"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/w/index.php?title=Well-known_URI#List_of_well-known_URIs"},"Well-known URI"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A generic and extendable version of ",(0,a.kt)("inlineCode",{parentName:"li"},"robots.txt"),' to expose information at a\n"well-known location"'),(0,a.kt)("li",{parentName:"ul"},"For example, ",(0,a.kt)("inlineCode",{parentName:"li"},"./well-known/change-password")," to provide the URL for changing\na password"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.cnet.com/home/internet/features/the-secret-life-of-the-500-cables-that-run-the-internet/"},"The Secret Life of the 500+ Cables that Run the Internet | CNET"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A simple explanation of subsea cables. How they work, how they are\ninstalled, geopolitical complications, etc."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://jvns.ca/blog/2023/07/28/why-is-dns-still-hard-to-learn/"},"Why is DNS still hard to learn? | Julia Evans"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"It has been operating the same way for 30 years, it's still hard to learn\nbecause of the hidden details"),(0,a.kt)("li",{parentName:"ul"},"Some tips from the author to deal with hidden systems, confusing tools and\nsome weird gotchas"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://windscribe.com/vpnmap"},"VPN relationship map 2023 | Windscribe"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ownership, paid affiliates, cooperation & partnerships between VPN companies")))),(0,a.kt)("p",null,"Ethernet"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"YouTube:\n",(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/TkOVgkcrvbg"},"Ethernet (50th Birthday) | Computerphile"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The original Ethernet algorithm. Designed around a shared bus, using\nexponential backoff for media access control, etc."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.apnic.net/2023/06/29/happy-50th-birthday-ethernet/"},"Happy 50th Birthday, Ethernet"),"\n(",(0,a.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=36517832"},"HN"),")",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The innovation and evolution of Ethernet over 50 years"),(0,a.kt)("li",{parentName:"ul"},"No clock, any data size, carrier sense multiple access/collision detection\n(CSMA/CD), unique MAC, and other evolutions")))))}c.isMDXComponent=!0}}]);