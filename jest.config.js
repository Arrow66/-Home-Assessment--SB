module.exports = {
    transform: {
      '^.+\\.[jt]sx?$': 'babel-jest',
    },
    setupFiles: ["<rootDir>/test_helper.js"],
    transformIgnorePatterns: [
      '/node_modules/',
    ],
    moduleNameMapper:{
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
   },
    "collectCoverage": true,
    "coverageReporters": ["json", "html"]
  };
  