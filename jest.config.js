const baseDir = '<rootDir>/src/KYC'
const baseTestDir = '<rootDir>/test/KYC'

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['ts', 'js'],
  collectCoverageFrom: [`${baseDir}/**/*.ts`],
  testMatch: [`${baseTestDir}/**/*.(spec|test).ts`],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
}
