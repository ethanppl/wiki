# Web Development

Developing user interfaces of web pages.

## Resources

- [Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn)
  — Learning guide provided by Mozilla
- [Learn HTML | Web Dev](https://web.dev/learn/html/) — Get the basic right,
  more beginner-friendly
- [FullStackOpen Deep dive into modern web development](https://fullstackopen.com/en/)
  - Completely free full stack course. Same as the one at the University of
    Helsinki
  - Cover React, NodeJS, Express, Redux, GraphQL, TypeScript, React Native,
    Docker, MongoDB and Postgres

## Sites

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web) — Mozilla, the
  most useful and complete web docs
- [CSS Selectors: A Visual Guide](https://fffuel.co/css-selectors/) — Select
  specific HTML elements to apply CSS to

## Links

- [`color-scheme` CSS Property | Web Dev](https://web.dev/color-scheme/)
  - How to improve dark mode default styling
  - Discovered from this blog about configuring dark mode:
    [CSS System Colors | Jim Nielsen's Blog](https://blog.jim-nielsen.com/2021/css-system-colors/)
- [After dark CSS](https://www.bryanbraun.com/after-dark-css/) — Some fun CSS
  animations
  - Some are quite simple, animations without any JavaScript but just CSS. I
    like the Spotlight one
- [300ms Faster: Reducing Wikipedia's Total Blocking Time | Nicholas Ray](https://www.nray.dev/blog/300ms-faster-reducing-wikipedias-total-blocking-time/)
  ([HN](https://news.ycombinator.com/item?id=36113430))
  - Tasks run longer than 50ms are considered long tasks, anything longer than
    that is blocking other tasks
  - Remove unnecessary JavaScript: initializing multiple event handlers or
    callbacks
  - Optimize existing JavaScript: event delegation, attach a single event
    listener to a common ancestor of many elements
- [I'm betting on HTML](https://catskull.net/html.html)
  ([HN](https://news.ycombinator.com/item?id=36966653))
  - HTML can handle more things than before
  - Some interesting tabs: `<abbr>`, `<datalist>`, `<details>`, `<dialog>`,
    `<mark>`, `<meter>`, `<progress>`, etc.
- [Things you forgot (or never knew) because of React | Josh Collinsworth](https://joshcollinsworth.com/blog/antiquated-react)
  - The author has a strong opinion, but it's a good overview of what React is
    outdated compared to others
  - With React assumed to be the default, people don't realize features like web
    components are missing
  - There are better alternatives like Svelte, Vue, Solid, etc.
- [A Blog Post with Every HTML Element](https://www.patrickweaver.net/blog/a-blog-post-with-every-html-element/)
  ([HN](https://news.ycombinator.com/item?id=37104742))
  - More than a hundred different HTML tags, categorized, all used somewhere in
    the post
- [Adapting Illustrations to Dark Mode](https://blog.simonfarshid.com/adapting-illustrations-to-dark-mode)
  - Keep the colour the same, only inverting the lightness
  - `invert(1)` invert all RGB, `hue-rotate(180deg)` inverts revert back to the
    original colour
    ```css
    filter: invert(1) hue-rotate(180deg);
    ```

SVG

- [Online SVG Path Editor | GitHub @ygnn](https://yqnn.github.io/svg-path-editor/)
- [Interactive SVG Path Visualizer](https://svg-path-visualizer.netlify.app/)
- [A Deep Dive into SVG Paths](https://www.nan.fyi/svg-paths)
  ([HN](https://news.ycombinator.com/item?id=36574645))
  - Cursors, lines, bezier curves, cubic curbes, and arcs
  - Include some challenges to draw some shapes at the end of each section
- [Handcraft sparklines chart in SVG](https://alexplescan.com/posts/2023/07/08/easy-svg-sparklines/)
  — Drawing lines, scaling, and adding a fill by hand or a helper function in
  the backend
