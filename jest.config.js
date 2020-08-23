module.exports = {
  globalSetup: '<rootDir>/jest.setup.js', // this line is the only change here
  moduleFileExtensions: ['js', 'vue', 'json'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
  ],
  forceExit: !!process.env.CI, // almost every CI platform sets this by default
}
