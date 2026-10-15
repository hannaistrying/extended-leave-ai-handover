# Illustrative employee review cycle

This is a fictional walkthrough, not a transcript of a live integration test.

1. **Agent draft:** all supported sections are populated; Jamie and Taylor remain Proposed; Context only I know requests employee input. Status: Draft — employee review pending.
2. **Employee edit:** Morgan adds, “We tried a monthly supplier update, but missed quote changes; keep the weekly cadence.” The page records this as employee-provided context, not a retrieved fact.
3. **Agent revision:** rereads that same page, preserves Morgan’s wording, and updates only the requested context section if necessary. It leaves all unconfirmed coverage unchanged and does not create another page.
4. **Employee review:** Morgan explicitly confirms the review. Status can become Employee reviewed; manager review remains Pending.
5. **Manager review:** Alex still needs to resolve approval limits, meeting coverage and proposed owners. No Manager approved status is added until Alex explicitly approves. Riley’s access remains Pending until provisioning is actually confirmed.

The employee’s edits and the manager’s decisions form the final plan. An agent-created page alone is not a completed handover.
