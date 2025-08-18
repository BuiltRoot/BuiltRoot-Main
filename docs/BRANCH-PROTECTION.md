# Branch Protection — BuiltRoot-Main

⚠️ Note: This repo is private on the Free plan. GitHub does not enforce branch protections on private repos at this tier.

## Current intended rules (self-enforced)
- Require PRs before merging (open a PR; do not push directly to `main`)
- Dismiss stale approvals on new commits
- Require conversation resolution before merging
- Block force pushes and deletions (do not use them)
- No required status checks yet (CI not configured)
- No required approvals (solo workflow)

## When ready to enforce
- **Option 1**: Make repo public → branch protections enforced on Free
- **Option 2**: Upgrade org to Team → protections enforced on private repos

## When CI is added
Revisit Settings → Branches → Classic rule `main`:
- Enable “Require status checks to pass”
- Select checks (e.g., build, test)
- Enable “Require branches to be up to date before merging”
- Optionally require approvals when more contributors join
