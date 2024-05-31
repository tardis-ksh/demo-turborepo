# Quick Start
```shell
pnpm run dev
```
# Add a Changeset
```shell
pnpm run changeset
# or
changeset add
```

# Publish in Local
1.  you need add `GITHUB_TOKEN` in your environment variables, if you use the `@changesets/changelog-github` 
```shell
pnpm changeset version
```

2. publish to npm or your private registry
```shell
pnpm changeset publish
```

# Publish in CI
in `release.yml` use `changesets/action@v1`, and add `NPM_TOKEN` in your secrets

```yaml
  - name: Create Release Pull Request or Publish to npm
    id: changesets
    uses: changesets/action@v1
    with:
      # This expects you to have a script called release which does a build for your packages and calls changeset publish
      publish: pnpm release
      commit: 'chore: release packages'
      title: 'chore: release packages'
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

# handle pull requests with `changeset-bot`
open https://github.com/apps/changeset-bot and install it to your repo

the bot will comment on PRs saying that either a user might need to add a changeset. 

![](https://user-images.githubusercontent.com/11481355/66183943-dc418680-e6bd-11e9-998d-e43f90a974bd.png)
