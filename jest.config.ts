import type { Config } from 'jest';

const config: Config = {
    rootDir: "./",
    testMatch: [
        "<rootDir>/tests/**/*.spec.ts",
    ], // Match avec les fichiers de test dans le répertoire tests
    verbose: true, // Affichage détaillé des tests
    preset: "ts-jest",
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
        "./src/**/*.ts",
        "!./src/network/com/**/*.ts" // Exclusion des fichiers du protocol Dofus
    ]
};

export default config;