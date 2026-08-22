Update the root README with every intentional change currently in this repository, then verify, commit, and push the code.

Follow this workflow every time:

1. Inspect the current branch, `git status`, the complete diff, and recent commits. Preserve all user-authored work and do not discard or overwrite unrelated changes.
2. Update the root `README.md` so its table of contents, repository tree, concept explanations, examples, and run instructions accurately describe the intentional changes. Do not document generated files, empty tool artifacts, or behavior that is not present in the code.
3. Review the changed files for correctness. Run the most relevant available checks for every changed executable file, plus any repository test or build commands that exist. If a check fails because of the current changes, fix it and rerun the check. Do not commit or push with failing verification.
4. Scan the staged diff for credentials, private keys, tokens, and accidental personal data. Stop and report any suspected secret instead of committing it.
5. Stage only the intentional files by name. Create one clear Conventional Commit message that summarizes the change. Do not amend or rewrite existing commits unless explicitly requested.
6. Push the current branch with a normal push. If it has no upstream, use `git push -u origin <current-branch>`. Never force-push.
7. Report the commit hash, pushed branch, changed files, and verification results.

Optional context from the invocation: `${@:-none}`
