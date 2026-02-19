import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true, // Fail if port is already in use
    host: true,
    allowedHosts: [
      'www.agenciafoxon.com.br',
      'agenciafoxon.com.br'
    ]
  }
});