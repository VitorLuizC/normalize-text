// @ts-check

import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';

/**
 * Options of Rollup.js.
 * @type {Array.<import('rollup').RollupOptions>}
 */
const options = [
  {
    input: './src/index.js',
    external: ['@bitty/pipe'],
    output: [
      getOutputOption({
        format: 'commonjs',
        file: './dist/index.js',
      }),
      getOutputOption({
        format: 'esm',
        file: './dist/index.esm.js',
      }),
      getOutputOption({
        format: 'commonjs',
        file: './dist/index.cjs',
      }),
      getOutputOption({
        format: 'esm',
        file: './dist/index.mjs',
      }),
    ],
  },
  {
    input: './src/index.js',
    plugins: [resolve()],
    output: [
      getOutputOption({
        format: 'umd',
        name: 'normalizeText',
        file: './dist/index.umd.js',
      }),
      getOutputOption({
        format: 'umd',
        name: 'normalizeText',
        file: './dist/index.umd.min.js',
        plugins: [terser()],
      }),
    ],
  },
];

/**
 * Creates an output option.
 * @param {import('rollup').OutputOptions} options
 * @returns {import('rollup').OutputOptions}
 */
function getOutputOption(options) {
  return {
    ...options,
    exports: 'named',
    sourcemap: true,
  };
}

export default options;
