// rollup.config.js

import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.tsx', // Ponto de entrada para o código TypeScript
  output: {
    file: 'dist/bundle.js',
    format: 'cjs', // ou 'es' para módulos ES6
    sourcemap: true,
  },
  plugins: [
    typescript(), // Plugin para lidar com arquivos TypeScript
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
  ],
};
