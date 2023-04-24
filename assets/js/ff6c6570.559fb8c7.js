"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8269],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=i,h=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2391:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const a={},o="Prompting",l={unversionedId:"computers/ai/prompting",id:"computers/ai/prompting",title:"Prompting",description:"Effectively prompt AI models to utilize their power.",source:"@site/docs/computers/ai/prompting.md",sourceDirName:"computers/ai",slug:"/computers/ai/prompting",permalink:"/wiki/computers/ai/prompting",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Artificial Intelligence",permalink:"/wiki/computers/ai/"},next:{title:"Blockchain",permalink:"/wiki/computers/blockchain"}},p={},s=[{value:"Resources",id:"resources",level:2},{value:"Links",id:"links",level:2}],c={toc:s},m="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"prompting"},"Prompting"),(0,i.kt)("p",null,"Effectively prompt AI models to utilize their power."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/dair-ai/Prompt-Engineering-Guide"},"Prompt Engineering Guide | GitHub @dair-ai"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=34883486"},"HN"),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Techniques to improve the results of large language models"),(0,i.kt)("li",{parentName:"ul"},"HN thread more or less focuses on if this is a field of engineering at all")))),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.ruxu.dev/articles/ai/maximizing-the-potential-of-llms/"},"Maximizing the potential of LLMs"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=35522080"},"HN"),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A list of template prompts for summarization, extraction, Q&A,\nclassification, conversation, code generation and reasoning"),(0,i.kt)("li",{parentName:"ul"},"Prompting strategies: zero-shot/few-shot prompting, and chain of thought\nprompting"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://simonwillison.net/2023/Apr/14/worst-that-can-happen/"},"Prompt Injection: What's the worst that can happen?"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=35572290"},"HN"),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Applications that build on top of LLM, what if users can inject the prompts?"),(0,i.kt)("li",{parentName:"ul"},"LLM cannot distinguish data & instructions, it might treat instructions as\ndata and data as instructions"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://martinfowler.com/articles/2023-chatgpt-xu-hao.html"},"An example of LLM prompting for programming"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Explorations in using ChatGPT to build self-testing code"),(0,i.kt)("li",{parentName:"ul"},"Uses chain of thought and generated knowledge prompting approaches with\nChatGPT")))))}u.isMDXComponent=!0}}]);