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
- [awesome-falsehood | GitHub @kdeldycke](https://github.com/kdeldycke/awesome-falsehood)
  - A curated list of falsehoods programmers believes to be true but isn't
  - About dates, emails, names, all kinds of stuff
  - The article that started it all:
    [falsehood programmers believe about names](https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/)
- [Byte-sized System Design Concepts | GitHub @ByteByteGoHq](https://github.com/ByteByteGoHq/system-design-101)
  - System design 101 with visuals and simpler terms

## Links

- [Conway's Law](https://martinfowler.com/bliki/ConwaysLaw.html)
  ([HN](https://news.ycombinator.com/item?id=35591026))
  - "Any organization that designs a system (defined broadly) will produce a
    design whose structure is a copy of the organization's communication
    structure."
  - Projects plans should follow how people communicate in the organization
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
- [Common design pattern at Stripe](https://dev.to/stripe/common-design-patterns-at-stripe-1hb4)
  - Patterns for designing APIs, part 4 of
    [Designing APIs for Humans](https://dev.to/paulasjes/series/19794)
  - Prefer enums over boolean (making impossible states impossible), nested
    object for extensibility
  - Do not enforce security through obscurity, make IDs unguessable, but prefix
    ID with an entity name
- [Squeeze the hell out of the system you have | Dan Slimmon](https://blog.danslimmon.com/2023/08/11/squeeze-the-hell-out-of-the-system-you-have/)
  ([HN](https://news.ycombinator.com/item?id=37091983))
  - Increasing the complexity costs time, effort as well as attention required
    for all future decisions
  - Until reaching the fundamental limit of the current (dumb) system, try to
    optimize and squeeze as much as possible
- [Tracing: structured logging, but better in every way](https://andydote.co.uk/2023/09/19/tracing-is-better/)
  - Log levels is not useful, messages can be better if structured, `stdout` is
    mixed
  - No relationship between lines, no timing/duration but only timestamps,
    querying logs is ineffective and hard
  - Contains an example of how to evolve the system to use OpenTelemetry Tracing
- [Every infrastructure decision I endorse or regret after 4 years at a startup](https://cep.dev/posts/every-infrastructure-decision-i-endorse-or-regret-after-4-years-running-infrastructure-at-a-startup/)
  ([HN](https://news.ycombinator.com/item?id=39313623))
  - Reflecting each product choice or architecture decision. Why they are
    good/bad
  - And as always, interesting opinions in the HN thread
- [Why, after 6 years, I am over GraphQL](https://bessey.dev/blog/2024/05/24/why-im-over-graphql/)
  - Attack surface is large: authorisation, nested queries and rate limiting,
    query parsing
  - Performance issue: n+1, authorising with n+1, dataloaders boilerplate
  - Coupling business logic into the API, increasing complexity of API tests
- [OAuth from First Principles | Stack Auth](https://stack-auth.com/blog/oauth-from-first-principles)
  - Access token to avoid disclosing the full credentials
  - Registered redirect URI to avoid impersonation
  - State to avoid CSRF, code and client secret to avoid eavesdropping

Emails

- [Email, explained from first principles](https://explained-from-first-principles.com/email/)
  - From basic concepts and terminologies of email systems
  - To the architecture, protocols and format for email to work
  - Issues with emails like spamming and privacy, and recent standards to
    address it
  - Alongside with many concepts introduced about the internet like TLS, replay
    attacks, CRAM, SCRAM, channel bindings, etc.
- [Understanding SPF, DKIM and DMARC: A simple Guide](https://github.com/nicanorflavier/spf-dkim-dmarc-simplified)
  ([HN](https://news.ycombinator.com/item?id=40708476))
  - SPF: a list of email friends that can send email on behalf of this domain
  - DKIM: public key to verify email are not modified
  - DMARC: rule book of how to handle SPF and DKIM checks

Queues

- [Load balancing algorithms](https://samwho.dev/load-balancing/)
  ([HN](https://news.ycombinator.com/item?id=35588797))
  - A little bit of Bartosz Ciechanowski style visualizing load balancing
    algorithms, with a playground at the end
  - Round robin, weighted random, weighted round robin, least connections, peak
    EWMA
- [Choose Postgres Queue Technology](https://adriano.fyi/posts/2023-09-24-choose-postgres-queue-technology/)
  ([HN](https://news.ycombinator.com/item?id=37636841))
  - Not specifically about Postgres queue, but the cult of prioritizing
    scalability over other things
  - Build boring technology: If and only if the boring technology is unable to
    meet demands should alternatives be considered
  - Build escape hatches: abstractions (adapters) to make it easy to replace
- [Retries](https://encore.dev/blog/retries)
  - Visualizing how to design retry mechanisms, with exponential backoff and
    jitter
- [The Big Little Guide to Message Queues](https://sudhir.io/the-big-little-guide-to-message-queues)
  - What are message queues? When to and when not to use queues?
  - Delivery guarantees: at-least-once, at-most-once, exactly-once
  - Ordering vs parallelism, and parallel doesn't mean random
  - Fan out/in design, and the use of topics on top of queues
  - Consideration of poison pills and dead letters queue
  - Common implementation: AWS SNS/SQS, Redis Streams, Kafka, RabbitMQ, etc.
- [Queueing | Encore](https://encore.dev/blog/queueing)
  - Interactively visualizing queueing strategies: FIFO, LIFO, priority queue,
    active queue management

Algo

- [Everything I Know about the Fast Inverse Square Root Algorithm](https://github.com/francisrstokes/githublog/blob/main/2024%2F5%2F29%2Ffast-inverse-sqrt.md)
  ([HN](https://news.ycombinator.com/item?id=40544716))
  - Every step involved to build the fast inverse square root algorithm
  - From how 32-bit floating point is stored, to properties of log and Newton's
    method of root finding
