# Software Design

How to design/architect software applications/systems.

## Resources

- [The Architect's Bookshelf | Gregor Hohpe](https://architectelevator.com/architecture/architect-bookshelf/)
  - A collection of books about software architecture
  - Going from single components to connected components, to entire systems, and
    dealing with the context
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
