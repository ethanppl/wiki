"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[272],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,g=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return r?a.createElement(g,o(o({ref:t},p),{},{components:r})):a.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7636:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={},o="Software Architecture",l={unversionedId:"computers/programming/software-architecture",id:"computers/programming/software-architecture",title:"Software Architecture",description:"How to design/architect software applications/systems.",source:"@site/docs/computers/programming/software-architecture.md",sourceDirName:"computers/programming",slug:"/computers/programming/software-architecture",permalink:"/wiki/computers/programming/software-architecture",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Elixir",permalink:"/wiki/computers/programming/languages/elixir"},next:{title:"Wellbeing",permalink:"/wiki/wellbeing/"}},c={},s=[{value:"Resources",id:"resources",level:2},{value:"Links",id:"links",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"software-architecture"},"Software Architecture"),(0,n.kt)("p",null,"How to design/architect software applications/systems."),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://architectelevator.com/architecture/architect-bookshelf/"},"The Architect's Bookshelf | Gregor Hohpe"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A collection of books about software architecture"),(0,n.kt)("li",{parentName:"ul"},"Going from single components, to connected components, to entire systems,\nand dealing with the context"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://refactoring.guru/design-patterns"},"Refactoring Guru - Design Patterns"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Benefits, criticism, history, classification of patterns"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://refactoring.guru/design-patterns/catalog"},"A collection of creational, structural, and behavioral design patterns"))))),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.redditinc.com/blog/how-we-built-rplace/"},"How reddit built the 2017 r/Place"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"r/Place was a collaborative drawing board on reddit in 2017 April Fools' Day"),(0,n.kt)("li",{parentName:"ul"},"How reddit build the backend, API, frontend, scaling, caching, handling\nbots, etc."))),(0,n.kt)("li",{parentName:"ul"},"Collection of blogs from Figma about their real-time editing and multiplayer",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A good dive into how Figma build real-time editing and multiplayer\napplication"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.figma.com/blog/realtime-editing-of-ordered-sequences/"},"Realtime editing of Ordered Sequences"),":\noperational transform, fractional indexing"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.figma.com/blog/how-figmas-multiplayer-technology-works/"},"How Figma's multiplayer technology works"),":\nCRDT"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.figma.com/blog/making-multiplayer-more-reliable/"},"Making multiplayer more reliable")))),(0,n.kt)("li",{parentName:"ul"},"YouTube:\n",(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/IcgmSRJHu_8"},"Making Impossible States Impossible | elm-conf"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Better domain modeling, design data types around the real-world domain"),(0,n.kt)("li",{parentName:"ul"},"Understanding union type, zip list, opaque type")))))}m.isMDXComponent=!0}}]);