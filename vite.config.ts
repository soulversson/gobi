import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // This makes paths relative, which is required for GitHub Pages
    base: './', 
    plugins: [react()],
    define: {
      // This injects the API Key from the environment (or GitHub Secrets) into the build
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      'process.env': {}
    }
  };
});