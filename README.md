## Getting Started

This repo uses Node 22 and Yarn v1.

Install dependencies:

```bash
yarn install
```

Use the correct Node version:

```bash
nvm use
```

Export the Sanity values needed for local builds:

```bash
export SANITY_PROJECT_ID=loktgfyy
export SANITY_DATASET=production
export NEXT_PUBLIC_SITE_URL=http://localhost:3000
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
