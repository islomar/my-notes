# Automate you workflow with GitHub Actions
* https://pro.codely.tv/library/automatizacion-con-github-actions/113898/path/
* ETA: 2h 30 min
* Bookmark:
https://pro.codely.tv/library/automatizacion-con-github-actions/113898/path/step/71109895/


## Our first GitHub Action
* https://github.com/CodelyTV/pr-size-labeler
* `action.yml`: required by GitHub
    * name, description, input parameters
    * The `GITHUB_TOKEN` is automagical from GitHub, not a user token.
    * what to run: either Docker or NodeJS.
* `Dockerfile`
    * just an alpine
    * it uses entrypoint
* `entrypoint.sh`
    * The variables `GITHUB_EVENT_PATH` and `GITHUB_REPOSITORY` arrives within the environment, automatically, "injected" by GitHub.

## How to test locally the GitHub Action
* We need to create a release in GitHub.
    * You need a tag, but you can create it at the same time that you create the release.
    * Fill the version, e.g. `v1.0.0`
    * You might check the publication in the Marketplace.
* In order to publish a GH Action in the Marketplace, we need to create a README.md (how to use it, how to contribute, etc.)
* In order to test it: we need to create a new workflow:
    * you can use it even if it is not published in the Marketplace
    * Folder .github/workflows
    * e.g. [ labeler.yml](https://github.com/CodelyTV/php-ddd-example/blob/master/.github/workflows/labeler.yml)


## How to publish an Action in GH Marketplace
* You can edit the release created and check the "Publish this release to the GitHub Marktplace"
* You can include an icon.


## Parameterize the GH Action
* You can include inputs in the action.yml, with default values. You must change the `entrypoint.sh` too:
    * https://github.com/CodelyTV/pr-size-labeler/blob/v1.2.0/entrypoint.sh
* Then, in the user, you can change the `labeler.yml` in order to pass the parameters as you wish.


## Validate PR descriptions
* Avoid PRs without descriptions or without tests.
* https://github.com/FabianKoestring/body-regex-validator-action
    * GH Action: it matches the PR with a regex
    * Unfortunately it closes the PR if it fails.
    * It does not have an `action.yml`
    * It uses env instead of args


## Require PR reviews to people depending on the folder (monorepo)
* https://github.com/CodelyTV/request-review-by-path
* Created from the template offered by GitHub: https://github.com/actions/typescript-action
* Example of an action written in Typescript instead of Bash.
* We commit the transpiled JS because it is faster.
* Goal: assign the PR to different reviewers (people or teams) depending on the folder modified.
* The regular GH token can not be used to assign the PR to a team:
    * It requires to create a personal token.
    * Best practice: create a "bot" user, which is used for that.


## Notify when a PR/issue is open for too long
* It closes the PR if it open for too long.
* https://github.com/actions/stale
* https://github.com/marketplace/actions/close-stale-issues
* It can also assign labels if they are getting old, or there is an exception, etc.
* The trigger of the action is a cron.
    * https://crontab.guru


## Refactor GitHub Action
* Aiming to improve the DX
    * e.g. adding a comment in the PR about the reason to cancel the PR
* Refactoring the `pr-size-labeler`.
    * From https://github.com/CodelyTV/pr-size-labeler/tree/v1.0.0
    * To https://github.com/CodelyTV/pr-size-labeler/
* Using semantic bash
    * You can add namespaces `fileName:functionName`
* E.g. extracting the single bash file to several ones


## Notify if a critical file is being modified
* https://github.com/CodelyTV/check-critical-files


## Notify if a secret gets committed
* https://github.com/marketplace/actions/secret-scan
    * It uses an "old" version of GH Actions.
* https://github.com/marketplace/actions/trufflehog-check
    * More up to date.
* https://github.com/marketplace/actions/secret-detector
* Recommendation:
    * One run per PR
    * With cron, review all commits in master.


## Comment a PR if there is a non green commit
* [comment_on_failing_build.yml](https://github.com/CodelyTV/pr-size-labeler/commit/8cb2932588c45b53ecd3435d63f96d3474ba3010)
* It runs after finishing the commit run.
    * If it contains the word `failure`, the output code will be an error.
* Unfortunately, this can not be used in a safe way, since the /checks-run endpoint is in Beta.


## Trunk-based development
* https://github.com/CodelyTV/no-pull-requests
    * Disable the PRs: it gets closed automatically.
    * Triggered when a PR is opened or reopened.
* https://github.com/CodelyTV/no-branches
    * Close any branch.


## Publish a tweet for every release
* https://help.github.com/en/actions/reference/events-that-trigger-workflows
* https://github.com/marketplace/actions/send-tweet-action


## Popular actions
* https://github.com/sdras/awesome-actions
* Manually trigger your GH Actions: https://www.actionspanel.app/


## Tools
* [Pull Request size by GitHub](https://github.com/marketplace/pull-request-size)
    * It is a GitHub App, not an Action
    * Each Pull Request created will be marked with a label in GitHub based on the lines of code changed.
* [Pull Request size labeler by CodelyTV](https://github.com/CodelyTV/pr-size-labeler)
    * It is a GitHub Action, it can be versioned and program reactions.
    * It gives flexibility to define different sizes.
    * E.g.: fail the PR if the size is XL.
    * Example: https://github.com/CodelyTV/php-ddd-example/blob/master/.github/workflows/labeler.yml
* [Validate PRs](https://github.com/FabianKoestring/body-regex-validator-action)
* https://github.com/CodelyTV/request-review-by-path
* https://github.com/actions/typescript-action
* https://github.com/CodelyTV/check-critical-files
* https://github.com/marketplace/actions/trufflehog-check
* https://github.com/marketplace/actions/secret-detector
* https://github.com/CodelyTV/no-pull-requests
* https://github.com/CodelyTV/no-branches
* https://github.com/sdras/awesome-actions


## Talks and posts
* [Docker as simple as an action!](https://www.youtube.com/watch?v=nMoaIyUlzIs&feature=youtu.be)