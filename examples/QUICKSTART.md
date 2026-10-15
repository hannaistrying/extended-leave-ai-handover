# First run: agent prefills, employee edits

Everything in this example is fictional. You do not need to connect Slack, Gmail, Notion or company accounts.

## Fastest first run — one copy, no setup

1. Open [Copy this entire fictional demo into your assistant](COPY_PASTE_DEMO.md).
2. On GitHub, choose **Raw**, then copy the entire file into a new chat with your AI assistant and send it. The prompt, configuration, IC page structure and notes are already combined. No edits are needed.
3. The agent should return a complete **Synthetic Demo** handover draft in chat and a short review queue. It should clearly say no Notion page was created.
4. Check that Riley is a confirmed invoice owner, Jamie and Taylor remain proposed, access and training are pending, the return date is estimated, and the whole page is still a Draft. “Context only I know” should ask you for missing context, not invent it.
5. Compare with [the reference draft](notion-draft.md) and [the illustrative review cycle](review-cycle.md). These are authored examples, not records of a live Notion test.

## Optional: try the draft in Notion

The one-copy demo deliberately uses chat output so anyone can try it without accounts. The full workflow supports agent prefill in Notion, followed by employee edits.

1. After the chat demo, provide the exact URL of your own test parent page or database. Confirm its audience is appropriate for fictional data, and explicitly ask the assistant to create one editable draft there using the generated handover. Keep source access limited to the supplied notes. This separate request authorizes the Notion write; the initial demo does not.
2. If writing is supported, the agent should create the page, read it back and return its actual link. If unavailable, it should explain the limitation; you can paste the draft manually.
3. Edit the page directly: add this fictional employee detail: **We tried a monthly supplier update, but missed quote changes; keep the weekly cadence.** Confirm this as an employee-provided addition. Do not change Jamie/Taylor to Confirmed without acceptance and manager confirmation.
4. Share the same page link and ask: **Reread this page and add that context if it is not already there. Preserve all my edits. Do not create another page.**

## Customize after your first run

The separate [IC prompt](../prompts/individual-contributor.md), [IC page structure](../templates/individual-contributor.md) and [sample notes](sample-notes.md) remain available for customization. For your own handover, follow [Getting Started](../GETTING_STARTED.md). The combined demo bundles these source files with fictional configuration; keep it in sync when those sources change.

You can also open [the local HTML example](completed-plan.html) or import [completed-plan.json](completed-plan.json) into the [blank HTML template](../templates/leave-transition-plan.html). The HTML file itself has no Notion connection.
