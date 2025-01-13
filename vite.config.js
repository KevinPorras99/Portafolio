import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/', // Asegúrate de que esta ruta coincida con el nombre de tu repositorio
  plugins: [react()],
});