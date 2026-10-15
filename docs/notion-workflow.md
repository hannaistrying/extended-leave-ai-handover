# Notion draft workflow

## Required capabilities

An approved AI assistant must be able to read your chosen sources and write editable content to the selected Notion destination. This toolkit supplies instructions and content structure; it does not install those connections. Tool availability varies. No API token belongs in this repository or in the handover.

Use a normal parent page for the simplest setup. A database is optional: a title property is sufficient, with review metadata in the body. If a database already has matching status/date fields, the agent can map them after reading the schema. It must not invent properties or alter the schema.

## Page structure and state

Use the IC or manager template. Create a single page per intended handover, with title, period, update date, source coverage, open decisions, and separate employee and manager review fields. Initial state is **Draft — employee review pending**. Use **Employee reviewed** only on explicit employee confirmation and **Manager approved** only on explicit manager confirmation. Approval must not erase remaining operational gaps.

Each important row keeps its evidence and coverage status. Source-supported facts, suggested coverage, owner acceptance, manager delegation and access provisioning are distinct. Never collapse them into one “confirmed” label without saying what was confirmed and by whom.

## Destination and audience

Use the exact page/database provided by the employee. Check its identity. Confirm the intended audience when it is not already established; do not label it private without verifying. If permissions cannot be inspected, the employee must verify the audience before workplace details are written. Do not change sharing or send notifications as part of this workflow.

## Revisions

Return the created page link and reuse it for revisions. Reread its current contents; employee edits take precedence over the agent’s older draft. Update only requested sections. If newer sources contradict an employee edit, surface the discrepancy and ask rather than overwriting it. Never replace an entire reviewed page just to refresh one project.

## Failure behavior

- Missing source: disclose what was unavailable and draft from the remaining evidence.
- No writing capability: produce a complete Notion-ready draft in chat and say no page was created.
- Unknown destination/audience: prepare the chat draft while asking for the missing destination information.
- Partial write or timeout: inspect the existing destination/page before retrying; complete missing blocks without duplicating pages.
- Readback unavailable: return the actual link if available and label the result Saved, not verified.

## Evidence of completion

After a write, read the page back. Check all required sections, proposed-owner labels and open questions. Report the actual link, what was populated and what the employee still needs to answer. Do not describe this as a deployed or tested integration unless it was actually run with the required tools.
