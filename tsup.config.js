import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'lib',
  format: ['cjs', 'esm'],
  target: 'es2019',
  sourcemap: false,
  dts: true,
  splitting: false,
  clean: true,
  minify: true
});
