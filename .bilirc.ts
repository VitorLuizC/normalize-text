import { Config } from 'bili';

const config: Config = {
  banner: true,
  input: 'src/index.ts',
  output: {
    format: ['esm', 'cjs', 'umd', 'umd-min'],
    moduleName: 'normalizeText',
    sourceMap: true,
  },
  babel: {
    minimal: true,
  },
  plugins: {
    typescript2: {
      clean: true,
      tsconfig: 'tsconfig.build.json',
      useTsconfigDeclarationDir: true,
    },
  },
};

export default config;
