# Codex working rules for this repository

This repository is deployed from GitHub to Vercel.

Codex must follow this workflow for every task:

1. Inspect the repository structure before making changes.
2. Make the requested code changes in the correct files.
3. Check the changed files before finishing.
4. Commit the changes with a clear commit message.
5. Push the branch to GitHub.
6. Open a pull request against main.

A task is not complete unless the final response includes:

1. Changed file list
2. Commit hash
3. Branch name
4. GitHub pull request link
5. Checks run
6. Any remaining issues

Codex must not report success if changes only exist locally.

If GitHub push is unavailable, Codex must stop and say exactly why, for example:

1. No git remote configured
2. GitHub authentication unavailable
3. Repository permission missing
4. Branch protection prevents push
5. Pull request creation failed

For SEO tasks, always check:

1. sitemap.xml
2. robots.txt
3. canonical tags
4. internal links
5. redirect rules in vercel.json
6. old legacy URLs that may still be in Google Search Console

For site changes, Codex should also check:

1. Navigation links
2. Product page links
3. Category page links
4. Image paths
5. CSS paths
6. Mobile layout issues
7. Any duplicated or broken code

Codex must finish by proving that the work reached GitHub.

The final answer must include the GitHub pull request link. If there is no pull request link, the task is not complete.
