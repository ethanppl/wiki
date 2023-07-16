# Software Design

Design/architect software applications/systems.

Related pages:

- [Computers / Cybersecurity](/computers/cybersecurity)
- [Computers / Database](/computers/database)
- [Computers / Network](/computers/network)

## Resources

- [The Architect's Bookshelf | Gregor Hohpe](https://architectelevator.com/architecture/architect-bookshelf/)
  - A collection of books about software architecture
  - Going from single components to connected components, to entire systems, and
    dealing with the context
- [Architectures of Open Source Application](https://aosabook.org/en/index.html)
  - 4 volumes, the authors of open source applications explain how their open
    source software is structured and why
- [A Guide to System Design Interview](https://interviewing.io/guides/system-design-interview/part-two)
  ([HN](https://news.ycombinator.com/item?id=34999464))
  - There are two parts, how to approach an interview and the fundamental
    concept
  - A bit too much prologue but can just scroll to the key points and the
    fundamental concept part

## Sites

- [Refactoring Guru - Design Patterns](https://refactoring.guru/design-patterns)
  - Benefits, criticism, history, classification of patterns
  - [A collection of creational, structural, and behavioural design patterns](https://refactoring.guru/design-patterns/catalog)

## Links

Explanations:

- YouTube:
  [Making impossible states impossible | elm-conf](https://youtu.be/IcgmSRJHu_8)
  - Better domain modelling, design data types around the real-world domain
  - Understanding union type, zip list, opaque type
- [Clocks and Causality - Ordering Events in Distributed Systems](https://www.exhypothesi.com/clocks-and-causality/)
  ([HN](https://news.ycombinator.com/item?id=35399603))
  - How logical clocks order events in distributed systems
  - Clocks introduced: Lamport clock, Lamport origin clock, vector clock and
    dotted vector clock, Lamport causal clock
- [Conway's Law](https://martinfowler.com/bliki/ConwaysLaw.html)
  ([HN](https://news.ycombinator.com/item?id=35591026))
  - "Any organization that designs a system (defined broadly) will produce a
    design whose structure is a copy of the organization's communication
    structure."
  - Projects plans should follow how people communicate in the organization
- [Load balancing algorithms](https://samwho.dev/load-balancing/)
  ([HN](https://news.ycombinator.com/item?id=35588797))
  - A little bit of Bartosz Ciechanowski style visualizing load balancing
    algorithms, with a playground at the end
  - Round robin, weighted random, weighted round robin, least connections, peak
    EWMA
- [Payments 101 for a developer](https://github.com/juspay/hyperswitch/wiki/Payments-101-for-a-Developer)
  - A guide for developers developing systems involving the transfer of money.
    The common terminologies and concepts.
  - Terminologies: merchant, issuer, acquirer, network or scheme, payment
    processor, PCI compliance, GDPR compliance, etc.
  - Concepts: intent to pay, data collection, authentication, authorization,
    status validation, dispute, refund, settlement, etc.
- [Imaginary Problems Are the Root of Bad Software](https://cerebralab.com/Imaginary_Problems_Are_the_Root_of_Bad_Software)
  ([HN](https://news.ycombinator.com/item?id=36380711))
  - Imaginary problems are more fun to solve than the real problems
  - Optimizing over some details and losing sight of the real issues
  - The HN thread is also worth a read: it's the industry that encourages people
    to look for imaginary problems
- [Monitoring is a Pain | Mathew Duggan](https://matduggan.com/were-all-doing-metrics-wrong/)
  ([HN](https://news.ycombinator.com/item?id=36469147))
  - Good monitoring requires a lot of work, costs a lot and often has a high
    noise-to-signal ratio
  - Tackle the 3 major aspects: logging, metrics and tracing
  - Common pitfalls, author's experience, benefits and drawbacks of each
- [Fast machines, slow machines | Julio Merino](https://jmmv.dev/2023/06/fast-machines-slow-machines.html)
  ([HN](https://news.ycombinator.com/item?id=36503983))
  - Command prompt, notepad, file explorer and Paint all start faster in Windows
    2000 than in Windows 11
  - While hardware has improved for faster machines, software degraded
  - Cross-platform technologies and interpreted language contribute to slow
    software, particularly startup time
  - The issue is we are capable to do it but deprioritizing it. Soon, the
    hardware advances are eaten away by poor software designs
- [Advice for Operating a Public-Facing API | Joshua Stein](https://jcs.org/2023/07/12/api)
  - Host the API on a separate hostname: for different scaling & security
    measures
  - Don't be too liberal in what you accept: strict API design, no workarounds,
    otherwise risk breaking changes down the road
  - Avoid OAuth and prefer static API tokens for simplicity
  - Stay on top of failures: hopefully, users can handle the failure themselves
    and fix their app
  - Others: log a unique ID, descriptive error responses, prefixed tokens,
- [Feature Flags: Theory vs Reality](https://bpapillon.com/post/feature-flags-theory-vs-reality/)
  — Problems and possible ways to better manage feature flags
- [Sequence Diagrams | Mermaid Chart](https://www.mermaidchart.com/blog/posts/sequence-diagrams-the-good-thing-uml-brought-to-software-development)
  ([HN](https://news.ycombinator.com/item?id=36342931))
  - Sequence diagram: visualize the dynamic flow of messages across systems. Map
    out "black boxes" and show how they interact
  - Start with happy paths and then add edge cases. The flow of the happy path
    should remain as the anchor for other edge cases
  - Comprehensiveness is the enemy of comprehensibility: the code is the best
    source of comprehensiveness, keep the diagrams simple for effective
    communication

Real-world examples:

- [How Reddit built the 2017 r/Place](https://www.redditinc.com/blog/how-we-built-rplace/)
  - r/Place was a collaborative drawing board on Reddit in 2017 April Fools' Day
    How Reddit built the backend, API, frontend, scaling, caching, handling
    bots, etc.
- Collection of blogs from Figma about their real-time editing and multiplayer
  - A good dive into how Figma built real-time editing and multiplayer
    application
  - [Realtime editing of Ordered Sequences](https://www.figma.com/blog/realtime-editing-of-ordered-sequences/):
    operational transform, fractional indexing
  - [How Figma's multiplayer technology works](https://www.figma.com/blog/how-figmas-multiplayer-technology-works/):
    CRDT
  - [Making multiplayer more reliable](https://www.figma.com/blog/making-multiplayer-more-reliable/)
- [The Technology Behind GitHub's New Code Search](https://github.blog/2023-02-06-the-technology-behind-githubs-new-code-search/)
  - How GitHub built its search engine for searching code
  - Concepts: inverted index, n-gram, content addressable hashing, indexing and
    query pipeline
  - Indexing 15.5 billion documents in 36 hours, 115 TB of content with 28 TB of
    unique content and the index itself in just 25 TB
- [Twitter's Recommendation Algorithm](https://blog.twitter.com/engineering/en_us/topics/open-source/2023/twitter-recommendation-algorithm)
  ([Code on GitHub](https://github.com/twitter/the-algorithm))
  - Candidate sourcing (find best tweets), ranking, heuristics and filters,
    mixing and serving
  - [What does (and does not) the Twitter algorithm tell us?](https://knightcolumbia.org/blog/twitter-showed-us-its-algorithm-what-does-it-tell-us)
    ([HN](https://news.ycombinator.com/item?id=35519224))
  - Useless but fun discoveries:
    - There is a specific label called `author_is_elon`
      ([ref](https://twitter.com/wongmjane/status/1641884551189512192))
    - Jack Dorsey, Katy Perry, Stephen Curry and Barack Obama are labelled as
      testing accounts
      ([ref](https://twitter.com/wongmjane/status/1641895949999153152)), which
      is now overridden by a forced push
      ([ref](https://twitter.com/wongmjane/status/1642028241828601856),
      [original commit](https://github.com/twitter/the-algorithm/blob/7f90d0ca342b928b479b512ec51ac2c3821f5922/graph-feature-service/src/main/scala/com/twitter/graph_feature_service/server/handlers/ServerWarmupHandler.scala#L23))
- [Amazon Prime Video switched from microservices to a monolith design](https://www.primevideotech.com/video-streaming/scaling-up-the-prime-video-audio-video-monitoring-service-and-reducing-costs-by-90)
  - Initial design: distributed components orchestrated by AWS Step Functions
  - Problems: orchestration management hit account limits and data transferred
    between components through S3 is expensive
  - New design: single monolith structure with AWS EC2 and ECS
  - Reduced infrastructure cost by over 90%
