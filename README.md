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
1. first of all, you need add `GITHUB_TOKEN` in your environment variables, if you use the `@changesets/changelog-github` 
```shell
pnpm changeset version
```

2. publish
```shell
pnpm changeset publish
```

# Publish in CI
