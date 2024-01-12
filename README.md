# TwoSlash<sup>es</sup>

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

A fork and rewrite of [@typescript/twoslash](https://github.com/microsoft/TypeScript-Website/tree/v2/packages/ts-twoslasher), with improvements:

> [!NOTE]
> Working in progress, breaking changes are expected.

- Unified tokens information interface, easier to work with
- `createTwoslasher` function to create a twoslash instance with cached language servers (6~20x faster)
- ESM-first, dual CJS/ESM builds
- `keepNotations` flag for better support of custom languages (see `twoslash-vue` integration)
- Lighter, no longer deps on `lz-string` and `debug`

## Breaking Changes

Breaking changes from `@typescript/twoslash`:

1. The returned information items have different signatures, and different types of the items (`staticQuickInfo`, `queries`, `errors`, `tags`) are now unified into a single array `tokens` with a `type` property to differentiate (TODO: explain more)
2. Main entry point `import "twoslashes"` bundles `typescript`, while a new sub-entry `import "twoslashes/core"` is dependency-free and requires providing your own typescript instance.
3. `showEmit` option is not supported yet.
4. `defaultOptions` is renamed to `handbookOptions`
5. `defaultCompilerOptions` is renamed to `compilerOptions`

## Features

### Information Tokens

// TODO:

### `createTwoslasher`

// TODO:

### Backward Compatibility Layer

// TODO:

## TODOs

- [ ] Support `showEmit` option
- [ ] Support `noStaticSemanticInfo` option
- [x] Test coverage
- [x] Compat-layer maybe?

## Benchmark

<details>
<summary> Benchmark generated at 2024-01-11</summary>

```
  twoslashes - bench/compare.bench.ts > compiler_errors.ts
    18.28x faster than @typescript/twoslash

  twoslashes - bench/compare.bench.ts > compiler_flags.ts
    20.41x faster than @typescript/twoslash

  twoslashes - bench/compare.bench.ts > completions.ts
    11.08x faster than @typescript/twoslash

  twoslashes - bench/compare.bench.ts > cuts_out_unnecessary_code.ts
    9.72x faster than @typescript/twoslash

  twoslashes - bench/compare.bench.ts > errorsWithGenerics.ts
    11.08x faster than @typescript/twoslash

  twoslashes - bench/compare.bench.ts > highlighting.ts
    10.90x faster than @typescript/twoslash

  twoslashes - bench/compare.bench.ts > import_files.ts
    6.62x faster than @typescript/twoslash

  twoslashes - bench/compare.bench.ts > importsModules.ts
    6.06x faster than @typescript/twoslash

  twoslashes - bench/compare.bench.ts > multiFileErrors.ts
    4.35x faster than @typescript/twoslash

  twoslashes - bench/compare.bench.ts > query.ts
    13.15x faster than @typescript/twoslash

  twoslashes - bench/compare.bench.ts > arbitraryCommands.ts
    10.98x faster than @typescript/twoslash

  twoslashes - bench/compare.bench.ts > crossExports.ts
    6.16x faster than @typescript/twoslash

  twoslashes - bench/compare.bench.ts > cut_file_errors.ts
    10.34x faster than @typescript/twoslash

  twoslashes - bench/compare.bench.ts > cut_files.ts
    13.73x faster than @typescript/twoslash

  twoslashes - bench/compare.bench.ts > handlesJSON.ts
    4.16x faster than @typescript/twoslash

  twoslashes - bench/compare.bench.ts > inlineHighlights.ts
    13.28x faster than @typescript/twoslash

  twoslashes - bench/compare.bench.ts > large-cut.ts
    10.23x faster than @typescript/twoslash

  twoslashes - bench/compare.bench.ts > lib.ts
    12.57x faster than @typescript/twoslash

  twoslashes - bench/compare.bench.ts > multiLookups.ts
    11.82x faster than @typescript/twoslash

  twoslashes - bench/compare.bench.ts > queriesWithSpaceBefore.ts
    12.51x faster than @typescript/twoslash

  twoslashes - bench/compare.bench.ts > queryHandlesNoToken.ts
    10.36x faster than @typescript/twoslash

  twoslashes - bench/compare.bench.ts > twoliner.ts
    6.58x faster than @typescript/twoslash
```

</details>

## License

MIT License © Microsoft Corporation
MIT License © 2023-PRESENT [Anthony Fu](https://github.com/antfu)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/twoslashes?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/twoslashes
[npm-downloads-src]: https://img.shields.io/npm/dm/twoslashes?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/twoslashes
[bundle-src]: https://img.shields.io/bundlephobia/minzip/twoslashes?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=twoslashes
[license-src]: https://img.shields.io/github/license/antfu/twoslashes.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/antfu/twoslashes/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/twoslashes
