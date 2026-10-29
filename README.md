## Getting Started

This repo uses Node 22 and Yarn v1.

Select the repository's Node version (the `.nvmrc` file selects Node 22):

```bash
nvm use
```

Install dependencies with Yarn v1:

```bash
yarn install
```

Export the Sanity values needed for local builds:

```bash
export SANITY_PROJECT_ID=loktgfyy
export SANITY_DATASET=production
```

Run the website locally:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run the Sanity Studio locally:

```bash
cd studio
yarn dev
```

Build everything from the repo root:

```bash
yarn build
```

## Web Analytics

Next.js pages use one `@vercel/analytics/next` instance in `src/app/layout.tsx`.
The `/`, `/buildstation`, and `/breakpoint` rewrites serve standalone HTML from
`public/site/`, bypassing that layout. Each HTML page must include the Vercel
Analytics queue and deferred `/_vercel/insights/script.js` script. The analytics
test checks every HTML rewrite so new standalone pages cannot silently omit it.

Run the checks with Node 22:

```bash
node --test --test-reporter=spec tests/*.test.mjs deployment-compatibility.test.mjs
```

Vercel serves the analytics endpoints after deployment; they are not provided by
the local Next.js server. Verify one page-view request per visit, including
internal navigation, and confirm the public paths appear in the production
project's Analytics dashboard. Redirects are counted under their destination URL.
