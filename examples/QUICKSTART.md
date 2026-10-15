# First run: agent prefills, employee edits

Everything in this example is fictional. You do not need to connect Slack, Gmail or company accounts.

1. Open [sample-notes.md](sample-notes.md), [the IC prompt](../prompts/individual-contributor.md) and [the IC page structure](../templates/individual-contributor.md).
2. In your approved assistant, copy the **entire prompt**, the page structure and all sample notes.
3. Configure these values:
   - Role/team: `Operations Coordinator, Cedar Studio`
   - Timezone: `America/Toronto`
   - Authorized sources: `NONE — supplied fictional notes only`
   - Reporting window: `2027-02-15 to 2027-02-18, plus the listed future commitments`
   - Last working day: `2027-03-05`
   - Expected return: `2027-06-07 (estimated)`
   - Notion destination: paste the exact URL of your own test parent page/database. If you have no writable Notion connection, use `NONE`.
4. Add: **Use only these fictional notes. Do not search workplace sources. If the selected test Notion destination is writable, create one draft page there for me to edit. I have verified that the test destination’s audience is appropriate. Otherwise provide the full draft in chat and clearly say no Notion page was created. Leave missing facts and proposed owners unconfirmed.**
5. The agent should prefill the plan, return the real page link if created, and give a short review queue. It should not require you to fill every field first.
6. Check that Riley is a confirmed invoice owner, Jamie and Taylor remain proposed, access and training are pending, the return date is estimated, and the whole page is still a Draft. “Context only I know” should ask you for missing context, not invent it.
7. Edit the page directly: add this fictional employee detail: **We tried a monthly supplier update, but missed quote changes; keep the weekly cadence.** Confirm this as an employee-provided addition. Do not change Jamie/Taylor to Confirmed without acceptance and manager confirmation.
8. Ask: **Reread the same page and add that context if it is not already there. Preserve all my edits. Do not create another page.**
9. Compare with [the reference draft](notion-draft.md) and [the illustrative review cycle](review-cycle.md). These are authored examples, not records of a live Notion test.

## Without a writable Notion connection

Use `NOTION_DESTINATION: NONE`. The agent should return the same structured draft in chat. You can paste it manually into Notion; this is a fallback, not the default experience. You can also open [the local HTML example](completed-plan.html) or import [completed-plan.json](completed-plan.json) into the [blank HTML template](../templates/leave-transition-plan.html). The HTML file itself has no Notion connection.
