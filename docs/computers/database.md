# Database

Store and query data. I will add more later.

## Links

- [Nine Ways to Shoot Yourself in the Foot with PostgreSQL](https://philbooth.me/blog/nine-ways-to-shoot-yourself-in-the-foot-with-postgresql)
  ([HN](https://news.ycombinator.com/item?id=35684220))
  - `work_mem`, functions and procedures, triggers, `NOTIFY`, `EXPLAIN_ANALYZE`,
    CTEs v.s. subqueries (debatable), recursive CTEs, missing indexes for
    foreign keys, `=` v.s. `IS NOT DISTINCT FROM`
- [Understanding Database Indexes in PostgreSQL | Mastermind Dev](https://blog.mastermind.dev/indexes-in-postgresql)
  ([HN](https://news.ycombinator.com/item?id=35978757))
  - A guide on database indexes, how does it work and what are the types (BTree,
    Hash, GiST, SP-GiST, GIN, BRIN)
  - Different ways to index: basic, partial, expression, covering
  - Maintenance: detecting unused indexes, bloats (unused space) or duplicates
- [How Figma Scaled to Multiple Databases](https://www.figma.com/blog/how-figma-scaled-to-multiple-databases/)
  - Tactical fixes: upgrade RDS, read replicas, new DB for new use cases, add
    PgBouncer
  - Vertical partition: move groups of tables onto different databases
  - A detailed description of how the migration was done to limit the
    availability impact to <1 minute
  - PgBouncer to redirect traffic. Logical replication to copy tables. LSNs to
    verify synchronization.
- [Is ORM still an 'anti-pattern'? | GitHub @getlago](https://github.com/getlago/lago/wiki/Is-ORM-still-an-%27anti-pattern%27%3F)
  - The paradigm mismatch between ORM data representation and relational data
    model, directed pointers vs undirected graphs
  - Efficiency: the real issue is ORMs encourage poor practices. Data loaders
    can handle N+1 problems in ORMs
  - Visibility problem: translating SQL error to ORM error confuses developers
