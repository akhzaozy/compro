import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import compression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    vue(),
    // ✅ Gzip/brotli compression untuk output build
    compression(),
    // ✅ Hasilkan file stats.html untuk analisis bundle
    visualizer({
      filename: 'stats.html',
      gzipSize: true,
      brotliSize: true,
      open: false
    })
  ],
  build: {
    rollupOptions: {
      output: {
        // ✅ Pisahkan vendor jadi beberapa chunk
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('vue')) {
              return 'vue-vendor'
            }
            // kalau nanti kamu pakai library lain, bisa dipisah di sini
            return 'vendor'
          }
        }
      }
    }
  }
})
