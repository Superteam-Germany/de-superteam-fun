# Security review: Superteam Germany website

Date: 2026-09-11  
Scope: Next.js production application, redesigned static entry pages, public API routes, dependency tree, deployment configuration, and Git secret history.

## Outcome

Go for website deployment after the external River credential check below. The reviewed application has no confirmed critical or high-severity vulnerability reachable by a public website visitor after the fixes in this review. The project owner accepted launching the newsletter endpoint without a platform firewall rule to keep the deployment simple; the endpoint-level protections remain in place.

## Fixed in this review

- Upgraded Next.js from 14.2.35 to the security-patched 15.5.24 maintenance release and aligned `eslint-config-next`.
- Upgraded Axios to 1.20.0, `next-sanity` to 9.12.3, `@sanity/client` to 7.27.0, and PostCSS to 8.5.28.
- Forced patched same-major releases of `form-data`, PostCSS, `tar`, and `tar-fs` through Yarn resolutions.
- Added HSTS, CSP, clickjacking protection, MIME-sniffing protection, a restrictive permissions policy, and a strict referrer policy.
- Limited the Next.js image optimizer to `cdn.sanity.io` instead of accepting every HTTPS host.
- Kept direct `/site/*` copies out of search indexes.
- Added same-origin and JSON content-type checks, a 2 KiB request limit, a 254-character email limit, generic upstream errors, no-store responses, and an 8-second provider timeout to `/api/newsletter`.
- Added bounded CDN caching to public data proxy responses to reduce repeated use of upstream API credentials.
- Removed the unused River events proxy; the redesigned website uses Luma and had no callers for this legacy route.
- Updated route handler and dynamic-page signatures required by Next.js 15.

## Findings requiring follow-up

### SEC-001 — High — Historical River access key in Git history

Evidence: commit `37e5b1a49e0a` contains a non-empty `RIVER_ACCESS_KEY` in `.env`. The value is not present in the current working tree and was not printed during this review.

Impact: anyone with access to the repository history may possess the key. If it is still valid, they could make authenticated River API requests outside this application.

Required action: revoke the historical River key. The unused `/api/events` route has now been removed, so no replacement River key is required in the deployment environment. Revocation removes the practical risk; rewriting Git history is optional afterwards and should only be done as a coordinated repository operation.

### SEC-002 — Medium — Newsletter endpoint has no distributed rate limit

The endpoint now rejects cross-origin browser requests, bounds input, times out upstream calls, and avoids exposing provider messages. Those controls do not stop a scripted client that spoofs its Origin header.

Accepted launch posture: deploy without a Vercel Firewall rule for now. Monitor MailerLite and Vercel for abnormal subscription traffic, and add a small per-IP rate limit or bot challenge if spam appears.

### SEC-003 — Medium — Redesigned pages execute pinned modules from esm.sh

The pages import pinned React, shader, and tweet packages from `esm.sh`. The CSP limits executable third-party code to that host, but compromise of the provider would still execute code in the site origin. Inline application code also requires `unsafe-inline` in the CSP.

Recommended action: bundle those modules into the application in a later cleanup, then replace `unsafe-inline` with nonces or hashes. This is defense-in-depth rather than a release blocker for a public marketing site.

### SEC-004 — Low in this architecture — Unpatched archive library in Sanity CLI

The registry reports one critical advisory for `decompress@4.2.1`, reached only through `studio > sanity > @sanity/cli`. There is no patched release of that package. It is local/build tooling, is not shipped as a public request handler, and exploitation requires a crafted archive to be processed by the CLI.

Recommended action: do not process untrusted archives with the Sanity CLI. Plan a tested Sanity major-version migration that removes the dependency. The raw production-dependency audit reports 1 critical, 144 high, 84 moderate, and 26 low dependency paths; these counts are dominated by duplicated build/lint tooling paths with attacker-controlled-input preconditions and do not represent that many independently reachable website vulnerabilities.

## Verification evidence

- Node 22.22.1 and Yarn 1.22.19.
- 12/12 automated deployment compatibility and security checks passed.
- `yarn tsc --noEmit` passed.
- Full `yarn build` passed for both Sanity Studio and Next.js 15.5.24.
- SEO checks passed for all 14 sitemap routes, including article descriptions, canonical URLs, Open Graph metadata, and Twitter card metadata.
- Production server returned the redesigned homepage and BuildStation page with the intended CSP and security headers.
- `/global-hackathon` returned a permanent redirect to `/buildstation`.
- Direct `/site/home.html` returned `X-Robots-Tag: noindex, nofollow`.
- Newsletter cross-origin and non-JSON probes returned 403 and 415 respectively.
- A browser load confirmed the homepage application and Luma event iframe render under the CSP.
- Current tracked files contain no detected private key block or common hard-coded production token signature.

## Deployment checklist

1. Revoke the historical River key and remove the production environment variable if it still exists in the hosting configuration.
2. Ensure the untracked `public/site/`, `public/images/new-site/`, and deployment/security test files are included in the release commit.
3. Deploy a preview, smoke-test `/`, `/buildstation`, newsletter submission, `/robots.txt`, and `/sitemap.xml`, then promote the same artifact.
