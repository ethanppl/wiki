"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[3097],{2451:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=s(5893),t=s(1151);const r={},l="Conferences",o={id:"computers/programming/software-design/conferences",title:"Conferences",description:"Explaining good software design, especially with functional programming (e.g.",source:"@site/docs/computers/programming/software-design/conferences.md",sourceDirName:"computers/programming/software-design",slug:"/computers/programming/software-design/conferences",permalink:"/wiki/computers/programming/software-design/conferences",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Software Design",permalink:"/wiki/computers/programming/software-design/"},next:{title:"Real World Examples",permalink:"/wiki/computers/programming/software-design/real-world"}},a={},c=[{value:"Links",id:"links",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"conferences",children:"Conferences"}),"\n",(0,i.jsx)(n.p,{children:"Explaining good software design, especially with functional programming (e.g.\nElm)."}),"\n",(0,i.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://youtu.be/PLFl95c-IiU",children:"Domain Modeling Made Functional | Scott Wlaschin"})}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Notes"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"How can this be improved?"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fsharp",metastring:"showLineNumbers",children:"type Contact = {\n  FirstName: string\n  MiddleInitial: string\n  LastName: string\n\n  EmailAddress: string\n  IsEmailVerified: bool\n  }\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A data structure that represents design choice:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fsharp",metastring:"showLineNumbers",children:"type String50 = String 50 of string\n\nlet createString50 (s: string) =\n  if s.Length <= 50\n    then Some (String50 s)\n    else None\n\ncreateString50:\n  string -> String50 option\n"})}),"\n",(0,i.jsx)(n.p,{children:"or:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fsharp",metastring:"showLineNumbers",children:'let createEmailAddress (s: string) =\n  if s.Contains "@"\n    then Some (EmailAddress s)\n    else None\n\ncreateEmailAddress:\n  string -> EmailAddress option\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Union types:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fsharp",metastring:"showLineNumbers",children:"type VerifiedEmail = VerifiedEmail of EmailAddress\ntype VertificationService =\n  (EmailAddress * Verificationhash) -> VerifiedEmail option\n\ntype EmailContactInfo =\n  | Unverified of EmailAddress\n  | Verified of EmailAddress\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A data structure that represents a business rule:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fsharp",metastring:"showLineNumbers",children:"type Contact = {\n  Name: PersonalName\n  Email: EmailContactInfo\n  }\n\ntype PersonalName = {\n  FirstName: String50\n  MiddleInitial: String50 option\n  LastName: String50\n  }\n"})}),"\n"]}),"\n"]})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://youtu.be/IcgmSRJHu_8",children:"Make Impossible States Impossible | Richard Feldman"})}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Notes"}),(0,i.jsx)(n.p,{children:"Make impossible states impossible"}),(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"We need to restore a recently deleted input"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Bad design:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-elm",metastring:"showLineNumbers",children:"type Model =\n  { status: Maybe String\n  , questionToRestore: Maybe SurveyQuestion\n  }\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Happy path:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-elm",metastring:"showLineNumbers",children:'{ status = Just "Question deleted"\n, questionToRestore = Just someQuestion\n}\n\n{ status = Nothing\n, questionToRestore = Nothing\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Impossible path but possible in code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-elm",metastring:"showLineNumbers",children:'{ status = Nothing\n, questionToRestore = Just someQuestion\n}\n\n{ status = Just "Question deleted"\n, questionToRestore = Nothing\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Proper solution: union types"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-elm",metastring:"showLineNumbers",children:"type Status\n  = NoStatus\n  | DeletedStatus String Question\n"})}),"\n"]}),"\n"]})]}),(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Zip list: maintaining a history (go back, current, next)"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Bad design:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-elm",metastring:"showLineNumbers",children:"type History =\n  { questions: List Question\n  , current: Question\n  }\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Happy path:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-elm",metastring:"showLineNumbers",children:"{ questions = [q1, q2, q3]\n, current = q2\n}\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Impossible path but possible in code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-elm",metastring:"showLineNumbers",children:"{ questions = []\n, current = q1\n}\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Better solution: zip list, two lists with 1 element. Impossible to have a\nnon-existing element."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-elm",metastring:"showLineNumbers",children:"type History =\n  { previous: List Question\n  , current: Question\n  , remaining: List Question\n  }\n\n-- example\n{ previous: [q1, q2]\n, current: q3\n, remaining: [q4, q5]\n}\n"})}),"\n"]}),"\n"]})]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["No break changes:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Implement a zip list internally in a module and expose an interface for\nother modules"}),"\n",(0,i.jsx)(n.li,{children:"Other modules can only interact with back and forward functions"}),"\n",(0,i.jsx)(n.li,{children:"The internal implementation can change without breaking the interface"}),"\n"]}),"\n"]}),"\n"]})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://youtu.be/jl1tGiUiTtI",children:"Convergent Evolution | Evan Czaplicki"})}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Notes"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Convergent Evolution: people working independently converge to similar\nsolutions without prior knowledge of each other","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Flying seems a neat idea, so bees and birds both have wings"}),"\n",(0,i.jsx)(n.li,{children:'But bees and birds have very different "implementation details"'}),"\n",(0,i.jsx)(n.li,{children:'The key is not to determine which one "implemented" flying better but to\nconsider how the design of wings fit into other "features" of the design'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"In Elm and React, both similarly have virtual DOM but implemented and look\nvery differently"}),"\n",(0,i.jsx)(n.li,{children:"JavaScript has C-style syntax while Elm has ML-style syntax doesn't matter.\nThe thing is how well this decision fit with other features. ML-style syntax\nfits well with Elm emphasizing the immutability feature."}),"\n",(0,i.jsxs)(n.li,{children:["Elm architecture vs Flux in React:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Elm architecture: Model passes HTML to runtime, runtime passes messages\nback to the model, then loops"}),"\n",(0,i.jsx)(n.li,{children:"Both reached an MVC pattern, following a uni-directional flow"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Other properties:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Immutability: ",(0,i.jsx)(n.code,{children:"lazy"})," in Elm"]}),"\n",(0,i.jsx)(n.li,{children:"Static analysis: linter or TypeScript in React, hint messages at compile\ntime in Elm"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"It's not right or wrong choosing which stack, the key is how the feature\nsets work together"}),"\n",(0,i.jsx)(n.li,{children:"The overlapping ideas of these stacks, despite being implemented\ndifferently, are the ones that seem to be good ideas"}),"\n"]})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://youtu.be/XpDsk374LDE",children:"The Life of a File | Evan Czaplicki"})}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Notes"}),(0,i.jsx)(n.p,{children:'How does he grow Elm code? What happens when the file is "too long"?'}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Life of a file: start small and grow, eventually how a file grow until it\nsplits into two files"}),"\n",(0,i.jsxs)(n.li,{children:["JavaScript knowledge:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Prefer shorter files: seems like shorter is better because it avoids\nsneaky mutations when files get larger"}),"\n",(0,i.jsx)(n.li,{children:"Get the architecture right from the start: refactoring is very risky and a\nfull rewrite is easier"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Elm perspective:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It is not possible to share variables and states, sneaky mutation is 0%"}),"\n",(0,i.jsx)(n.li,{children:"Refactoring is cheap and reliable with static types and static analysis"}),"\n",(0,i.jsx)(n.li,{children:"The way Elm is designed changes how you grow a file or even the codebase"}),"\n"]}),"\n"]}),"\n"]}),(0,i.jsx)("br",{}),(0,i.jsx)(n.p,{children:"The idea is to build modules around data structures, not the length of the\nfile."}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Things to consider when choosing the data structures:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Static type analysis? (spelling of keys should be checked)"}),"\n",(0,i.jsx)(n.li,{children:"Does ordering matter? (objects or lists)"}),"\n",(0,i.jsx)(n.li,{children:"Union types to limit the possible states or require the ability to\ndynamically update the list of possibilities?"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Breakout functions into modules when they start to build around data\nstructure or specific functionalities for a domain in the business model:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"And within a module, the implementation details (the data structure)\nshould not leak"}),"\n",(0,i.jsx)(n.li,{children:"Only expose a limited interface, but no less"}),"\n",(0,i.jsx)(n.li,{children:"Feature changes are to extend/limit the interface the module exposes"}),"\n",(0,i.jsx)(n.li,{children:"Testing on the API, rather than every usage"}),"\n",(0,i.jsx)(n.li,{children:"Refactoring within the module is easier because the API won\u2019t change"}),"\n",(0,i.jsx)(n.li,{children:"Modules can also maintain invariant (e.g. only two fruits), rules that\ncannot be enforced through data structure only"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Bad practices","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Get/set: the purpose of modules is to hide details, but setters will\nexpose details. Instead, try to expose as little as possible but no less"}),"\n",(0,i.jsx)(n.li,{children:"Don\u2019t overdo it: only extract modules when there is a problem. Don\u2019t do\npremature refactoring."}),"\n",(0,i.jsx)(n.li,{children:"Don\u2019t try to make modules because something is similar, focus on the data\nstructure. Only do it when things are related."}),"\n"]}),"\n"]}),"\n"]})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>l});var i=s(7294);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);