# PERBEDAAN APLIKASI 1A (Baseline) DAN 1B (Optimized)

## 1. Perubahan Pada `src/router/index.js`

### **1A – Baseline (Tidak ada Router/index.js)**
### ➤ Penjelasan
- Struktur aplikasi **kurang modular**.
- Sulit dikembangkan ketika halaman semakin banyak.
- Tidak bisa menambahkan fitur seperti:
  - Prefetching
  - Route guard
  - Middleware
- Tidak sesuai praktik standar Vue 3.

### **1B – Optimized (Lazy Loading + Prefetching)**

```js
import { createRouter, createWebHistory } from 'vue-router'

// lazy loading
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Services = () => import('../views/Services.vue')
const Contact = () => import('../views/Contact.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { preload: true } // buat penanda kalau mau di-preload
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Prefetching
// Saat user di Home, auto prefetch ke halaman About & Services
router.afterEach((to) => {
  if (to.name === 'Home') {
    import('../views/About.vue')
    import('../views/Services.vue')
  }
})

export default router
```
### ➤ Penjelasan Perubahan

### 1. **Lazy Loading (`() => import()`)**
- Setiap halaman dipecah menjadi **chunk file yang lebih kecil**.
- Browser hanya memuat halaman saat dibutuhkan.
- Mengurangi ukuran bundle utama (initial JS).

### 2. **Prefetching**
Saat user berada di Home, browser otomatis men-download:
- About
- Services  

di background.  
➡️ Perpindahan halaman menjadi **instan**.

### 3. **Router Modular**
- Router dipisah dari main.js.
- Struktur menjadi profesional, rapi, mudah diperluas.

---

## 2. Perubahan Pada `src/App.vue`

### **1A – Baseline**

```js
<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script>
```
### ➤ Penjelasan
- NavBar & Footer langsung masuk bundle utama.
- Kalau komponennya besar, **initial bundle** menjadi berat.
- Tidak optimal untuk aplikasi besar.
s
---

### **1B – Optimized (Async Component Loading)**

```js
<script>
import { defineAsyncComponent } from 'vue'

const NavBar = defineAsyncComponent(() => import('./components/NavBar.vue'))
const Footer = defineAsyncComponent(() => import('./components/Footer.vue'))

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script>
```
### 1. **Async Component**
- Komponen besar dipisah menjadi chunk sendiri.
- Hanya dimuat ketika dibutuhkan.
- Mengurangi **waktu loading awal**.

### 2. Mengurangi ukuran bundel utama
- Meningkatkan responsivitas pada perangkat dengan CPU rendah.
---

## 3. Perubahan Pada `src/main.js`

### **1A – Baseline**

```js
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Services from './views/Services.vue'
import Contact from './views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
```
### ➤ Penjelasan
- `main.js` terlalu panjang dan berisi routing.
- Tidak rapi dan tidak scalable.

---

### **1B – Optimized**

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```
### ➤ Penjelasan Perubahan
- Router dipindahkan ke file terpisah → **Clean Architecture**.
- `main.js` hanya berfungsi sebagai bootstrap aplikasi.
- Struktur sesuai standar Vue 3 production.
---

## 4. Perubahan Pada `vite.config.js`

### **1A – Baseline**

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser'
  }
})
```
### ➤ Penjelasan
- Tanpa optimasi lanjutan.
- Tidak ada compression.
- Tidak ada analisis bundle.
- Tidak ada pemisahan vendor.
---

### **1B – Optimized**

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { compression } from 'vite-plugin-compression2' 
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    vue(),
    // Compression versi baru
    compression(),
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
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('vue')) {
              return 'vue-vendor'
            }
            return 'vendor'
          }
        }
      }
    }
  }
})
```
### ➤ Penjelasan Perubahan

### 1. **compression()**
- Menghasilkan file `.gz` dan `.br`
- Ukuran file yang dikirim ke client jauh lebih kecil.
- Loading di Netlify jauh lebih cepat.

### 2. **visualizer()**
- Menghasilkan file `stats.html`
- Untuk melihat:
  - Besar masing-masing chunk
  - Vendor vs app code
  - Beban JS total

Dipakai untuk **analisis bundle size di laporan**.

### 3. **manualChunks()**
- Memisahkan:
  - Vue → `vue-vendor.js`
  - Library lain → `vendor.js`
- Membuat cache browser lebih efektif.
---

## 5. Ringkasan Perubahan

| Bagian | 1A (Baseline) | 1B (Optimized) | Perubahan |
|--------|---------------|----------------|-----------|
| Routing | Import biasa | Lazy Loading | ✔ Dynamic Import |
| Prefetch | Tidak ada | Ada | ✔ Prefetch halaman |
| Components | Import biasa | Async Components | ✔ defineAsyncComponent |
| main.js | Campur router | Modular & clean | ✔ Struktur modern |
| Bundle | Single file | Multi-chunk | ✔ manualChunks |
| Build | Standard | Gzip + Visualizer | ✔ compression + stats.html |
| Arsitektur | Cepat awal | Scalable | ✔ Optimized SPA |

---

## 6. Kesimpulan

Versi **1B (Optimized)** menambahkan:

- Lazy loading routing  
- Component-based async loading  
- Prefetch intelligent untuk halaman penting  
- Modular router yang lebih bersih  
- Gzip compression  
- Bundle analyzer (stats.html)  
- Manual chunking untuk performa long-term  
- Arsitektur SPA yang lebih scalable  

Semua perubahan di atas adalah optimasi nyata dari versi 1A menuju versi 1B.
