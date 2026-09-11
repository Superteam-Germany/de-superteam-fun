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
