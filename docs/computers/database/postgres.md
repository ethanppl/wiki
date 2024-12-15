# Postgres Database

A free and open-source relational database.

- Some helpful SQL for managing database in [notes](#notes)

## Resources

- [PostgreSQL Tutorial](https://www.postgresqltutorial.com/)
- [Don't do this | wiki.postgresql.org](https://wiki.postgresql.org/wiki/Don%27t_Do_This)
  - Rules on things that should not be done even though supported, why and
    exceptions
  - E.g., don't do `NOT IN`, don't use `BETWEEN`, just use `timestampz` type,
    just use `text` type

## Sites

- [PostgreSQL Docs](https://www.postgresql.org/docs/current/index.html)
- [PostgreSQL Wiki](https://wiki.postgresql.org/wiki/Main_Page)
- [PostgreSQL Primer for Busy People](https://zaiste.net/posts/postgresql-primer-for-busy-people/)
  (A cheat sheet)
- [awesome-postgres | GitHub @dhamaniasad](https://github.com/dhamaniasad/awesome-postgres)

## Links

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
- [What I Wish Someone Told Me About Postgres](https://challahscript.com/what_i_wish_someone_told_me_about_postgres)
  ([HN](https://news.ycombinator.com/item?id=42111896))
  - Normalization and general advices
  - Making `psql` useful: use pager, auto-completion, backslash shortcuts, copy
    to CSVs
  - Common issues in indexes, locks, transactions, and JSONB

## Notes

Permissions

```sql
-- Check privileges on tables
SELECT *
FROM information_schema.role_table_grants
WHERE grantee = 'your_role_name';

-- Check privileges on schema
-- Check what privilges are granted on schemas
SELECT
  r.usename AS grantor,
  e.usename AS grantee,
  nspname,
  privilege_type,
  is_grantable
FROM pg_namespace
JOIN LATERAL (SELECT * FROM aclexplode(nspacl) AS x) a ON true
JOIN pg_user e ON a.grantee = e.usesysid
JOIN pg_user r ON a.grantor = r.usesysid

-- Check the default privileges set for future objects
SELECT pgn.nspname, pga.* FROM pg_default_acl pga
LEFT JOIN pg_namespace pgn ON pga.defaclnamespace=pgn.oid;

-- GRANT and REVOKE
GRANT USAGE ON SCHEMA public TO new_user;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO new_user;
GRANT SELECT ON ALL TABLES IN SCHEMA schema_name TO new_user;
GRANT SELECT, INSERT, UPDATE, DELETE ON special_schema.special_table TO new_user;
REVOKE SELECT ON secrets FROM new_user;

-- Alter owner
ALTER TABLE schema.table_name OWNER TO backend_app_migrations;
ALTER TYPE schema.type_name OWNER TO backend_app_migrations;

-- GRANT read on all existing tables
DO
$do$
DECLARE
  sch text;
BEGIN
  FOR sch IN
	SELECT nspname FROM pg_namespace WHERE nspname NOT ILIKE 'pg_temp_%' AND nspname NOT ILIKE 'pg_toast%'
    AND nspname <> 'pg_catalog' AND nspname <> 'information_schema'
  LOOP
    -- Grant access to existing schemas and tables
    EXECUTE format($$ GRANT USAGE ON SCHEMA %I TO readaccess $$, sch);
    EXECUTE format($$ GRANT SELECT ON ALL TABLES IN SCHEMA %I TO readaccess $$, sch);
  END LOOP;
END;
$do$;

-- GRANT read on all future tables
ALTER DEFAULT PRIVILEGES FOR USER backend_app_migrations GRANT SELECT ON TABLES TO readaccess;

-- Change password
ALTER ROLE <role_name_here> WITH PASSWORD 'strong-generated-password';
```

Debug slow DB

```sql
-- Check if any transaction is running for a long time
-- Change the `WHERE` clause to find different kinds of activity
SELECT *
FROM pg_catalog.pg_stat_activity
WHERE state = 'active';

-- Check for uncommited PREPARED statements
SELECT gid, prepared, owner,
database, transaction AS xmin
FROM pg_prepared_xacts
ORDER BY age(transaction) DESC;

-- If yes, and it's safe to kill, kill it by PID
SELECT pg_cancel_backend(7489);

-- Check stats on vacuuming
SELECT schemaname, relname, n_tup_del, n_dead_tup, last_vacuum, last_autovacuum, *
FROM pg_catalog.pg_stat_all_tables
ORDER BY n_dead_tup DESC;

-- Vacuum and analyze the tables
VACUUM VERBOSE ANALYZE syncable_entities, syncable_entity_syncs;

-- Check connection stats
SELECT usename, client_addr, count(*)
FROM pg_stat_activity
GROUP BY client_addr, usename
ORDER BY count DESC;
```
