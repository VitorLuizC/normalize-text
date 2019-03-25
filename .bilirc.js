export default {
  input: 'src/index.js',
  output: {
    format: ['es', 'cjs', 'umd', 'umd-min'],
    moduleName: 'normalizeText'
  },
  banner: true,
  babel: {
    minimal: true
  }
};
