# Course of Dependabot: Keep your repo up to date, securely and automatically

- <https://codely.com/en/courses/dependabot-keep-your-repo-up-to-date-securely-and-automatically-d3p3>
- [GitHub repo with the code for the course](https://github.com/CodelyTV/dependabot-course)
- ETA: ~1.5 hours

In this course:

- 👌 You will set up Dependabot from scratch for any ecosystem (npm, Python, Java, Docker, GitHub Actions…).
- 🤖 So that it doesn't spam PRs: grouping, ignoring, and versioning strategies.
- 🔥 You will protect your project against supply chain attacks with cooldowns and secure dependency installation.

With all this, you will have a repository always updated without dedicating manual time and with the peace of mind of having mitigated the risks of a Supply Chain Attack.

## Introduction: example of Axios Supply Chain Attack

- <https://unit42.paloaltonetworks.com/axios-supply-chain-attack/>
- <https://www.elastic.co/security-labs/how-we-caught-the-axios-supply-chain-attack>
- How we can defend ourselves
  - Update deps **only** on CI
  - **Cooldown**: we install dependencies after several days have elapsed since its publication (e.g. 7 days)
  - **Provenance**: ensure that the library contains the same code than GitHub
- **Versioning**
  - <https://semver.org/>
    - ⚠️ Watch out!: if it's a `0.x.y` version, it is established that a minor change might break the contracts...
  - <https://docs.npmjs.com/about-semantic-versioning>
  - [npm SemVer Calculator](https://semver.npmjs.com/)
  - [npm version cheatsheet](https://gist.github.com/jonlabelle/706b28d50ba75bf81d40782aa3c84b3e): don't trust it blindly
  - caret (aka hat) symbol, `^`: Include everything that does not increment the first non-zero portion of semver
    - i.e. it can udpdate both minor and patch versions
  - tilde symbol, `~`: Include everything greater than a particular version in the same minor range
    - i.e. only updates patch versions
  - `x`: includes any minor or patch version depending on where it is used, e.g. `1.x` would include `1.0.0`, `1.2.1`, `1.0.1`, etc.
    - Also possible to have `1.2.x`
    - Use `CODEOWNERS` file instead.

## Dependabot: the maintenance cost in your repo

- [How to start configuring Dependabot](https://github.com/CodelyTV/dependabot-course/tree/main/02-dependabot/1-deps)
- `dependabot.yml`:
  - [Include JSON schema as first line](# yaml-language-server: $schema=<https://json.schemastore.org/dependabot-2.0.json>) in the YAML file
  - [`versioning-strategy`](https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference#versioning-strategy--). Recommendations from GitHub:
    - `widen` when it's a library (to support the maximum possible number of versions)
    - `increase` when it's an application
- To avoid having tones of PRs and that stopping people from reviewing them:
  - `open-pull-requests-limit` (e.g. with 5)
- You can configure it to have them only once per week, e.g. with

  ```yaml
    schedule:
      interval: "weekly"
      day: "monday"
      time: "06:00"
      timezone: "Europe/Madrid"
  ```

  - `reviewers`: deprecated
    - [Dependabot reviewers configuration option being replaced by code owners](https://github.blog/changelog/2025-04-29-dependabot-reviewers-configuration-option-being-replaced-by-code-owners/)
- 💡 **Good practice**: when manually reviewing the update you detect something breaking, introduce an automated test.
- For enhanced stability and security in GitHub Actions, it's especially important to use the SHA version instead of the tags
  - <https://docs.github.com/en/actions/reference/security/secure-use#using-third-party-actions>
    - "Pin actions to a full-length commit SHA"
    - "Pinning an action to a full-length commit SHA is currently the only way to use an action as an immutable release. Pinning to a particular SHA helps mitigate the risk of a bad actor adding a backdoor to the action's repository, as they would need to generate a SHA-1 collision for a valid Git object payload."
  - <https://medium.com/@vv-devops/safeguard-your-workflow-the-power-of-referencing-specific-versions-in-github-actions-e083a03fef11>
  - E.g. `uses: actions/checkout@de0fac2e4500dabe0009e67214ff5f5447ce83dd # v6.0.2`
  - [Code example](https://github.com/CodelyTV/dependabot-course/blob/main/02-dependabot/2-docker_github_actions/.github/workflows/ci-sha.yml)

## Advanced configuration of Dependabot

### Avoid PR spam and cut CI costs: grouping

- <https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference#groups-->
- <https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/optimizing-pr-creation-version-updates>
- [Code example](https://github.com/CodelyTV/dependabot-course/blob/main/03-advanced_config/1-groups/.github/dependabot.yml#L16)
- Group names can be anything you want.
- This could be great for splitting the development ones from production.

### Ignore optional dependency updates

- <https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference#ignore-->
- [Code example](https://github.com/CodelyTV/dependabot-course/blob/main/03-advanced_config/2-ignore/.github/dependabot.yml#L42)
- 💡 Good practice: include a comment explaining why it is ignored
- Example

``` yaml
    ignore:
      # Avoid upgrading node types until we really upgrade Node
      - dependency-name: "@types/node"
        update-types: ["version-update:semver-major"]
```

- [Dependabot pull request comment commands](https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-pull-request-comment-commands), for example:

  - `@dependabot rebase`
  - `@dependabot recreate`
  - `@dependabot merge`

## Protect yourself from Supply Chain Attacks

###  Prevent supply chain attacks: Cooldown

- [Code example](https://github.com/CodelyTV/dependabot-course/blob/main/04-protect_supply_chain_attack/1-cooldown/.github/dependabot.yml#L46)
- <https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference#cooldown->
- How to enforce the cooldown locally:
  - For `npm`, create a file `.npmrc` , e.g. containing `min-release-age=7d`
  - For `yarn`, create a file `.yarnrc.yml`, e.g. containing `npmNinimalAgeGate: 1440` (minutes)

###  How to securely install dependencies in CI

- ⚠️ Achtung!: `npm install` does NOT install from the lock file, but from the `package.json` and then it updates the lock file 😱
- [Code examples in different languages](https://github.com/CodelyTV/dependabot-course/tree/main/04-protect_supply_chain_attack/2-install_deps)
  - 💡 E.g. for JS/TS: `npm ci` (`ci`= clean install) or `yarn install --immutable` will use the lock file

### The standard the industry needs: Provenance

- It ensures that the source code we see in GitHub is the same installed in our systems, e.g. with `npm`
- Example with library from Codely (scroll to the bottom of the page): <https://www.npmjs.com/package/@codelytv/primitives-type>
  - You can also verify with the green check on each version [here](https://www.npmjs.com/package/@codelytv/primitives-type?activeTab=versions)
- If the provenance has been broken, it is shown by dependabot under `Attestation changes`
- PRs to take into account the provenance locally in npm and yarn ([in pnpm already exists](https://pnpm.io/settings#trustpolicy)):
  - <https://github.com/npm/cli/issues/9242>
  - <https://github.com/yarnpkg/berry/issues/7101>
- 💡 [GitHub action for provenance](https://github.com/danielroe/provenance-action)
  - Fail CI when dependencies in your lockfile lose npm provenance or trusted publisher status.

##  Interesting links

- [Dependabot options reference](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-dependabotyml)
- [Automating Dependabot with GitHub Actions: enable auto-merge on a PR](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/automating-dependabot-with-github-actions#enable-auto-merge-on-a-pull-request)
  - [Automatically approving a pull request](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/automating-dependabot-with-github-actions#automatically-approving-a-pull-request)
- [How We're Protecting Our Newsroom from npm Supply Chain Attacks](https://pnpm.io/blog/2025/12/05/newsroom-npm-supply-chain-security)(12 min. read)
