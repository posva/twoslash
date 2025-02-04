import { describe, expect, it } from 'vitest'
import { twoslasher } from '../src/index'

describe('supports hiding the example code', () => {
  const file = `
const a = "123"
// ---cut---
const b = "345"
`
  const result = twoslasher(file, 'ts')

  it('hides the right code', () => {
    // Has the right code shipped
    expect(result.code).not.toContain('const a')
    expect(result.code).toContain('const b')
  })

  it('shows the right LSP results', () => {
    expect(result.hovers.find(info => info.text.includes('const a'))).toBeUndefined()

    const bLSPResult = result.hovers.find(info => info.text.includes('const b'))
    expect(bLSPResult).toBeTruthy()

    // b is one char long
    expect(bLSPResult!.length).toEqual(1)
    // Should be at char 6
    expect(bLSPResult!.start).toEqual(6)
  })
})

describe('supports hiding the example code with multi-files', () => {
  const file = `
// @filename: main-file.ts
const a = "123"
// @filename: file-with-export.ts
// ---cut---
const b = "345"
`
  const result = twoslasher(file, 'ts')

  it('shows the right LSP results', () => {
    expect(result.hovers.find(info => info.text.includes('const a'))).toBeUndefined()

    const bLSPResult = result.hovers.find(info => info.text.includes('const b'))
    expect(bLSPResult).toBeTruthy()

    // b is one char long
    expect(bLSPResult!.length).toEqual(1)
    // Should be at char 6
    expect(bLSPResult!.start).toEqual(6)
  })
})

describe('supports handling queries in cut code', () => {
  const file = `
const a = "123"
// ---cut---
const b = "345"
//    ^?
`
  const result = twoslasher(file, 'ts')

  it('shows the right query results', () => {
    const bLSPResult = result.queries.find(info => info.line === 0)
    expect(bLSPResult).toBeTruthy()
    expect(bLSPResult!.text).toContain('const b:')
  })
})

describe('supports handling a query in cut multi-file code', () => {
  const file = `
// @filename: index.ts
const a = "123"
// @filename: main-file-queries.ts
const b = "345"
// ---cut---
const c = "678"
//    ^?
`
  const result = twoslasher(file, 'ts')

  it('shows the right query results', () => {
    const bQueryResult = result.queries.find(info => info.line === 0)
    expect(bQueryResult).toBeTruthy()
    expect(bQueryResult!.text).toContain('const c')
  })
})

describe('supports hiding after a line', () => {
  const file = `
const a = "123"
// ---cut-after---
const b = "345"
`
  const result = twoslasher(file, 'ts')

  it('hides the right code', () => {
    // Has the right code shipped
    expect(result.code).toContain('const a')
    expect(result.code).not.toContain('const b')
  })

  it('shows the right LSP results', () => {
    expect(result.hovers.find(info => info.text.includes('const b'))).toBeUndefined()

    const bLSPResult = result.hovers.find(info => info.text.includes('const a'))
    expect(bLSPResult).toBeTruthy()

    // b is one char long
    expect(bLSPResult!.length).toEqual(1)
    // Should be at char 7
    expect(bLSPResult!.start).toEqual(7)
  })
})
