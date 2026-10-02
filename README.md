# Trokky templates — build output

Each directory in this repository is a deploy-button target for
[trokky.build](https://trokky.build): a complete generated Trokky project at
its own path, so one repository serves every template with one deploy key.

The button on trokky.build points at `https://github.com/Trokky/templates/tree/main/<path>`,
and Cloudflare's deploy button treats that subdirectory as the project root.

## This repository is generated

[Trokky/generator](https://github.com/Trokky/generator)'s
`.github/workflows/templates.yml` runs after every green CI on that
repository's main branch (and on manual dispatch): it regenerates each
directory named by a `templates[]` entry in `manifest.json`, replaces that
directory in full, and pushes here with a deploy key — but only when the
result differs from what is already here. Directories no longer listed in
`manifest.json` are not touched again; they stay where they are.

A manual change under a template directory lasts until the next run replaces
that directory (a lockfile-only flip is the exception — it neither pushes nor
overwrites). The sync never touches this README or anything else at the
repository root; every command it runs is scoped to the directories it
regenerates.

To add or change a template, edit `manifest.json` there. Its `templates[]`
entries set the exact composition each directory is generated from, and the
same manifest drives trokky.build's buttons — through the published
create-trokky package the site bundles.

## One repository, one deploy key

GitHub refuses the same deploy key on two repositories, so a template per
repository would have meant one key per template. One repository, one
subdirectory per template, one key.
