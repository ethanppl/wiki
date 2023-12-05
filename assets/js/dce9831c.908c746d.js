"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[2767],{1351:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(5893),s=t(1151);const r={},l="Cybersecurity",o={id:"computers/cybersecurity",title:"Cybersecurity",description:"Hack?!",source:"@site/docs/computers/cybersecurity.md",sourceDirName:"computers",slug:"/computers/cybersecurity",permalink:"/wiki/computers/cybersecurity",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PC Configurations",permalink:"/wiki/computers/configs"},next:{title:"Database",permalink:"/wiki/computers/database"}},a={},c=[{value:"Sites",id:"sites",level:2},{value:"Links",id:"links",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"cybersecurity",children:"Cybersecurity"}),"\n",(0,i.jsx)(n.p,{children:"Hack?!"}),"\n",(0,i.jsx)(n.p,{children:"I played CTF challenges for around a year to realize I am not as talented in\nfinding flaws. It requires a lot of knowledge in multiple fields and a\ncompletely different mindset to approach problems, but it's fun."}),"\n",(0,i.jsx)(n.h2,{id:"sites",children:"Sites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://owasp.org/",children:"OWASP"})," \u2014 Open Web Application Security Project"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://haveibeenpwned.com/",children:"Have I Been Pwned?"})," \u2014 Check breached\naccounts/emails/passwords"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://micahflee.com/2023/04/capturing-the-flag-with-gpt-4/",children:"Capturing the flag with GPT-4"}),"\n(",(0,i.jsx)(n.a,{href:"https://news.ycombinator.com/item?id=35683265",children:"HN"}),")","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Three challenges: Sharmir's secret sharing scheme, writing Perl script to\ndecode Perl storable files and a series of shell hurdles (Linux command line\ntricks)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://arstechnica.com/features/2023/05/is-cybersecurity-an-unsolvable-problem/",children:"Is Cybersecurity an Unsolvable Problem?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A chat with philosopher Scott Shapiro about his book: Fancy Bear Goes\nPhishing"}),"\n",(0,i.jsx)(n.li,{children:"One interesting idea is perfect cybersecurity might not be possible because\nof the duality of symbols. The same set of symbols (bits) is used to\nrepresent both instructions and data, which makes general computing devices\npossible, yet it also makes hacking possible"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.theregister.com/2023/06/09/cold_boot_ram_theft/",children:"Cold boot ram theft"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Rip data out of RAM chips by freeing the chip"}),"\n",(0,i.jsx)(n.li,{children:"Decryption keys, bootloader code, data, stack and heap are all in the\nphysical memory"}),"\n",(0,i.jsx)(n.li,{children:"Physical memory encryption, like Xbox and PS5 game consoles, can counter it,\nbut most CPUs on the planet don't do that"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://max.levch.in/post/724289457144070144/shamir-secret-sharing-its-3am-paul-the-head-of",children:"How early PayPal was nearly devastated by a security upgrade | Max Levchin"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Max Levchin, one of the co-founders of PayPal, implemented a Shamir Secret\nSharing protocol to replace a passphrase"}),"\n",(0,i.jsx)(n.li,{children:"During the migration, something went wrong that almost locked the whole DB"}),"\n",(0,i.jsx)(n.li,{children:'Turns out there is an incompatibility between Linux and Solaris. "Shoulda\nRTFM".'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.sjoerdlangkemper.nl/2023/08/16/session-timeout/",children:"Short session expiration does not help security"}),"\n(",(0,i.jsx)(n.a,{href:"https://news.ycombinator.com/item?id=37173339",children:"HN"}),")","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It could not prevent problems caused by XSS, leaked logs, shared computers,\netc."}),"\n",(0,i.jsx)(n.li,{children:"Requiring frequent re-authentication has risks as well"}),"\n",(0,i.jsx)(n.li,{children:"Facebook, Google, Amazon and GitHub have sessions that last forever as well"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://devblogs.microsoft.com/oldnewthing/20230911-00/?p=108749",children:"Any sufficiently advanced uninstaller is indistinguishable from malware"}),"\n(",(0,i.jsx)(n.a,{href:"https://news.ycombinator.com/item?id=37491862",children:"HN"}),")","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"An uninstaller that self-deleting with code injection is indistinguishable\nfrom malware"}),"\n",(0,i.jsxs)(n.li,{children:["There is a ",(0,i.jsx)(n.code,{children:"js"})," file example of how to delete itself and other files, leave\nno race, without code injection"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://retool.com/blog/mfa-isnt-mfa/",children:"When MFA isn't actually MFA | Retool"}),"\n(",(0,i.jsx)(n.a,{href:"https://news.ycombinator.com/item?id=37500895",children:"HN"}),")","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Google's update to backup MFA secrets to cloud means MFA becomes a\nsingle-factor-authentication"}),"\n",(0,i.jsx)(n.li,{children:"Getting access to the Google account once is enough to control all OTPs\nstored in Google Authenticator"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.abc.net.au/news/2023-09-23/cybersecurity-troy-hunt-have-i-been-pwned-fighting-data-breaches/102803748",children:"A strange sign of times"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The story of Troy Hunt, the guy behind Have I Been Pwned"}),"\n",(0,i.jsx)(n.li,{children:"The story of the site, the threats and stress, and the problem of relying on\n1 guy to guard the web"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://cloud.google.com/blog/products/identity-security/how-it-works-the-novel-http2-rapid-reset-ddos-attack",children:"How it works: The novel HTTP/2 'Rapid Reset' DDoS Attack"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://cloud.google.com/blog/products/identity-security/google-cloud-mitigated-largest-ddos-attack-peaking-above-398-million-rps",children:"Google mitigated the largest DDoS attack to date, peaking above 398 million rps"})}),"\n",(0,i.jsx)(n.li,{children:"Enabled by HTTP/2 stream multiplexing, where a request/connection can open\nmultiple streams, increasing throughput"}),"\n",(0,i.jsx)(n.li,{children:"What attacker did is opening streams + rapidly resetting streams, a\nconnection can then have infinite amount of requests, as cancelling previous\nrequests means it never exceeds the max concurrent connection but always\nkeep the connection open"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.macchaffee.com/blog/2023/wafs/",children:"Stop deploying web application firewalls"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"WAFs are slow, ineffective, unsafe and noisy"}),"\n",(0,i.jsx)(n.li,{children:"Instead, isolate application, immutable system, static analysis in CI, and\ncapability-based security"}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var i=t(7294);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);