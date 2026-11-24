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

```sh
npm install
cp .env.example .env.local   # then fill in the values you need
npm start                    # dev server that also reloads when files in data/ change
```

Open [http://localhost:3000](http://localhost:3000). `npm run dev` runs plain `next dev` without the content watcher.

Most features work without any environment variables. These are only needed for:

| Feature                    | Variables                                                              |
| -------------------------- | ---------------------------------------------------------------------- |
| View counts, guestbook     | `DATABASE_URL` (MySQL, via Prisma)                                     |
| Guestbook sign-in          | `OAUTH_CLIENT_KEY`, `OAUTH_CLIENT_SECRET`, `NEXTAUTH_URL`, `SECRET`    |
| Newsletter (EmailOctopus)  | `EMAILOCTOPUS_API_URL`, `EMAILOCTOPUS_API_KEY`, `EMAILOCTOPUS_LIST_ID` |
| Spotify "now playing"      | `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN`  |
| Twitter embeds and stats   | `TWITTER_API_KEY`, `TWITTER_BEARER_TOKEN`                              |
| Giscus comments (disabled) | `NEXT_PUBLIC_GISCUS_*`                                                 |

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
pages/           routes, plus pages/api for views, guestbook, newsletter, Spotify, GitHub stats
layouts/         page templates (post, list, author, ...)
components/      React components
lib/             MDX pipeline, RSS, tags and third-party API helpers
prisma/          database schema
public/static/   images, favicons, sounds
scripts/         compose, sitemap generation, content watcher
```

## Credits

Based on [pycoder2000/blog](https://github.com/pycoder2000/blog) by Parth Desai, which builds on
[tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) by Timothy Lin.
