---
layout: layouts/post.njk
title: "Academic Paper"
description: "A blog-post-style website to facilitate scientific communication of an academic paper."
permalink: /
paper:
  authors:
    - name: "Alexander Terenin"
      url: "https://avt.im/"
  venue:
    name: "GitHub"
    url: "https://github.com/aterenin/academic-paper"
  buttons:
    - name: "Paper"
      url: "https://aterenin.github.io/academic-paper"
    - name: "PDF"
      url: "https://aterenin.github.io/academic-paper"
    - name: "Code"
      url: "https://github.com/aterenin/academic-paper"
    - name: "Poster"
      url: "https://aterenin.github.io/academic-paper"
    - name: "Video"
      url: "https://aterenin.github.io/academic-paper"
  katex: true
  largeCard: false
  favicon: false
---

Welcome to the [Academic Paper](https://github.com/aterenin/academic-paper) theme.
This Eleventy port preserves the original HTML and CSS visual system.

# Features

This theme supports:

- A paper-style header with title, authors, venue, date, and action buttons.
- Lightweight CSS-only styling with no runtime framework dependency.
- Syntax-highlight-friendly code styling.
- KaTeX rendering for inline and display math.
- Figure and footnote styling tuned for long-form writing.

Let's demonstrate math:

```tex
$$
\int_{\mathbb{R}} \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(\frac{(x-\mu)^2}{-2\sigma^2}\right) \mathrm{d} x = 1.
$$
```

# Design and maintainability

Academic Paper is [designed to last](https://jeffhuang.com/designed_to_last/): a minimal, dependency-light approach focused on longevity.

# Recent posts

{% for post in collections.posts %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
