import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testMatch: ['<rootDir>/test/**/*.test.ts'],
};

export default config;
