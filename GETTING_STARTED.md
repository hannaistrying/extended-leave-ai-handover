# Getting started

Designed for long leaves such as sabbaticals, parental leave, and medical leave. In startups and fast-paced teams, pay particular attention to unwritten context: decision history, workarounds, informal responsibilities, and relationships that are not captured in a task list. The agent can gather documented facts; the employee supplies and confirms the context only they know.

## 1. Choose the assistant and scope

Use your organization’s approved AI assistant. Identify which work sources it can actually read and whether it can create/edit pages in Notion. If workplace access is unavailable, supply sanitized notes. Do not connect another employee’s account.

## 2. Choose where the draft belongs

Provide the exact parent page or database URL in Notion. Confirm the intended audience with the employee; a parent may share access with a broader group. Grant only the access your organization allows through normal processes. The workflow does not change permissions. See [Notion workflow](docs/notion-workflow.md).

## 3. Configure the role prompt

Choose [IC](prompts/individual-contributor.md) or [manager](prompts/people-manager.md). Copy the entire prompt and its matching Markdown template into your assistant. Replace role/team, timezone, authorized sources (or NONE), reporting window, dates (or UNKNOWN), and exact Notion destination (or NONE).

Tell the assistant: **Review the listed sources and create a draft handover in this Notion destination for me to edit. Leave unknowns and proposed coverage clearly marked.** This authorizes the scoped draft workflow; it does not approve the handover itself.

## 4. Let the agent prefill

The agent retrieves available evidence and creates the page if supported and authorized. It should return the page link and a short list of questions. You should not need to manually copy sections in the normal Notion path. If it cannot write, it must explain that limitation and provide the full draft for manual paste instead.

## 5. Edit the page yourself

Correct facts, add undocumented history, confirm which suggested delegates you want to discuss, and update contact boundaries. Ask the agent for a targeted revision if useful. It must reread the page and preserve your edits. Mark employee review complete only when you have actually reviewed it.

## 6. Confirm coverage with your manager

Owner acceptance, authority, access readiness and employee review are separate facts. Keep them visible. Use [the quality checklist](docs/quality-checklist.md); a draft page is not manager approval.

## Optional offline HTML

Open [the template](templates/leave-transition-plan.html) locally if Notion is unavailable or an offline format is preferred. This path requires transferring the reviewed text manually. Add rows as needed. Save a browser draft explicitly or export JSON; saving is not automatic. Import JSON to reopen it, or restore a browser draft after reopening the same file/browser profile. Browser storage is not encrypted by this template. Delete saved drafts on shared devices.

Older positional JSON drafts cannot be safely restored and are rejected. Keep old exports and transfer their answers manually. Version 2 exports preserve table rows. Print/Save as PDF creates a reading copy; retain JSON for editing. Review print preview before sharing.
