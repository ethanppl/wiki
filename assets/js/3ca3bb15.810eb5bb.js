"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[4590],{8973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=n(5893),i=n(1151);const s={title:"Don't say it's a weird bug, because it makes you look stupid",tags:[{label:"Thoughts",permalink:"thoughts"},{label:"Workplace",permalink:"workplace"}],toc_min_heading_level:2,toc_max_heading_level:3,authors:"ethan"},r=void 0,a={permalink:"/blog/2024/06/19/weird-issue",source:"@site/blog/2024-06-19-weird-issue.md",title:"Don't say it's a weird bug, because it makes you look stupid",description:"Often when someone is debugging an issue, you might hear:",date:"2024-06-19T00:00:00.000Z",tags:[{inline:!0,label:"Thoughts",permalink:"/blog/tags/thoughts"},{inline:!0,label:"Workplace",permalink:"/blog/tags/workplace"}],readingTime:5.855,hasTruncateMarker:!0,authors:[{name:"Ethan Pang",url:"https://github.com/ethanppl",imageURL:"https://github.com/ethanppl.png",key:"ethan",page:null}],frontMatter:{title:"Don't say it's a weird bug, because it makes you look stupid",tags:[{label:"Thoughts",permalink:"thoughts"},{label:"Workplace",permalink:"workplace"}],toc_min_heading_level:2,toc_max_heading_level:3,authors:"ethan"},unlisted:!1,nextItem:{title:"Dual Boot Windows and Ubuntu with Secure Boot and Full Disk Encryption",permalink:"/blog/2024/02/29/dual-boot-guide"}},h={authorsImageUrls:[void 0]},d=[{value:"Computers never lie",id:"computers-never-lie",level:2},{value:"Why it makes you look stupid",id:"why-it-makes-you-look-stupid",level:2},{value:"Instead, state the facts",id:"instead-state-the-facts",level:2}];function u(e){const t={a:"a",blockquote:"blockquote",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Often when someone is debugging an issue, you might hear:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["It's a ",(0,o.jsx)(t.em,{children:"weird bug"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.em,{children:"Somehow"})," it throws an error, it's ",(0,o.jsx)(t.em,{children:"weird"})]}),"\n",(0,o.jsxs)(t.li,{children:["I followed the README, but ",(0,o.jsx)(t.em,{children:"weirdly"})," it doesn't work"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:'As if something outside their control misbehaved, they expect someone to help\nthem eliminate the "weirdness". I find that a bit annoying. What does "weird"\nactually mean?'}),"\n",(0,o.jsx)(t.p,{children:'We think "it\'s weird" because we feel like we did nothing wrong, and the outcome\nis not what we intended. We do not understand why something unexpected happened,\nand our first instinct is to label it as "it\'s weird". If the system is "weird",\nthen it is no longer our problem.'}),"\n",(0,o.jsx)(t.p,{children:'However, is this true? Should you ever say computers behaved "weirdly"?'}),"\n",(0,o.jsx)(t.h2,{id:"computers-never-lie",children:"Computers never lie"}),"\n",(0,o.jsx)(t.p,{children:'One day, something like this happened. I was interrupted by my colleague because\nhe found a weird issue. He was debugging an API. While testing it, he missed the\nauthorization token in one of the service-to-service APIs, and as expected, an\nunauthorized error was thrown. His immediate response was "weird", and then seek\nhelp, and told me "it\'s weird". Huh? Why? What is weird though?'}),"\n",(0,o.jsx)(t.p,{children:'I understand what he felt like "weird" is he supplied a user token already, how\ncan it be unauthorized? The unauthorized error feels "weird" because the reason\nis unknown. However, the reality is one of the APIs the program uses expects\nanother type of token, and the code missed that. There is nothing "weird", but\nthat immediate thought of the computer being "weird" makes it sound like he\nthinks the computer lied to him, hence weird.'}),"\n",(0,o.jsx)(t.p,{children:"But computers don't lie! Computers are devices that take inputs, process and\nthen output. If the output is unexpected, either the inputs or the process, or\nboth are wrong. Data and code are both provided by users, programmers or other\nsystems. The computer only executes it. There is nothing weird about the\ncomputer itself."}),"\n",(0,o.jsx)(t.p,{children:"It's even worse when a developer says something is weird with the program that\nthey wrote. You wrote the program! The computer follows your instructions. How\nwould you blame something that exactly follows your instructions as weird, and\npretend to take no ownership of the error?"}),"\n",(0,o.jsx)(t.p,{children:"If you think seeing an unauthorized error is weird. It's not the computer\nbehaving weirdly, instead, it is you not understanding how your code works. It\nis you not checking the API documentation before commenting it is weird. It is\nnot the computer lying to you therefore the code throw an error. Instead, it is\nyou who made a mistake in the code causing it to throw."}),"\n",(0,o.jsx)(t.p,{children:"Computers don't lie. Even if they do because of hardware failure or cosmic rays\nfrom light years away flipping a bit in the processor, it's abiding by the law\nof physics. Figure out why and own the problem. That's how you learn."}),"\n",(0,o.jsx)(t.h2,{id:"why-it-makes-you-look-stupid",children:"Why it makes you look stupid"}),"\n",(0,o.jsx)(t.p,{children:"When blaming something as weird, it sounds like blaming some external factors\ncausing the weirdness, as if you take no responsibility for the issue, and you\nare not eager to understand the problem."}),"\n",(0,o.jsx)(t.p,{children:'When you get used to saying "it\'s weird" to anything unexpected, your first\ninstinct is to make it sound like you have no control. It sounds like you do not\nunderstand the issue only because some "weirdness" is hindering your ability to\nunderstand. But to someone who understands, they know the reason is you lack the\nknowledge to understand, not because it\'s weird. It just sounds like you do not\nunderstand how things work, you are making up excuses, and you are not taking\nownership of figuring it out yourself. It doesn\'t matter how you think, it might\njust be a filler word, but others who listen feel differently. It sounds like\nyou are stupid.'}),"\n",(0,o.jsx)(t.p,{children:'Even worse is if you are used to settling for the answer of "it\'s weird", you do\nnot try to understand what is wrong. You are tempted to seek help immediately.\nOnce you get used to that, you no longer self-learn and improve. You think you\ndon\'t understand just because things are "weird". You learn less.'}),"\n",(0,o.jsx)(t.p,{children:'Imagine if there are network issues, rather than labelling it as a "weird\ninternet problem", you take the time to investigate, you might figure out how\nHTTP calls are structured, the difference between TCP and UDP, how DNS records\npropagate, or how routing protocols work. That is how we learn.'}),"\n",(0,o.jsx)(t.p,{children:'So, whenever we are debugging, and when we encounter something unexpected, try\nnot to say "it\'s weird".'}),"\n",(0,o.jsx)(t.h2,{id:"instead-state-the-facts",children:"Instead, state the facts"}),"\n",(0,o.jsx)(t.p,{children:"The fact is we don't know. We find it unexpected because we don't know why, and\nthere is nothing wrong with stating that. Imagine someone coming to you to ask\nyou a question, which way is better:"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"How do I find the log of this line in the console? Weirdly the log is not\nshowing up."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Or,"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"How do I find the log of this line in the console? I tried checking the\nbrowser console, but I could not find it. I don't know where it is logged, can\nyou help?"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"See the difference? The first one sounds like the person is blaming some\nweirdness that swallowed the console.log. But in fact, it is some piece of code\nchanging the control flow causing that line not to log. Or it's just looking at\nthe wrong place to find the log, it could be in the server-side console."}),"\n",(0,o.jsx)(t.p,{children:'Taking the unauthorized error example, instead of a filler word "weird", he\ncould comment "I already put in my token, I expect the API calls to be\nauthorized", and then proceed to find the source of the error.'}),"\n",(0,o.jsx)(t.p,{children:"It's mysterious and weird only because you don't understand how the program you\nwrote works. State that you don't know what caused the unexpected behaviour is\nbetter than labelling it as \"weird\"."}),"\n",(0,o.jsx)(t.p,{children:"Sooner or later you will figure out the issue. It might be some global variables\nand side effects in functions. It might be some outdated cache. It might be race\nconditions. Or it might be some network failure. No matter what it is, you will\nrealize there is nothing \"weird\", just a lack of understanding. So, admit that\nit's just you don't know, and you will try to understand it."}),"\n",(0,o.jsxs)(t.p,{children:['To get even better, state what you have tried when seeking help. Divide and\nconquer. Check intermediate outputs. Narrow down the scope and state your\nfindings when asking questions. "I tried checking the browser console". "This\nline is logged in the console but not this". This shows that you are eager to\nfigure it out and learn. You put in the effort to understand the issue and try\nto demystify it yourself. Talk to a\n',(0,o.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Rubber_duck_debugging",children:"rubber duck"})," and you might\neventually figure it out all yourself :)"]}),"\n",(0,o.jsx)(t.p,{children:'So, avoiding saying "it\'s weird". State what you found, what you expect to see\nand what is unexpected. It will make you sound more credible. A person who takes\nownership.'})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var o=n(7294);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);