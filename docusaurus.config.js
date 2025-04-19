// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ethan's Wiki",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  // url: "https://ethanppl.github.io",
  url: "https://wiki.ethanppl.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: "/wiki/",
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: "ethanppl", // Usually your GitHub org/user name.
  // projectName: "wiki", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  // Fix duplicated URL because of trailing slash
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // Plausible Analytics
  scripts: [
    {
      src: "https://plausible.ethanppl.com/js/script.js",
      async: true,
      defer: true,
      "data-domain": "wiki.ethanppl.com",
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        blog: {
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All Posts',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-SCMKX3W2PG",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/logo.jpg",
      navbar: {
        title: "Ethan's Wiki",
        logo: {
          alt: "Ethan's Wiki Logo",
          src: "img/logo.png",
        },
        items: [
          { to: "/", label: "Home", position: "left", activeBaseRegex: "^/$" },
          { to: "blog", label: "Blogs", position: "left" },
          { to: "subscribe", label: "Subscribe", position: "left" },
          {
            href: "https://ethanppl.com/",
            label: "About me",
            position: "right",
          },
          {
            href: "https://github.com/ethanppl/wiki",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["elm", "fsharp"],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      metadata: [
        { name: "author", content: "Ethan Pang" },
        { name: "keywords", content: "wiki, guides, resources, collections" },
      ],
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Ethan Pang.`,
        links: [
          {
            label: "About",
            href: "/",
          },
          {
            label: "Blogs",
            href: "/blog",
          },
          {
            label: "Subscribe for free",
            href: "/subscribe",
          },
          {
            label: "About me",
            href: "https://ethanppl.com/",
          },
          {
            label: "Report an issue",
            href: "https://github.com/ethanppl/wiki/issues/new",
          },
        ],
      },
    }),
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        docsRouteBasePath: "/",
        language: ["en", "zh"],
        removeDefaultStemmer: true,
        searchResultLimits: 12,
      }),
    ],
  ],
};

module.exports = config;
