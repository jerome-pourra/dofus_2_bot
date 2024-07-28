import type { Config } from 'jest';

const config: Config = {
    rootDir: "./",
    testMatch: [
        "**/*.spec.js",
    ],
    verbose: true, // Affichage détaillé des tests
    testEnvironment: "node",
    passWithNoTests: false, // Echec si aucun test n'est trouvé
    collectCoverage: false, // Activation de la couverture de code
    coverageDirectory: "./coverage",
    coverageReporters: [
        "json",
        "lcov",
        "text",
        "clover"
    ],
    collectCoverageFrom: [
        "./dist/**/*.js"
    ],
    testPathIgnorePatterns: [
        "./node_modules/",
        "./src/network/com/"
    ]
};

export default config;