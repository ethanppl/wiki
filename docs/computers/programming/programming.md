# Programming

Instructing computers to work for humans.

I have quite some experience in C, C++, Python, JavaScript/TypeScript, Java,
Kotlin, Elixir, Solidity, and Gleam. The following guide might not be as
complete or beginner-friendly as I would like it to be, perhaps I will write
more and add more links in the future.

## Resources

- [Open Source Society University](https://github.com/ossu/computer-science)
  - I did not learn programming with this guide but seems like it has some good
    reference materials
  - Key aspects: programming, math, tools, systems, theory, security,
    applications and ethics
  - For me,
    [The Missing Semester of Your CS Education](https://missing.csail.mit.edu/)
    is the most interesting, probably because I went through a university CS
    curriculum.
- [The Missing Readme](https://www.goodreads.com/en/book/show/57271519)
  - A guide for the new software engineer, highly recommend
- [The Pragmatic Programmer](https://www.goodreads.com/en/book/show/4099)
  - Similar to the missing readme, also highly recommend it for all software
    engineers
  - I would say reading it from time to time gives different insights
  - It might not have taught me something that I don't know, but it summarizes
    the concepts and serves as a good reminder of how to approach different
    problems as a software engineer
- [Professional Programming | GitHub @charlax](https://github.com/charlax/professional-programming)
  - Learning resources for curious software engineers by topics
  - Honestly the dream of this Wiki is to be like this list

## Sites

- [Learn X in Y Minutes](https://learnxinyminutes.com/) — quick summary of
  programming languages

YouTube Channels:

- [Fireship](https://www.youtube.com/@Fireship/videos) — 100 seconds
  explanation, code report and tutorials

## Links

Still a bit like resources, but targets a specific area of computer
science/programming.

- [Vim Motions Playlist by ThePrimeagen](https://www.youtube.com/playlist?list=PLm323Lc7iSW_wuxqmKx_xxNtJC_hJbQ7R)
  - A YouTube playlist by ThePrimeagen to get started on Vim motions
  - A helpful guide to navigate faster in editors, a nice skill to acquire for
    all programmers
  - Vim motions, the navigation, is different from using Vim, the text editor
  - Case study on MongoDB MongoCrypt implementation
- [What a good debugger can do](https://werat.dev/blog/what-a-good-debugger-can-do/)
  ([HN](https://news.ycombinator.com/item?id=35092998))
  - Breakpoints: column breakpoints, conditional breakpoints, tracing
    breakpoints, data breakpoints
  - Data visualization, expression evaluation, concurrency and multithreading,
    hot reload, time travel, omniscient debugging
  - Omniscient debugging: pre-calculate all the program states, store them in a
    database and index them for efficient queries
- [What I've learned about formal methods in half a year | Jacob](https://jakob.space/blog/what-ive-learned-about-formal-methods.html)
  — A writeup introducing formal methods
- [GPU Programming: When, Why and How? | GitHub @enccs](https://enccs.github.io/gpu-programming/)
  - Not just graphics computation, but the use of GPU to accelerate computations
  - The use of GPU in high-performance computing (HPC) systems
- [Most tech content is bullshit | Aleksandra](https://www.aleksandra.codes/tech-content-consumer)
  ([HN](https://news.ycombinator.com/item?id=36380024))
  - Tech consuming: consuming content from the web, instead of creating
  - Reasons: Laziness, time limitation, comfortability, lack of confidence
  - Instead, spend the effort to understand and analyze content, rather than
    blindly copying
- [Hidden features in GitHub](https://buttondown.email/hillelwayne/archive/github-has-too-many-hidden-features/)
  - For example, `.` for `github.dev`, an online VSCode instance that can edit,
    push commits, and review PR.
- [What Every Developer Should Know about GPU Computing](https://codeconfessions.substack.com/p/gpu-computing)
  - More about the hardware computation and memory design, and how instructions
    are executed
  - Streaming multiprocessors (SMs): GPU consists of multiple SMs, each with
    multiple cores
  - Each SM has many registers, a low latency SRAM shared memory and a L1 cache.
    Then, shared L2 cache and global memory
  - Execute kernel on the GPU: grid of thread blocks, each consists of multiple
    threads
  - Wraps: group of threads. Single Instruction Multiple Threads: threads in a
    warp execute the same instruction
- [A decade of developing programming language](https://yorickpeterse.com/articles/a-decade-of-developing-a-programming-language/)
  - 10 lessons learn from building a programming language
  - E.g. avoid self-hosting compiler, which means using the language built to
    build the compiler for that language
- [Code is run more than read](https://olano.dev/2023-11-30-code-is-run-more-than-read/)
  ([HN](https://news.ycombinator.com/item?id=38483181))
  - `maintainer > author` when we say code is read more than written
  - `user > dev`: but actually the code need to be usable
  - `user > ops > dev`: the code need to be able to operate in production
  - `biz > user > ops > dev`: the code need to be valuable to the organization
  - This stops us from having unmaintainable code, unusable software, or "works
    locally" software

Cognitive Load:

- [Cognitive Loads in Programming](https://rpeszek.github.io/posts/2022-08-30-code-cognitiveload.html)
  - This is the article that brings my attention to cognitive load
  - Easy is not the same as simple. Complex doesn't necessarily mean hard.
  - Easy means low cost of creation, while simple means low cost of consumption
  - Reduce the extraneous cognitive load, the load generated by how the
    information is present
  - For example, reduce the unnecessary abstractions that make things hard to
    understand
- [Cognitive Load Developer's Handbook | GitHub @zakirullin](https://github.com/zakirullin/cognitive-load)
  - Examples of things to avoid: inheritance nightmare, too many small
    classes/modules, shallow microservices
- [Cognitive Load Theory in Software Development](https://thevaluable.dev/cognitive-load-theory-software-developer/)
  - We have limited working memory, we cannot remember more chunks, but instead,
    we can aim for larger chunks
  - A section on how to learn effectively to expand and improve developers'
    processing power
- [The Source of Readability](https://loup-vaillant.fr/articles/source-of-readability)
  - Tips to make code readable, e.g.:
  - "Code locality": code that is read together should be written together, e.g.
    no global variables
  - Write less code: having 2-3 designs, just stopping as soon as it "works" is
    too tempting
  - Keep modules deep: small interfaces with more functionality, to avoid being
    forced to understand complicated interfaces
- [On Importance of naming in Programming](https://wasp-lang.dev/blog/2023/10/12/on-importance-of-naming-in-programming)
  - Clean code is about naming the logics in the right way actually
  - Good name doesn't misdirect, doesn't omit and doesn't assume
  - Long names might just mean the function is too complex
- [Cognitive Load is what matters](https://github.com/zakirullin/cognitive-load)
  - Meaningful intermediate variables, early returns rather than nested ifs,
    composition over inheritance, monolith with isolated modules rather than
    shallow modules and shallow microservices

Working as a Software Engineer:

- [The Ten Commandments of Egoless Programming | Coding Horror](https://blog.codinghorror.com/the-ten-commandments-of-egoless-programming/)
  1. Understand and accept that you will make mistakes
  2. You are not your code — don't take problems personally when one is
     uncovered
  3. Someone else will always know more — seek advice especially when you think
     it's not needed
  4. Don't rewrite code without consultation — rewriting code is not fixing code
  5. Treat people who know less than you with respect, deference, and patience —
     e.g. nontechnical people
  6. The only constant in the world is change — be open to change
  7. The only true authority stems from knowledge, not from the position
  8. Fight for what you believe, but gracefully accept defeat — ideas will be
     overruled, don't take revenge
  9. Don't be "the coder in the corner" — be open and collaborative
  10. Critique code instead of people — be kind to the coder, not to the code
- [A -10x Engineer](https://taylor.town/-10x)
  ([HN](https://news.ycombinator.com/item?id=35438068)) — wasting 400
  engineering hours per week
- [A Senior Engineer's Guide to FAANG Interviews | interviewing.io](https://interviewing.io/guides/hiring-process)
  - The usual process / specific rules for each company (FAANG + Microsoft)
- [Don't Let Architecture Astronauts Scare You | Joel Spolsky](https://www.joelonsoftware.com/2001/04/21/dont-let-architecture-astronauts-scare-you/)
  - Too much conceptual abstraction but never focus on the actual problem in
    reality
  - Solve the real issues, not fancy, interesting, boastful architectures
    > Architecture people are solving problems that they think they can solve,
    > not problems that are useful to solve
- [A senior engineer/EM job search story | Gergely](https://blog.pragmaticengineer.com/a-senior-engineer-em-job-search-story/)
  - 350 job applications to get 3 offers
  - 2 helpful things: New York City's Salary Transparency Law and the power of
    LinkedIn intro and headline
- [Career advice for young system programmers](https://glaubercosta-11125.medium.com/career-advice-for-young-system-programmers-c7443f2d3edf)
  - Do open source in the right way. Play with real systems and make meaningful
    contributions to standout
- [The Engineer’s Guide to Career Growth — Advice from My Time at Stripe and Facebook](https://review.firstround.com/the-engineers-guide-to-career-growth-advice-from-my-time-at-stripe-and-facebook)
  ([HN](https://news.ycombinator.com/item?id=37398921))
  - Raylene Yung, engineering manager at Facebook then Stripe
  - Lessons: be valuable but not critical, establish emotion equilibrium, focus
    on learning not just climbing the ladder
  - Advices for early engineers, ICs, tech lead, managers, to whom leading
    organizations
- [The best engineering interview question I've ever gotten](https://quuxplusone.github.io/blog/2022/01/06/memcached-interview/)
  - Implement multiplication in `memcached`, which only has addition support
  - [Part 2](https://quuxplusone.github.io/blog/2022/01/07/memcached-interview-solution/):
    includes solution and explanation why this is great
- [Fundamentals | Mark Seemann](https://blog.ploeh.dk/2024/05/20/fundamentals/)
  - Rather than aiming to stay current with specific technologies, learn the
    fundamentals
  - Understanding fundamentals increase the change of learning new tech just in
    time
  - E.g.: design patterns, functional programming abstractions, SQL, HTTP, shell
    scripting, algorithms and data structures
- [Essays on programming I think about a lot](https://www.benkuhn.net/progessays/)
  - A collection of 10+ good articles on programming, highly recommend
  - All of them worth to be listed in this wiki
  - From code structure, system design, hiring, engineering mindset, etc.
