import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig(() => ({
  plugins: [preact()],
  root: './src/',
  build: { outDir: '../dist/', emptyOutDir: true },
}));
