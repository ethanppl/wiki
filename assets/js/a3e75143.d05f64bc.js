"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[7230],{2834:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"computers/network/http","title":"HTTP","description":"Hypertext Transfer Protocol","source":"@site/docs/computers/network/http.md","sourceDirName":"computers/network","slug":"/computers/network/http","permalink":"/computers/network/http","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Computer Network","permalink":"/computers/network/network"},"next":{"title":"Network Layer","permalink":"/computers/network/network-layer"}}');var s=t(4848),i=t(8453);const o={},l="HTTP",c={},a=[{value:"Resources",id:"resources",level:2},{value:"Links",id:"links",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"http",children:"HTTP"})}),"\n",(0,s.jsx)(n.p,{children:"Hypertext Transfer Protocol"}),"\n",(0,s.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://http2-explained.haxx.se/en/part1",children:"HTTP/2 Explained | Daniel Stenberg"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Explaining the transition from HTTP/1 to HTTP/2, by the creator of curl"}),"\n",(0,s.jsx)(n.li,{children:"From the problems of HTTP/1, potential solutions, SPDY, concepts and\nchanges, critiques, etc."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://http3-explained.haxx.se/en",children:"HTTP/3 Explained | Daniel Stenberg"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Explaining the transition from HTTP/2 to HTTP/3, by the creator of curl"}),"\n",(0,s.jsx)(n.li,{children:"From head of line blocking in TCP, to using QUIC and UDP, pros and cons of\nHTTP/3"}),"\n",(0,s.jsx)(n.li,{children:"Features like connections, streams, 0-RTT, spin bits, etc."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://alexandrehtrb.github.io/posts/2024/03/http2-and-http3-explained/",children:"HTTP/2 and HTTP/3 explained"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["HTTP/1.1: persistent TCP connections, ",(0,s.jsx)(n.code,{children:"Host"}),", header conventions"]}),"\n",(0,s.jsx)(n.li,{children:"HTTP/2: streams and frames for multiplexing many messages in a TCP packet"}),"\n",(0,s.jsx)(n.li,{children:"HTTP/3: solving TCP head-of-line blocking with UDP, moving integrity from\ntransport layer to the application layer, designed for unstable connections"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://http.dev/3",children:"HTTP/3 | http.dev"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Changes explained: congestion control, session resumption, connection\nmigration, etc."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://kmcd.dev/posts/yall-are-sleeping-on-http3/",children:"Y'all are sleeping on HTTP/3"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"HTTP/3 and QUIC adoption is fast, where major browsers, cloud providers and\nload balancers support it"}),"\n",(0,s.jsx)(n.li,{children:"Benefits: faster connection, 0-RTT resumption, multiplexing"}),"\n",(0,s.jsx)(n.li,{children:"UDP is unreliable but QUIC build the same guarantees on top without the\nlimitation of TCP"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Original RFCs:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc9114",children:"RFC9114: HTTP/3"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc9000",children:"RFC9000: QUIC"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://superuser.com/questions/1659248/how-does-browser-know-which-version-of-http-it-should-use-when-sending-a-request",children:"How does browser know which version of HTTP it should use when sending a request?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"HTTP/2: A TLS feature called ALPN to list supported protocol during TLS\nhandshake"}),"\n",(0,s.jsxs)(n.li,{children:["HTTP/3: HTTP/2 initially, ",(0,s.jsx)(n.code,{children:"Alt-Svc"})," response header from server listing ",(0,s.jsx)(n.code,{children:"h3"}),"\nand the UDP/QUIC port, client upgrade to new UDP/QUIC port and close the\noriginal h1.x or h2 TCP connection"]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(6540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);