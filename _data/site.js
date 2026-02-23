const isProduction = process.env.ELEVENTY_ENV === "production";
const productionUrl = process.env.SITE_URL || "https://example.com";

export default {
  title: "Academic Paper Zola Theme",
  description: "A blog-post-style website for scientific communication of an academic paper.",
  language: "en",
  author: "Alexander Terenin",
  url: isProduction ? productionUrl : "http://localhost:8080",
  icon: "/favicon.ico",
  cardImage: "/card.png",
  themeSlug: "academic-paper",
  themeName: "Academic Paper",
  themeHomepage: "https://github.com/aterenin/academic-paper",
  themeDemo: "https://aterenin.github.io/academic-paper",
  themeAuthor: "Alexander Terenin",
  themeLicense: "MIT",
  footerText: 'This website is built using <a href="https://www.getzola.org">Zola</a> and the <a href="http://github.com/aterenin/academic-paper/">Academic Paper</a> theme, which is <a href="https://jeffhuang.com/designed_to_last/">designed to last</a>.',
  serverSideKatex: true,
  largeCard: false,
  favicon: false,
  paperDefaults: {
    authors: [
      { name: "Alexander Terenin", url: "https://avt.im/" }
    ],
    venue: { name: "GitHub", url: "https://github.com/aterenin/academic-paper" },
    buttons: [
      { name: "Paper", url: "https://aterenin.github.io/academic-paper" },
      { name: "PDF", url: "https://aterenin.github.io/academic-paper" },
      { name: "Code", url: "https://github.com/aterenin/academic-paper" },
      { name: "Poster", url: "https://aterenin.github.io/academic-paper" },
      { name: "Video", url: "https://aterenin.github.io/academic-paper" }
    ],
    katex: true
  },
  navigation: [
    { label: "Home", url: "/" },
    { label: "Blog", url: "/blog/" },
    { label: "About", url: "/about/" },
    { label: "Contact", url: "/contact/" }
  ]
};
