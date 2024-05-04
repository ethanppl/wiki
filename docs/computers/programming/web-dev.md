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
- [Moving 50,000 lines of code to React Server Components](https://www.mux.com/blog/what-are-react-server-components)
  - What are React Server Components (RSCs)? What are the pros and cons?
  - RSCs Demo. Methods to incrementally adopt RSCs. Some advanced patterns
    handling client & server components.
- [Host a website in a URL | Smolsite.zip](https://smolsite.zip/UEsDBBQAAgAIAMYVIVfaTMb/VQIAANwDAAAKAAAAaW5kZXguaHRtbHVTUW+bMBB+Lr/ilq1i0wo4BGghJA/t9lBpk6Zpm6Y91cEOeAPMbCeEbv3vO0OjZdIK4mTuvvt8+vw5r0xTr5284pStc22Gmq+djWQD/HI2tPhRKrlrmVfIWqoMnm/HZ3laEg0teQY7Vb+cMWpoNiYCvS9fH5r64nxxg0voBTPVyp2HLlRclJXBdeLCXvD+Wh5WLgEC8xBsDrtavXIrY7osCPq+9/uFL1UZhIQQy+ueL94ibUdNBWzlvo/AT9MbjFEUQ4QxQrIYSOHHcWh5sRLbmKb7yCfhTQIxluIxJoB/kBTeBPbmHoJtTNMv+N03CVwVBKtRYpltHsbqE+QFAYv1LBhz3lj5H/mVZXdhK+p65Z6HC3bJYkanhCc7WggzoC5+9JhSu5qvXL7nrWTMDSYNrBy4mr1aOlvZGm9LG1EPGWjaak9zJfCsGqpK0WYo71V3WDoPTsFbwxUe8FlHGRNteVLrFLeFv+eLhx4S+y6ds6MLLol9lyf9IbHtZ4YfzNErU+rByYPJVXkweszJrbus4+brW+NqoKAbWWth+DOEzNeOk3frT5XQ0Fey5mArqIDRIFotGAdTcfj88R2iu0ewhEpqA4PcKY1O1BOmkE1D0aC1aNGf3c4AiqcGU+HEyIUbf7v9YLXlF3BNsSmJgLeFxC2EuQBsBYMy4A/QrRVsZi2p0ZPHgf170QWz7DiIwqvzAjAH3puv33+moGXDjzjckfGDb68bNEMtS+l3bYl4XlTyCeq7gpp/SX7DBifFQT2vV7QDcjdDgced82ASFhfTnXb+AFBLAQIeAxQAAgAIAMYVIVfaTMb/VQIAANwDAAAKAAAAAAAAAAEAAACkgQAAAABpbmRleC5odG1sUEsFBgAAAAABAAEAOAAAAH0CAAAAAA==)
  ([HN](https://news.ycombinator.com/item?id=37408150))
  ```bash
  $ zip -DXjq9 somesite.zip index.html mylogo.png
  $ echo "https://smolsite.zip/`cat somesite.zip | base64 --wrap 0`"
  ```
- [The Rules of Margin Collapse](https://www.joshwcomeau.com/css/rules-of-margin-collapse/)
  - Only vertical and adjacent margins collapse, not in grid or Flexbox, and the
    bigger margin wins
  - Nesting doesn't prevent collapsing. Padding, border, empty space or scroll
    container blocks collapsing.
  - More advance: direction, more than 2 margins, negative margins
- [HTML Tips & Tricks](https://www.htmhell.dev/tips/)
- [CSS for printing](https://voussoir.net/writing/css_for_printing/)
  - `@page` rule, `@media print` and more
- [A formula for responsive font-size](https://jameshfisher.com/2024/03/12/a-formula-for-responsive-font-size/)
  - No `@media` breakpoints, just a linear function:
    `font-size: calc(1rem + 0.25vw);`
- [A brief history of web development](https://gebna.gg/blog/brief-history-of-web-development)
  - And why your framework doesn't matter
  - Angular, React, GraphQL, Vercel & Next.js, Svelte, HTMX

CSS games

- [Flexbox Froggy](https://flexboxfroggy.com/)
  ([HN](https://news.ycombinator.com/item?id=37713530)) — Learn CSS Flexbox
- [Grid Garden](https://cssgridgarden.com/) — Learn CSS Grid

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
