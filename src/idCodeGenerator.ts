enum CountryPrefixes {
  ESTONIA = 'EST',
  LATVIA = 'LVA',
  LITHUANIA = 'LTU',
}

const RAND_DIGIT_LEN = 4
const DELIMITER = '-'

function randomInt(): number {
  return Math.floor(Math.random() * 10)
}

function randomCode(length: number): string {
  return Array(length)
    .fill(0)
    .map((x) => (x += randomInt()))
    .join('')
    .toString()
}

function generatePersonalIdCode(
  countryPrefix: string,
  delimiter: string = DELIMITER,
  digitLen: number = RAND_DIGIT_LEN,
): string {
  return countryPrefix + delimiter + randomCode(digitLen)
}

export function generateEstoniaPersonalIdCode(): string {
  return generatePersonalIdCode(CountryPrefixes.ESTONIA)
}

export function generateLatviaPersonalIdCode(): string {
  return generatePersonalIdCode(CountryPrefixes.LATVIA)
}

export function generateLithuaniaPersonalIdCode(): string {
  return generatePersonalIdCode(CountryPrefixes.LITHUANIA)
}
