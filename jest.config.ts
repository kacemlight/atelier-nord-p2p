import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterFramework: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: { jsx: 'react-jsx' } }],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.module\\.css$': '<rootDir>/src/__mocks__/styleMock.ts',
  },
  testPathPattern: ['<rootDir>/src/**/*.test.(ts|tsx)'],
};

export default config;
