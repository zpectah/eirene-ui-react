import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'demo/dist',
    rollupOptions: {
      input: {
        // app: './demo/index.html',
        index: './demo/src/index.tsx',
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
  server: {
    open: '/demo/',
  },
});
