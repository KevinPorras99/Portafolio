import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Portafolio/',
  resolve: { alias: { '@': path.resolve(import.meta.dirname, '.') } },
});
