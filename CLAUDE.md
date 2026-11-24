@AGENTS.md

# Working on this blog

Personal blog (henryli.dev): Next.js 16, Pages Router, React 19, Tailwind 3, MDX posts in `data/blog/`. Deployed by Vercel from `master`.

## Branches and PRs

- Never commit to `master` (it is protected: changes go through a PR).
- For each piece of work, create a new branch from the latest `origin/master` without asking. Name it `<type>/<short-kebab-description>`, where type is one of `feat`, `fix`, `chore`, `content`, `docs` (e.g. `fix/header-cursor-flicker`).
- Before pushing more commits to an existing branch, check its PR is still open (`gh pr view <n> --json state`). If it has merged, start a new branch from `origin/master` and open a new PR.
- Open PRs against `master` with a summary, the reason, and how it was tested.

## Commands

- Node 22 or newer. `npm run dev`, `npm run build` (also generates the sitemap), `npm run lint`.
- npm runs with `ignore-scripts=true`; approve a package's install script by name only when it is needed.

## Before opening a PR

- `npm run build` and `npm run lint` pass.
- Serve the production build (`npx next start`) and check the changed pages in a browser: they render, the console has no React or hydration errors, and anything animated behaves as before.
- Do not publish private details from CVs or employers: phone, address, grades, internal metrics, or infrastructure specifics.
