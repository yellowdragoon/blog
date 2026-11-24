<div align="center">
  <img alt="Logo" src="public/static/images/logo.png" width="100" />
</div>

<h1 align="center">
  Dragoon's Den
</h1>

<p align="center">
  My personal blog and portfolio, live at <a href="https://www.henryli.dev">henryli.dev</a>.
  Built with <a href="https://nextjs.org/">Next.js</a> and <a href="https://tailwindcss.com/">Tailwind CSS</a>, hosted on <a href="https://vercel.com/">Vercel</a>.
</p>

## Running locally

Needs Node 22 or newer.

```sh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). No environment variables are needed.

## Production build

```sh
npm run build   # builds the site and generates the sitemap
npm run serve   # previews the production build
```

Pushing to `master` deploys to Vercel.

## Writing a post

Run `node ./scripts/compose.js` and follow the prompts, or add a file to `data/blog/` by hand:

```yaml
---
title: My Post
date: '2025-03-14'
tags: [reflection, career]
draft: false
summary: One line shown in the post list.
---
```

Put the post's images in `public/static/images/Blog/`.

## Where things live

```
data/            content and settings: posts, author bio, projects, experience, nav links, siteMetadata.js
pages/           routes
layouts/         page templates (post, list, author, ...)
components/      React components
lib/             MDX pipeline, RSS and tags
public/static/   images, favicons, sounds
scripts/         new-post prompt and sitemap generation
```

## Credits

Based on [pycoder2000/blog](https://github.com/pycoder2000/blog) by Parth Desai, which builds on
[tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) by Timothy Lin.
