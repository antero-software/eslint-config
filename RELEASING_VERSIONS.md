# Releasing Versions

This project uses two GitHub Actions workflows to automate the release process:

- **Prepare Release PR** updates `package.json`, opens a release pull request, and performs guard checks.
- **Release** tags the repository and publishes a GitHub Release using the merged version from `main`.

Follow the steps below to publish a new version.

## 1. Prepare the release pull request

1. Navigate to the repository on GitHub and open the **Actions** tab.
2. Select **Prepare Release PR** in the left sidebar and click **Run workflow**.
3. Provide the target version in [SemVer](https://semver.org/) format (for example `1.2.3`). Do **not** prefix it with `v`.
4. Trigger the workflow on the default branch.

The workflow will:

- ensure the input is valid SemVer without a leading `v`,
- verify the version is greater than the current `package.json` version,
- confirm that neither a tag nor a branch already exists for the new version,
- bump `package.json` (and `package-lock.json` when present),
- open a pull request from `release/v{version}` titled `chore(release): v{version}`.

Review the pull request, confirm the diff only contains the expected version bump, let the checks finish, and merge the PR into `main`.

## 2. Tag and publish the release

Once the release PR is merged and `main` is up to date:

1. In GitHub, return to **Actions** and choose the **Release** workflow.
2. Click **Run workflow** and supply the same SemVer version that was merged. This **must** match the `package.json` value on `main`.
3. Optionally set **prerelease** to `true` if the release should be marked as a prerelease on GitHub; otherwise keep the default `false`.
4. Run the workflow on the default branch.

The workflow performs the following steps automatically:

- validates the input and ensures the matching version is present in `package.json`,
- creates the annotated Git tag `v{version}` and pushes it to `origin`,
- creates a GitHub Release targeting `main` with automatically generated release notes,
- marks the release as a prerelease when requested.

After the workflow succeeds, confirm the new tag and GitHub Release were created. If you no longer need the `release/v{version}` branch, delete it from GitHub.

## Troubleshooting

- **Input rejected because the version already exists:** pick a higher version; Git tags and release branches must stay unique.
- **Sanity check fails because versions differ:** verify that the release PR was merged and no other commits changed `package.json`. Re-run the prepare workflow if necessary.
- **Workflow errors:** inspect the workflow logs in GitHub Actions, fix any reported issues (for example, permission failures), and re-run the workflow.

Reach out to the repository maintainers if you need additional permissions to trigger workflows or push tags.
