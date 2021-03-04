
module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  "coverageThreshold": {
    "global": {
    "branches": 0,
    "functions": 0,
    "lines": 0,
    "statements": 0
    }
  },
};