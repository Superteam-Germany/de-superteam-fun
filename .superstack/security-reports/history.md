# Security review history

## 2026-09-11

- Full pre-deployment application review.
- Removed public-runtime critical Next.js exposure by upgrading to 15.5.24.
- Added production security headers, an image-host allowlist, and public API safeguards.
- Confirmed one historical River key requires rotation and one unpatched Sanity CLI archive dependency is build-only in the reviewed architecture.
- Validation: 33 tests, TypeScript, full production build, HTTP header probes, and browser smoke test passed.
