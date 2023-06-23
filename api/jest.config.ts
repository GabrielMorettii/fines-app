import { pathsToModuleNameMapper } from "ts-jest";

export default {
  // testTimeout: 20000,
  // setupFilesAfterEnv: ["<rootDir>/src/__tests__/setupAfterEnv.ts"],

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    "<rootDir>/src/modules/**/controllers/*.ts",
    "<rootDir>/src/modules/**/useCases/*.ts",
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: "src/__tests__/coverage",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "babel",

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ["text-summary", "lcov"],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: pathsToModuleNameMapper(
    {
      "@modules/*": ["modules/*"],
      "@shared/*": ["shared/*"],
      "@tests/*": ["__tests__/*"],
    },
    {
      prefix: "<rootDir>/src/",
    }
  ),

  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  // modulePathIgnorePatterns: ["providers", "database"],

  // A preset that is used as a base for Jest's configuration
  preset: "ts-jest",

  // The test environment that will be used for testing
  testEnvironment: "node",

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/*.spec.ts"],
};
