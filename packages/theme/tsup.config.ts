import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    splitting: true,
    sourcemap: true,
    minify: "terser",
    clean: true,
    dts: true,
    format: ['esm', 'cjs'],
    target: 'es2020',
    bundle: true
});
