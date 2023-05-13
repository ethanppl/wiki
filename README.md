# My Wiki

Check out the Wiki at
[ethanppl.github.io/wiki](https://ethanppl.github.io/wiki/).

This is a personal wiki inspired by
[https://wiki.nikiv.dev/](https://wiki.nikiv.dev/)
([code](https://github.com/nikitavoloboev/knowledge)). This website is built
using [Docusaurus 2](https://docusaurus.io/).

All the content is in the `docs` folder written in Markdown.

## Little bit stats

The number of `.md`` files and the number of links:

```bash
npm run count
```

Number of links in each file:

```bash
grep -rce \[[[:alnum:][:blank:][:punct:]]*\]\(http.*\) --include \*.md docs/*
```
