module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFiles: ['reflect-metadata'],
  setupFilesAfterEnv: ['@relmify/jest-fp-ts'],
};
