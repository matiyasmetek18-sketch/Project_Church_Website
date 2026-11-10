# Team workflow

## Chief of Staff

Break the work into tasks. Each task has acceptance criteria.

## Programmer

Implement on a feature branch. Do not implement directly on `main`.

## Reviewer

Give meaningful changes an independent review.

## Tester

Run deterministic checks: `npm run build`, `npm run check`, and a smoke check of the changed behavior.

## Repair limit

An issue gets at most two repair attempts. If it still fails, escalate.

## Pull request

Open a draft pull request and include the evidence from those checks.

## Merges and deploys

Matiyas approves all merges and deploys.

## Agent skills

How future agents access `.agents/skills` is still undecided.
