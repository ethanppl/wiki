# Software Design

Design/architect software applications/systems.

Related pages:

- [Computers / Cybersecurity](/computers/cybersecurity)
- [Computers / Database](/computers/database)
- [Computers / Network](/computers/network)

## Notes

- [Data-Oriented Design Principles](https://data-oriented.design/) — The purpose
  of all programs is to transform data from one form to another.

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
- [Common design pattern at Stripe](https://dev.to/stripe/common-design-patterns-at-stripe-1hb4)
  - Patterns for designing APIs, part 4 of
    [Designing APIs for Humans](https://dev.to/paulasjes/series/19794)
  - Prefer enums over boolean (making impossible states impossible), nested
    object for extensibility
  - Do not enforce security through obscurity, make IDs unguessable, but prefix
    ID with an entity name
