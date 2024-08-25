# Database

Store and query data. I will add more later.

## Resources

- [Database Normalization | Wikipedia](https://en.wikipedia.org/wiki/Database_normalization)
  — Structuring relational database for data integrity
- [Database Fundamentals](https://tontinton.com/posts/database-fundementals/)
  ([HN](https://news.ycombinator.com/item?id=38655066))
  - The fundamental problems in the world of databases and common approaches to
    solve them

## Links

- [Database Cryptography Fur the Rest of Us | Soatok](https://soatok.blog/2023/03/01/database-cryptography-fur-the-rest-of-us/)
  - A guide to the difficulty and possible solution for database encryption
  - Confused deputies, canonicalization attacks, multi-tenancy, and the
    additional complexity in NoSQL databases
  - Searchable encryption: order-preserving or order-revealing encryption,
    deterministic encryption, homomorphic encryption, searchable symmetric
    encryption, HMAC
- [How Figma Scaled to Multiple Databases](https://www.figma.com/blog/how-figma-scaled-to-multiple-databases/)
  - Tactical fixes: upgrade RDS, read replicas, new DB for new use cases, add
    PgBouncer
  - Vertical partition: Move groups of tables onto different databases
  - A detailed description of how the migration was done to limit the
    availability impact to \<1 minute
  - PgBouncer to redirect traffic. Logical replication to copy tables. LSNs to
    verify synchronization.
- [Is ORM still an 'anti-pattern'? | GitHub @getlago](https://github.com/getlago/lago/wiki/Is-ORM-still-an-%27anti-pattern%27%3F)
  - The paradigm mismatch between ORM data representation and relational data
    model, directed pointers vs. undirected graphs
  - Efficiency: The real issue is ORMs encourage poor practices. Data loaders
    can handle N+1 problems in ORMs
  - Visibility problem: Translating SQL error to ORM error confuses developers
- [Explaining the Postgres Meme](https://www.avestura.dev/blog/explaining-the-postgres-meme)
  - There are numerous concepts in the iceberg meme of database
  - More like explaining database concepts using Postgres as an example
- [Inside the New Query Engine of MongoDB | Nikita Lapkov](https://laplab.me/posts/inside-new-query-engine-of-mongodb/)
  - A writeup of the rewrite of the query execution engine in MongoDB version
    7.0
  - 2 major reasons for rewrite and the idea of a Slot Based Engine
  - Architecture, data flow and compiler for the slot based engine
- [How to create a Streaming SQL Engine | Episo](https://www.epsio.io/blog/how-to-create-a-streaming-sql-engine)
  - Streaming SQL Engine: keep queries' results up to date without recalculating
  - Nodes processing messages in a format of `(key: modification)`, can perform
    filtering, join, group by, etc.
  - Indexes and caching can optimize up to a point that they can't and streaming
    SQL engine just solves it
- [My Notes on GitLab's Postgres Schema Design | Shekhar Gulati](https://shekhargulati.com/2022/07/08/my-notes-on-gitlabs-postgres-schema-design/)
  ([HN](https://news.ycombinator.com/item?id=39413972))
  - GitLab uses either `serial` or `bigserial` for primary keys, no UUID
  - `text` type with `CHECK` constraint to define length constraints
  - Use foreign key constraints except for immutable tables like logs and events
  - Partitioning on big tables to improve performance, e.g. `PARTITION BY RANGE`
    for time-series data
  - Trigram text search with `pg_trm` for faster `LIKE` search
  - `updated_at` only for tables that can be modified
  - Enums are `smallint` rather than `character varying`
- [Why SQLite Uses Bytecode](https://sqlite.org/draft/whybytecode.html)
  - Bytecode implementation vs tree-of-objects implementation of the prepared
    statement
  - Bytecode: smaller, faster, easier to understand & debug, can be run
    incrementally
  - Tree-of-objects: query planning can be tweaked at runtime, dynamically
    self-tuning, and easy to parallelize

Soft delete

- [Easy, alternative soft deletion: `deleted_record_insert`](https://brandur.org/fragments/deleted-record-insert)
  - Hard delete and create a function that dump into a schemaless table
- [Avoid the soft delete anti-pattern](https://www.cultured.systems/2024/04/24/Soft-delete/)
  - Few alternatives proposed, e.g. add state, temp table, use data warehouse

Postgres

- [Nine Ways to Shoot Yourself in the Foot with PostgreSQL](https://philbooth.me/blog/nine-ways-to-shoot-yourself-in-the-foot-with-postgresql)
  ([HN](https://news.ycombinator.com/item?id=35684220))
  - `work_mem`, functions and procedures, triggers, `NOTIFY`, `EXPLAIN_ANALYZE`,
    CTEs v.s. subqueries (debatable), recursive CTEs, missing indexes for
    foreign keys, `=` v.s. `IS NOT DISTINCT FROM`
- [Understanding Database Indexes in PostgreSQL | Mastermind Dev](https://blog.mastermind.dev/indexes-in-postgresql)
  ([HN](https://news.ycombinator.com/item?id=35978757))
  - A guide on database indexes, how they work and what are the types (BTree,
    Hash, GiST, SP-GiST, GIN, BRIN)
  - Different ways to index: basic, partial, expression, covering
  - Maintenance: detecting unused indexes, bloats (unused space) or duplicates
- [Securing PostgreSQL DB with Roles & Privileges | Romario](https://rlopzc.com/posts/securing-your-postgresql-db-with-roles--privileges/)
  - Scope and implement roles and privileges in PostgreSQL
  - Commands like `CREATE`, `GRANT`, `ALTER DEFAULT PRIVILEGES`, and
    `REASSIGN OWNED`
- [Using JSONB in PostgreSQL | ScaleGrid](https://scalegrid.io/blog/using-jsonb-in-postgresql-how-to-effectively-store-index-json-data-in-postgresql/)
  - Includes patterns & antipatterns, data structures, operators & functions,
    indexing JSONB columns in Postgres
- [The Unexpected Find That Freed 20GB of Unused Index Space](https://hakibenita.com/postgresql-unused-index-size)
  ([HN](https://news.ycombinator.com/item?id=37294793))
  - A few tricks like `pg_stat_all_indexes` and `REINDEX` free up space
  - Finding that Postgres index NULL values. Partial indexes can free up space
- [Transaction Isolation in Postgres, explained](https://www.thenile.dev/blog/transaction-isolation-postgres)
  - ACID - atomicity, consistency, isolation and durability
  - Isolation as defined in SQL 92 Standard: serializable isolation. Results of
    concurrent transactions are the same as running them sequentially
  - Anomalies: dirty reads, non-repeatable reads, phantom reads
  - Postgres MVCC: anything lower than the lowest active XIDs, new versions of
    existing rows and new rows are hidden
  - Postgres vacuuming: freeing XIDs for reuse since XIDs are limited to 32 bits
  - [Postgres isolation test suite](https://github.com/postgres/postgres/tree/master/src/test/isolation)
- [How postgres stores data on disk](https://drew.silcock.dev/blog/how-postgres-stores-data-on-disk/)
  - Heap, segment, page, tuple
  - Using the `pageinspect` extension to see how data are stored

SQL

- [Get records with max value for each group of grouped SQL results](https://stackoverflow.com/questions/12102200/get-records-with-max-value-for-each-group-of-grouped-sql-results)
  - Just a page that I keep coming back to
