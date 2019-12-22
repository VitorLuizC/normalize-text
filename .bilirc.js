export default {
  input: "src/index.ts",
  output: {
    format: ["es", "cjs", "umd", "umd-min"],
    moduleName: "normalizeText"
  },
  banner: true,
  babel: {
    minimal: true
  }
};
