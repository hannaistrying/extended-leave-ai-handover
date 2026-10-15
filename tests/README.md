# Browser regression checks

Requires Node.js and Playwright. From the repository root:

```sh
npm install --no-save --package-lock=false playwright
npx playwright install chromium
node tests/test-template.cjs
```

Uses a local file with synthetic test values. No AI or workplace accounts are called. Checks cover added-row persistence after reload, field alignment, checkbox restoration, export/import, invalid and legacy import rejection, deletion of saved drafts, and external network requests. This does not evaluate AI-generated handover accuracy.
