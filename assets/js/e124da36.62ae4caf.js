"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[8390],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>f});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(i),h=r,f=c["".concat(s,".").concat(h)]||c[h]||u[h]||a;return i?n.createElement(f,o(o({ref:t},m),{},{components:i})):n.createElement(f,o({ref:t},m))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},5515:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=i(7462),r=(i(7294),i(3905));const a={},o="Git",l={unversionedId:"computers/programming/git",id:"computers/programming/git",title:"Git",description:"Git commands.",source:"@site/docs/computers/programming/git.md",sourceDirName:"computers/programming",slug:"/computers/programming/git",permalink:"/wiki/computers/programming/git",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Computer Vision",permalink:"/wiki/computers/programming/computer-vision"},next:{title:"Graphics",permalink:"/wiki/computers/programming/graphics"}},s={},p=[{value:"Sites",id:"sites",level:2},{value:"Notes",id:"notes",level:2},{value:"Links",id:"links",level:2}],m={toc:p},c="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"git"},"Git"),(0,r.kt)("p",null,"Git commands."),(0,r.kt)("h2",{id:"sites"},"Sites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ohshitgit.com/"},"oh shit, git")," or\n",(0,r.kt)("a",{parentName:"li",href:"https://dangitgit.com/"},"dang it, git"))),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/13541615/how-to-remove-files-that-are-listed-in-the-gitignore-but-still-on-the-repositor"},"Remove files that are in ",(0,r.kt)("inlineCode",{parentName:"a"},".gitignore")," but still in the repository"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git rm --cached path/to/file")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/7147270/hard-reset-of-a-single-file"},"Copy or reset a single file from another branch/commit"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git checkout <branch/commit> -- file-name.txt")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/3670355/can-you-delete-multiple-branches-in-one-command-with-git"},"Delete a collection of branches with grep"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git branch -d `git branch | grep <pattern>`")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://luisdalmolin.dev/blog/ignoring-files-in-git-without-gitignore/"},"Ignore a file without ",(0,r.kt)("inlineCode",{parentName:"a"},".gitignore")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},".git/info/exclude")," and maybe need\n",(0,r.kt)("inlineCode",{parentName:"li"},"git update-index \u2014assume-unchanged path/to/file.ext"))))),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.sqlite.org/whynotgit.html"},"Why SQLite Does Note Use Git"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=36830813"},"HN"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Lacks situational awareness, difficult to find successors and descendants,\ncomplex model, no historical branch names, etc."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://shafiul.github.io/gitbook/1_the_git_object_model.html"},"The Git object model"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"From a blob object, to a tree object, to a commit object and how they all\nfit together in a Git repo"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jvns.ca/blog/2023/09/14/in-a-git-repository--where-do-your-files-live-/"},"Where do you files live in a Git repository? Julia Evans"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Tracing and finding any version of a specific file in the ",(0,r.kt)("inlineCode",{parentName:"li"},".git")," directory"),(0,r.kt)("li",{parentName:"ul"},"Content addressed storage: the name of the file is the hash of the content,\nsame content doesn't take extra space"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://garrit.xyz/posts/2023-10-13-organizing-multiple-git-identities"},"Organizing multiple git identities"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=37886049"},"HN"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Organize repos into separate directories"),(0,r.kt)("li",{parentName:"ul"},"Git config can conditionally include other git config file with",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'[includeIf "gitdir:~/personal/"]\n  path = ~/.gitconfig-personal\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jvns.ca/blog/2023/10/20/some-miscellaneous-git-facts/"},"Some miscellaneous git facts | Julia Evans"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"About the staging area, internals of stashes, types of references, and merge\ncommits diff"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jvns.ca/blog/2023/11/23/branches-intuition-reality/"},"Git branches: intuition and reality | Julia Evans"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Git branches are the full history of commits, not just the diff between\nbranches"),(0,r.kt)("li",{parentName:"ul"},'Intuitive model: branches only contains "offshoot commits". This is helpful\nexplaining some but not all git operations')))))}u.isMDXComponent=!0}}]);