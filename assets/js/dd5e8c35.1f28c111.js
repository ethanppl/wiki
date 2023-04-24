"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2044],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},160:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={},o="Software Design",l={unversionedId:"computers/programming/software-design",id:"computers/programming/software-design",title:"Software Design",description:"How to design/architect software applications/systems.",source:"@site/docs/computers/programming/software-design.md",sourceDirName:"computers/programming",slug:"/computers/programming/software-design",permalink:"/wiki/computers/programming/software-design",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Zig",permalink:"/wiki/computers/programming/languages/zig"},next:{title:"Web Development",permalink:"/wiki/computers/programming/web-dev"}},s={},p=[{value:"Resources",id:"resources",level:2},{value:"Sites",id:"sites",level:2},{value:"Links",id:"links",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"software-design"},"Software Design"),(0,r.kt)("p",null,"How to design/architect software applications/systems."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://architectelevator.com/architecture/architect-bookshelf/"},"The Architect's Bookshelf | Gregor Hohpe"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A collection of books about software architecture"),(0,r.kt)("li",{parentName:"ul"},"Going from single components to connected components, to entire systems, and\ndealing with the context"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aosabook.org/en/index.html"},"Architectures of Open Source Application"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"4 volumes, the authors of open source applications explain how their open\nsource software is structured and why"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://interviewing.io/guides/system-design-interview/part-two"},"A Guide to System Design Interview"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=34999464"},"HN"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"There are two parts, how to approach an interview and the fundamental\nconcept"),(0,r.kt)("li",{parentName:"ul"},"A bit too much prologue but can just scroll to the key points and the\nfundamental concept part")))),(0,r.kt)("h2",{id:"sites"},"Sites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://refactoring.guru/design-patterns"},"Refactoring Guru - Design Patterns"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Benefits, criticism, history, classification of patterns"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://refactoring.guru/design-patterns/catalog"},"A collection of creational, structural, and behavioural design patterns"))))),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("p",null,"Explanations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"YouTube:\n",(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/IcgmSRJHu_8"},"Making impossible states impossible | elm-conf"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Better domain modelling, design data types around the real-world domain"),(0,r.kt)("li",{parentName:"ul"},"Understanding union type, zip list, opaque type"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.exhypothesi.com/clocks-and-causality/"},"Clocks and Causality - Ordering Events in Distributed Systems"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=35399603"},"HN"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"How logical clocks order events in distributed systems"),(0,r.kt)("li",{parentName:"ul"},"Clocks introduced: Lamport clock, Lamport origin clock, vector clock and\ndotted vector clock, Lamport causal clock"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://martinfowler.com/bliki/ConwaysLaw.html"},"Conway's Law"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=35591026"},"HN"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'"Any organization that designs a system (defined broadly) will produce a\ndesign whose structure is a copy of the organization\'s communication\nstructure."'),(0,r.kt)("li",{parentName:"ul"},"Projects plans should follow how people communicate in the organization"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://samwho.dev/load-balancing/"},"Load balancing algorithms"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=35588797"},"HN"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A little bit of Bartosz Ciechanowski style visualizing load balancing\nalgorithms, with a playground at the end"),(0,r.kt)("li",{parentName:"ul"},"Round robin, weighted random, weighted round robin, least connections, peak\nEWMA")))),(0,r.kt)("p",null,"Real-world examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.redditinc.com/blog/how-we-built-rplace/"},"How Reddit built the 2017 r/Place"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"r/Place was a collaborative drawing board on Reddit in 2017 April Fools' Day\nHow Reddit built the backend, API, frontend, scaling, caching, handling\nbots, etc."))),(0,r.kt)("li",{parentName:"ul"},"Collection of blogs from Figma about their real-time editing and multiplayer",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A good dive into how Figma built real-time editing and multiplayer\napplication"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.figma.com/blog/realtime-editing-of-ordered-sequences/"},"Realtime editing of Ordered Sequences"),":\noperational transform, fractional indexing"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.figma.com/blog/how-figmas-multiplayer-technology-works/"},"How Figma's multiplayer technology works"),":\nCRDT"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.figma.com/blog/making-multiplayer-more-reliable/"},"Making multiplayer more reliable")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.blog/2023-02-06-the-technology-behind-githubs-new-code-search/"},"The Technology Behind GitHub's New Code Search"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"How GitHub built its search engine for searching code"),(0,r.kt)("li",{parentName:"ul"},"Concepts: inverted index, n-gram, content addressable hashing, indexing and\nquery pipeline"),(0,r.kt)("li",{parentName:"ul"},"Indexing 15.5 billion documents in 36 hours, 115 TB of content with 28 TB of\nunique content and the index itself in just 25 TB"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.twitter.com/engineering/en_us/topics/open-source/2023/twitter-recommendation-algorithm"},"Twitter's Recommendation Algorithm"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/twitter/the-algorithm"},"Code on GitHub"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Candidate sourcing (find best tweets), ranking, heuristics and filters,\nmixing and serving"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://knightcolumbia.org/blog/twitter-showed-us-its-algorithm-what-does-it-tell-us"},"What does (and does not) the Twitter algorithm tell us?"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=35519224"},"HN"),")"),(0,r.kt)("li",{parentName:"ul"},"Useless but fun discoveries:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"There is a specific label called ",(0,r.kt)("inlineCode",{parentName:"li"},"author_is_elon"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/wongmjane/status/1641884551189512192"},"ref"),")"),(0,r.kt)("li",{parentName:"ul"},"Jack Dorsey, Katy Perry, Stephen Curry and Barack Obama are labelled as\ntesting accounts\n(",(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/wongmjane/status/1641895949999153152"},"ref"),"), which\nis now overridden by a forced push\n(",(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/wongmjane/status/1642028241828601856"},"ref"),",\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/twitter/the-algorithm/blob/7f90d0ca342b928b479b512ec51ac2c3821f5922/graph-feature-service/src/main/scala/com/twitter/graph_feature_service/server/handlers/ServerWarmupHandler.scala#L23"},"original commit"),")")))))))}u.isMDXComponent=!0}}]);