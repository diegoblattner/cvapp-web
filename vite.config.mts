import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import path from "path";

export default defineConfig(() => ({
  plugins: [preact()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@services": path.resolve(__dirname, "src/services"),
      "@ui": path.resolve(__dirname, "src/ui"),
      "@types": path.resolve(__dirname, "src/types.ts"),
    },
  },
}));
