/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig.json')

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
  testEnvironment: 'node',
  coverageReporters: ['json-summary', 'text', 'lcov'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/'
  })
}
