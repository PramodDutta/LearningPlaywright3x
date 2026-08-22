Update the root README with every intentional change currently in this repository, then verify, commit, and push the code to `main` only.

Follow this workflow every time:

1. Inspect the current branch, `git status`, the complete diff, and recent commits. Preserve all user-authored work and do not discard or overwrite unrelated changes.
2. Use `main` as the only commit and push branch. If currently on another branch, fetch `origin/main`, switch to `main`, fast-forward it from `origin/main`, and safely merge the current branch into `main` without rebasing or rewriting history. If uncommitted changes prevent a safe switch or merge, stop and report the blocker instead of stashing, discarding, or committing on the other branch. Never push a feature branch.
3. Update the root `README.md` so its table of contents, repository tree, concept explanations, examples, and run instructions accurately describe the intentional changes. Do not document generated files, empty tool artifacts, or behavior that is not present in the code.
4. Review the changed files for correctness. Run the most relevant available checks for every changed executable file, plus any repository test or build commands that exist. If a check fails because of the current changes, fix it and rerun the check. Do not commit or push with failing verification.
5. Scan the staged diff for credentials, private keys, tokens, and accidental personal data. Stop and report any suspected secret instead of committing it.
6. Stage only the intentional files by name. Create one clear Conventional Commit on `main` that summarizes the change. Do not amend or rewrite existing commits unless explicitly requested.
7. Push only with `git push origin main`. Never push another branch and never force-push.
8. Report the commit hash, confirm that `main` was pushed, list the changed files, and provide the verification results.

Optional context from the invocation: `${@:-none}`
