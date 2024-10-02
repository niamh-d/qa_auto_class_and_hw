import {
  generateLatviaPersonalIdCode,
  generateEstoniaPersonalIdCode,
  generateLithuaniaPersonalIdCode,
} from '../src/idCodeGenerator'

describe('generateEstoniaPersonalIdCode', () => {
  let sut

  test('personal code starts with "EST-"', () => {
    const countryPrefix = 'EST-'
    sut = generateEstoniaPersonalIdCode()

    expect(sut.startsWith(countryPrefix)).toBe(true)
  })

  test('personal code is of length 8', () => {
    sut = generateEstoniaPersonalIdCode()

    expect(sut.length).toBe(8)
  })

  test('personal code is of pattern country prefix + hyphen + 4-digit code', () => {
    sut = generateEstoniaPersonalIdCode()

    expect(/EST-\d{4}/.test(sut)).toBe(true)
  })
})

describe('generateLatviaPersonalIdCode', () => {
  let sut

  test('personal code starts with "LVA-"', () => {
    const countryPrefix = 'LVA-'
    sut = generateLatviaPersonalIdCode()

    expect(sut.startsWith(countryPrefix)).toBe(true)
  })

  test('personal code is of length 8', () => {
    sut = generateLatviaPersonalIdCode()

    expect(sut.length).toBe(8)
  })

  test('personal code is of pattern country prefix + hyphen + 4-digit code', () => {
    sut = generateLatviaPersonalIdCode()

    expect(/LVA-\d{4}/.test(sut)).toBe(true)
  })
})

describe('generateLithuaniaPersonalIdCode', () => {
  let sut

  test('personal code starts with "LTU-"', () => {
    const countryPrefix = 'LTU-'
    sut = generateLithuaniaPersonalIdCode()

    expect(sut.startsWith(countryPrefix)).toBe(true)
  })

  test('personal code is of length 8', () => {
    sut = generateLithuaniaPersonalIdCode()

    expect(sut.length).toBe(8)
  })

  test('personal code is of pattern country prefix + hyphen + 4-digit code', () => {
    sut = generateLithuaniaPersonalIdCode()

    expect(/LTU-\d{4}/.test(sut)).toBe(true)
  })
})
