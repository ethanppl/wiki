"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[8390],{9719:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var s=n(5893),t=n(1151);const r={},o="Git",l={id:"computers/programming/git",title:"Git",description:"Git commands.",source:"@site/docs/computers/programming/git.md",sourceDirName:"computers/programming",slug:"/computers/programming/git",permalink:"/wiki/computers/programming/git",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Computer Vision",permalink:"/wiki/computers/programming/computer-vision"},next:{title:"Graphics",permalink:"/wiki/computers/programming/graphics"}},c={},h=[{value:"Sites",id:"sites",level:2},{value:"Notes",id:"notes",level:2},{value:"Links",id:"links",level:2}];function a(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"git",children:"Git"}),"\n",(0,s.jsx)(i.p,{children:"Git commands."}),"\n",(0,s.jsx)(i.h2,{id:"sites",children:"Sites"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://ohshitgit.com/",children:"oh shit, git"})," or\n",(0,s.jsx)(i.a,{href:"https://dangitgit.com/",children:"dang it, git"}),", when you think you messed up"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://blog.gitbutler.com/git-tips-and-tricks/",children:"Git Tips and Tricks"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git blame -w -C -C -C -L 15,26 path/to/file"}),", ignore rename, movements,\netc."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git diff --word-diff"}),", diff by word, e.g. tailwind"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git config --global branch.sort -committerdate"}),", sort branches by last\ncommit"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git push --force-with-lease"}),", only force push if the ref is latest"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git maintenance start"}),", cron job for prefetch and other optimizations"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"git config core.fsmonitor true"})," on large repo, faster ",(0,s.jsx)(i.code,{children:"git status"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsxs)(i.a,{href:"https://stackoverflow.com/questions/13541615/how-to-remove-files-that-are-listed-in-the-gitignore-but-still-on-the-repositor",children:["Remove files that are in ",(0,s.jsx)(i.code,{children:".gitignore"})," but still in the repository"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"git rm --cached path/to/file"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://stackoverflow.com/questions/7147270/hard-reset-of-a-single-file",children:"Copy or reset a single file from another branch/commit"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"git checkout <branch/commit> -- file-name.txt"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://stackoverflow.com/questions/3670355/can-you-delete-multiple-branches-in-one-command-with-git",children:"Delete a collection of branches with grep"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"git branch -d `git branch | grep <pattern>`"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsxs)(i.a,{href:"https://luisdalmolin.dev/blog/ignoring-files-in-git-without-gitignore/",children:["Ignore a file without ",(0,s.jsx)(i.code,{children:".gitignore"})]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Use ",(0,s.jsx)(i.code,{children:".git/info/exclude"})," and maybe need\n",(0,s.jsx)(i.code,{children:"git update-index \u2014assume-unchanged path/to/file.ext"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"links",children:"Links"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://www.sqlite.org/whynotgit.html",children:"Why SQLite Does Note Use Git"}),"\n(",(0,s.jsx)(i.a,{href:"https://news.ycombinator.com/item?id=36830813",children:"HN"}),")","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Lacks situational awareness, difficult to find successors and descendants,\ncomplex model, no historical branch names, etc."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"http://shafiul.github.io/gitbook/1_the_git_object_model.html",children:"The Git object model"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"From a blob object, to a tree object, to a commit object and how they all\nfit together in a Git repo"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://jvns.ca/blog/2023/09/14/in-a-git-repository--where-do-your-files-live-/",children:"Where do you files live in a Git repository? Julia Evans"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Tracing and finding any version of a specific file in the ",(0,s.jsx)(i.code,{children:".git"})," directory"]}),"\n",(0,s.jsx)(i.li,{children:"Content addressed storage: the name of the file is the hash of the content,\nsame content doesn't take extra space"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://garrit.xyz/posts/2023-10-13-organizing-multiple-git-identities",children:"Organizing multiple git identities"}),"\n(",(0,s.jsx)(i.a,{href:"https://news.ycombinator.com/item?id=37886049",children:"HN"}),")","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Organize repos into separate directories"}),"\n",(0,s.jsxs)(i.li,{children:["Git config can conditionally include other git config file with","\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:'[includeIf "gitdir:~/personal/"]\n  path = ~/.gitconfig-personal\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://jvns.ca/blog/2023/10/20/some-miscellaneous-git-facts/",children:"Some miscellaneous git facts | Julia Evans"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"About the staging area, internals of stashes, types of references, and merge\ncommits diff"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://jvns.ca/blog/2023/11/23/branches-intuition-reality/",children:"Git branches: intuition and reality | Julia Evans"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Git branches are the full history of commits, not just the diff between\nbranches"}),"\n",(0,s.jsx)(i.li,{children:'Intuitive model: branches only contains "offshoot commits". This is helpful\nexplaining some but not all git operations'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://github.com/AmrDeveloper/GQL",children:"GQL - Git Query Language | Github @AmrDeveloper"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["SQL like language to perform queries on files inside ",(0,s.jsx)(i.code,{children:".git"})]}),"\n",(0,s.jsxs)(i.li,{children:['"Tables" for ',(0,s.jsx)(i.code,{children:"references"}),", ",(0,s.jsx)(i.code,{children:"commits"}),", ",(0,s.jsx)(i.code,{children:"diffs"}),", ",(0,s.jsx)(i.code,{children:"branches"}),", and ",(0,s.jsx)(i.code,{children:"tags"})]}),"\n",(0,s.jsxs)(i.li,{children:["E.g.: ",(0,s.jsx)(i.code,{children:"SELECT DISTINCT title as tt FROM commits"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsxs)(i.a,{href:"https://jvns.ca/blog/2024/01/26/inside-git/",children:["Inside ",(0,s.jsx)(i.code,{children:".git"})," | Julia Evans"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["A comic and explanation of what's each directory is for in ",(0,s.jsx)(i.code,{children:".git"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://dhwthompson.com/2019/my-favourite-git-commit",children:"My favourite Git commit"}),"\n(",(0,s.jsx)(i.a,{href:"https://news.ycombinator.com/item?id=39217149",children:"HN"})," has some good comments\ntoo)","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsxs)(i.a,{href:"https://github.com/alphagov/govuk-puppet/commit/63b36f93bf75a848e2125008aa1e880c5861cf46",children:["The commit ",(0,s.jsx)(i.code,{children:"63b36f93bf75a848e2125008aa1e880c5861cf46"})]}),",\nplus some comments of the commit in GitHub"]}),"\n",(0,s.jsx)(i.li,{children:"Explains the reason for change, error message is searchable, tells a story,\nreader learns something, and it builds compassion and trust"}),"\n",(0,s.jsx)(i.li,{children:"Or maybe I would put it in the PR description or internal docs"}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>o});var s=n(7294);const t={},r=s.createContext(t);function o(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);