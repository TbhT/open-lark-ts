/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  coverageDirectory: path.resolve('coverage'),
  collectCoverage: true,
  rootDir: path.resolve('.'),
  //   ?@link https://github.com/axios/axios/issues/1418
  testEnvironment: 'node'
}
