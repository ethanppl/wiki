# Real World Examples

## Links

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
- [Building and operating a pretty big storage system called S3](https://www.allthingsdistributed.com/2023/07/building-and-operating-a-pretty-big-storage-system.html)
  ([HN](https://news.ycombinator.com/item?id=36894932))
  - Designing systems at the scale of S3 means 1 in a billion might be a daily
    occurrence
  - From the physical hard disk storage to managing heat (load balancing), to
    data replication, to data placement
  - There are also considerations of human factors, e.g. threat model and
    lightweight formal verification
  - The last bit is inspiring, scaling the team is as important as scaling the
    technology. Encouraging ownership intrinsically motivates people to push
    forward. As a senior engineer develop and articulate problems, rather than
    pitching solutions.
- [8 Reasons Why WhatsApp Was Able to Support 50 Billion Messages a Day With Only 32 Engineers](https://newsletter.systemdesign.one/p/whatsapp-engineering)
  - WhatsApp focused on the core features (messaging) to keep the product simple
- [Stevey's Google Platforms Rant](https://gist.github.com/chitchcock/1281611)
  (2011)
  - Transforming to a service oriented architecture, dogfood your own service
  - How Google does not understand building a platform v.s. building a product,
    comparing to other tech giants
- [The Architecture Behind A One-Person Tech Startup](https://anthonynsimon.com/blog/one-man-saas-architecture/)
  - The infra setup for things including zero downtime deploys, autoscaling,
    health checks, DNS, TLS, ingress, etc.
  - Cloudflare → load balancer → Kubernetes, inside with Nginx → services
- [iMessage, explained](https://jjtech.dev/reverse-engineering/imessage-explained/)
  - From the creator of the `pypush` repo, how does iMessage works
  - How it builds on top of Apple Push Notification Service (APNs) and the
    keyserver (IDS)
  - How APNs and IDS is designed to handle 2FA, block non-Apple devices and
    encryption
- [How we built a fair multi-tenant queuing system | Inngest](https://www.inngest.com/blog/building-the-inngest-queue-pt-i-fairness-multi-tenancy)
  - Fairness: a tiered queue with a high level queue recording the earliest
    available job of individual queue
- [Development notes from xkcd's "Machine"](https://chromakode.com/post/xkcd-machine/)
  ([HN](https://news.ycombinator.com/item?id=40300454))
  - Design considerations, philosophy and constraints
  - Building simulations and rendering graphics and interactions in the
    frontend, API and backend for moderation
