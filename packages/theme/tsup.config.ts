import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    splitting: true,
    sourcemap: true,
    clean: true,
    dts: true,
    format: ['esm'],
    target: 'es2020',
    bundle: true,
    jsxFactory: 'react',
    jsxFragment: "react"
});
