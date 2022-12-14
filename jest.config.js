module.exports = {
    "roots": [
      "<rootDir>/test"
    ],
    testMatch: [ '**/*.test.js'],
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    coveragePathIgnorePatterns: [
      "transactionLogger.js"
    ],
    collectCoverage: true,
  }
