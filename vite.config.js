import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      input: 'xp.html',
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // If you're using React
          // Add other vendor libraries here
        }
      }
    },
    minify: 'terser',
    cssMinify: true,
    target: 'esnext',
    modulePreload: {
      polyfill: true,
    },
  },
  server: {
    port: 3000,
    headers: {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://api.example.com;"
    }
  },
  plugins: [
    ViteImageOptimizer({
      /* pass your options here */
      jpg: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      png: {
        quality: 80,
      },
      webp: {
        quality: 80,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  publicDir: 'public',
  optimizeDeps: {
    include: ['react', 'react-dom'], // If using React
    force: true,
  },
  css: {
    devSourcemap: true,
  },
});
