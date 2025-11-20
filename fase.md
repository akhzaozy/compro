# 🎯 ROADMAP PENELITIAN - PEMBAGIAN TUGAS TIM

## 👥 **PEMBAGIAN TIM**

```
┌─────────────────────────────────────────────────────┐
│  ANGGOTA 1 (Akhza) → Company Profile (2 versi)      │
│  ANGGOTA 2 (Daffa) → Dashboard Admin (2 versi)      │
│  KEDUANYA          → Testing, Analysis, & Report    │
└─────────────────────────────────────────────────────┘
```

---

## 📋 **Akhza: COMPANY PROFILE**

### **Tugas: Buat 2 Aplikasi Company Profile**

#### **Aplikasi 1A: Company Profile - BASELINE** ❌ (Tanpa Optimasi)

**Tech Stack:**
- Vue 3.4.x
- Vite 5.x
- Vue Router 4
- Tailwind CSS

**Fitur yang Harus Ada:**
1. **6 Halaman:**
   - Home (Landing page dengan hero section)
   - About (Tentang perusahaan)
   - Services (Daftar layanan, gunakan card/grid)
   - Portfolio (Gallery project, bisa pakai filter)
   - Blog (List artikel, 5-10 artikel dummy)
   - Contact (Form kontak dengan validasi)

2. **Komponen:**
   - Header/Navbar (sticky/fixed)
   - Footer
   - Hero Section (dengan background image/video)
   - Service Card (untuk tampilkan layanan)
   - Portfolio Item (card untuk portfolio)
   - Blog Post Card

3. **Assets:**
   - 15-20 gambar (ukuran normal, jangan dikompres)
   - 1 video background di hero section (opsional)
   - Icon-icon untuk services

**⚠️ PENTING - Cara Import (BASELINE):**
```
❌ JANGAN pakai lazy loading
❌ JANGAN pakai dynamic import
❌ Import semua komponen secara NORMAL
❌ JANGAN pisah-pisah chunk di Vite config

✅ Import biasa: import Home from './views/Home.vue'
✅ Vite config standar, jangan tambah optimasi
```

**Langkah Kerja:**
1. Setup project dengan `npm create vite@latest`
2. Install Vue Router dan Tailwind
3. Buat 6 halaman dengan konten lengkap
4. Setup routing standar (import normal)
5. Styling dengan Tailwind CSS
6. Deploy ke Netlify dengan nama: `company-baseline.netlify.app`
7. **Save build output** (screenshot terminal saat `npm run build`)
8. Catat ukuran bundle dari terminal

**Deliverables:**
- ✅ Source code (Git repository)
- ✅ Live URL Netlify
- ✅ Screenshot build output
- ✅ Dokumentasi ukuran bundle

---

#### **Aplikasi 1B: Company Profile - OPTIMIZED** ✅ (Dengan Optimasi)

**Tech Stack:** (Sama seperti Baseline)
- Vue 3.4.x
- Vite 5.x
- Vue Router 4
- Tailwind CSS
- **TAMBAHAN:**
  - rollup-plugin-visualizer (untuk analisis bundle)
  - vite-plugin-compression (untuk gzip)

**Fitur:** (SAMA PERSIS seperti Baseline)
- 6 halaman yang sama
- Komponen yang sama
- Assets yang sama
- Design yang sama

**✅ PENTING - Implementasi Optimasi:**

1. **Route-Based Lazy Loading:**
   - Semua route pakai dynamic import: `() => import('./views/Home.vue')`
   - Homepage bisa ditambah meta `preload: true`

2. **Component-Based Lazy Loading:**
   - Komponen berat pakai `defineAsyncComponent`
   - Contoh: Hero section, Portfolio Gallery

3. **Vite Configuration:**
   - Install plugin: rollup-plugin-visualizer
   - Install plugin: vite-plugin-compression
   - Setup manual chunks untuk pisahkan vendor
   - Pisahkan komponen sekunder

4. **Intelligent Prefetching:**
   - Tambahkan logic di router untuk prefetch halaman yang sering diakses
   - Contoh: Di homepage, prefetch About page

**Langkah Kerja:**
1. **COPY project dari Baseline** (jangan buat dari awal)
2. Install tambahan: rollup-plugin-visualizer, vite-plugin-compression
3. Ubah semua routing jadi lazy loading
4. Ubah komponen berat jadi async component
5. Setup Vite config dengan manual chunks
6. Tambahkan prefetching logic di router
7. Build dan cek apakah ada multiple chunks
8. Deploy ke Netlify dengan nama: `company-optimized.netlify.app`
9. **Save bundle analysis** (file stats.html yang di-generate)
10. Catat ukuran bundle dari terminal

**Deliverables:**
- ✅ Source code (Git repository terpisah)
- ✅ Live URL Netlify
- ✅ Screenshot build output
- ✅ File stats.html (bundle visualization)
- ✅ Dokumentasi ukuran bundle + jumlah chunks

---

## 📋 **Daffa: DASHBOARD ADMIN**

### **Tugas: Buat 2 Aplikasi Dashboard Admin Toko**

#### **Aplikasi 2A: Dashboard Admin - BASELINE** ❌ (Tanpa Optimasi)

**Tech Stack:**
- Vue 3.4.x
- Vite 5.x
- Vue Router 4
- Pinia (State Management)
- Element Plus (UI Library)
- Chart.js + vue-chartjs (untuk grafik)
- Axios (untuk mock API)

**Fitur yang Harus Ada:**

1. **12 Halaman:**
   - Dashboard (overview dengan 3-4 charts)
   - Product List (tabel dengan pagination, filter, sort)
   - Product Add (form lengkap dengan validasi)
   - Product Edit (form edit dengan pre-filled data)
   - Order List (tabel dengan status, filter)
   - Order Detail (detail pesanan)
   - Customer List (tabel pelanggan)
   - Analytics (halaman full charts)
   - Settings (form settings)

2. **Komponen Penting:**
   - Sidebar Navigation (collapsible)
   - DataTable Component (reusable)
   - Form Builder (reusable)
   - 3 jenis Chart: Line Chart, Bar Chart, Pie Chart
   - Modal/Dialog
   - Dropdown/Select

3. **State Management (Pinia):**
   - Product Store (list, add, edit, delete)
   - Order Store
   - Auth Store (user info)

4. **Data:**
   - Buat mock data (50-100 products, 20-50 orders)
   - Bisa pakai JSON file atau mock API

**⚠️ PENTING - Cara Import (BASELINE):**
```
❌ JANGAN pakai lazy loading
❌ JANGAN pakai dynamic import
❌ JANGAN pisah chunk untuk charts
❌ Import semua library langsung

✅ Import biasa semua halaman
✅ Import biasa semua komponen
✅ Vite config standar
```

**Langkah Kerja:**
1. Setup project dengan Vite
2. Install semua dependencies (Pinia, Element Plus, Chart.js, Axios)
3. Setup Pinia stores
4. Buat layout (Sidebar + Main Content)
5. Buat 12 halaman dengan fitur CRUD lengkap
6. Implementasi charts di Dashboard & Analytics
7. Setup routing standar (import normal)
8. Deploy ke Netlify: `dashboard-baseline.netlify.app`
9. **Save build output**
10. Catat ukuran bundle (akan besar karena banyak library)

**Deliverables:**
- ✅ Source code (Git repository)
- ✅ Live URL Netlify
- ✅ Screenshot build output
- ✅ Dokumentasi ukuran bundle
- ✅ Screenshot setiap halaman

---

#### **Aplikasi 2B: Dashboard Admin - OPTIMIZED** ✅ (Dengan Optimasi)

**Tech Stack:** (Sama seperti Baseline + tambahan)
- Vue 3.4.x
- Vite 5.x
- Vue Router 4
- Pinia
- Element Plus
- Chart.js + vue-chartjs
- Axios
- **TAMBAHAN:**
  - rollup-plugin-visualizer
  - vite-plugin-compression

**Fitur:** (SAMA PERSIS seperti Baseline)
- 12 halaman yang sama
- Komponen yang sama
- State management yang sama
- Fitur CRUD yang sama

**✅ PENTING - Implementasi Optimasi:**

1. **Route-Based Lazy Loading (AGGRESSIVE):**
   - Semua 12 route pakai dynamic import
   - Dashboard bisa preload karena halaman utama
   - Product/Order/Analytics pisah module

2. **Component-Based Lazy Loading:**
   - Line Chart → async component
   - Bar Chart → async component
   - Pie Chart → async component
   - Modal → async component
   - Heavy DataTable → async component

3. **Vite Configuration (GRANULAR):**
   - Pisahkan chunk untuk:
     - Core Vue vendor (vue, vue-router)
     - Pinia vendor
     - Element Plus vendor (BESAR, pisah!)
     - Chart.js vendor (BESAR, pisah!)
     - Product module (product pages grouped)
     - Order module (order pages grouped)
     - Analytics module (dengan charts)

4. **Intelligent Prefetching:**
   - Di Dashboard → prefetch Product List & Order List
   - Di Product List → prefetch Product Add
   - Di Order List → prefetch Order Detail

5. **Suspense + Loading State:**
   - Pakai Suspense untuk async components
   - Tampilkan skeleton loader dari Element Plus

**Langkah Kerja:**
1. **COPY project dari Baseline**
2. Install tambahan plugins
3. Ubah semua routing jadi lazy loading
4. Ubah chart components jadi async
5. Setup Vite config dengan GRANULAR manual chunks
6. Implement prefetching di router
7. Tambahkan Suspense + skeleton loading
8. Build dan pastikan ada BANYAK chunks (10-15 chunks)
9. Deploy ke Netlify: `dashboard-optimized.netlify.app`
10. **Save bundle analysis**

**Deliverables:**
- ✅ Source code (Git repository terpisah)
- ✅ Live URL Netlify
- ✅ Screenshot build output
- ✅ File stats.html (bundle visualization)
- ✅ Dokumentasi ukuran bundle + jumlah chunks
- ✅ Comparison screenshots (before/after)

---

## 📊 **KEDUANYA : TESTING & ANALYSIS**

### **Tugas Setelah 4 Aplikasi Selesai:**

#### **FASE 1: Setup Testing Environment**

1. **Buat project baru untuk testing:**
   - Folder: `performance-testing/`
   - Install: Lighthouse, Chrome Launcher, Puppeteer, csv-writer

2. **Buat automation script:**
   - Script untuk run Lighthouse 60x
   - Save results ke CSV

3. **Kumpulkan URL dari 2 anggota:**
   - Company Baseline URL
   - Company Optimized URL
   - Dashboard Baseline URL
   - Dashboard Optimized URL

---

#### **FASE 2: Run Performance Tests**

**Total: 60 Tests**

Untuk **SETIAP aplikasi** (4 aplikasi):
- Network 4G: 5 repetisi
- Network 5G: 5 repetisi
- Network Desktop: 5 repetisi
- **Total per app: 15 tests**

**Testing Automation:**
1. Run script automation
2. Script akan otomatis:
   - Open Chrome headless
   - Set network throttling
   - Run Lighthouse
   - Collect metrics: FCP, LCP, TTI, TBT, CLS, Score
   - Save to CSV
   - Repeat untuk semua kombinasi

**Data yang Dikumpulkan:**
```
test_id | app_name | version | network | repetition | 
fcp | lcp | tti | tbt | cls | lighthouse_score | timestamp
```

**Waktu Estimasi:** 3-4 jam (dengan delay 10 detik antar test)

---

#### **FASE 3: Bundle Size Analysis**

1. **Dari Anggota 1 (Company):**
   - Minta screenshot build output (Baseline)
   - Minta screenshot build output (Optimized)
   - Minta file stats.html (Optimized)
   - Catat: Initial bundle size, Total bundle size, Jumlah chunks

2. **Dari Anggota 2 (Dashboard):**
   - Minta screenshot build output (Baseline)
   - Minta screenshot build output (Optimized)
   - Minta file stats.html (Optimized)
   - Catat: Initial bundle size, Total bundle size, Jumlah chunks

3. **Buat tabel comparison:**
   ```
   | App      | Version    | Initial | Total  | Chunks | Reduction |
   |----------|-----------|---------|--------|--------|-----------|
   | Company  | Baseline  | XXX KB  | XXX KB | 1-2    | -         |
   | Company  | Optimized | XXX KB  | XXX KB | 5-8    | XX%       |
   | Dashboard| Baseline  | XXX KB  | XXX KB | 1-2    | -         |
   | Dashboard| Optimized | XXX KB  | XXX KB | 10-15  | XX%       |
   ```

---

#### **FASE 4: Statistical Analysis**

**Setup Python Environment:**
1. Install: pandas, numpy, scipy, matplotlib, seaborn
2. Load CSV data

**Data Cleaning:**
1. Remove outliers pakai IQR method
2. Check untuk data anomali
3. Save cleaned data

**Statistical Tests:**
1. **Normality Test (Shapiro-Wilk):**
   - Cek apakah data terdistribusi normal
   
2. **Hypothesis Testing:**
   - Jika normal → Paired t-test
   - Jika tidak normal → Wilcoxon test
   - H0: Tidak ada perbedaan signifikan
   - H1: Ada perbedaan signifikan
   - Alpha: 0.05

3. **Effect Size (Cohen's d):**
   - Small: < 0.5
   - Medium: 0.5 - 0.8
   - Large: > 0.8

4. **Calculate Improvement:**
   ```
   Improvement (%) = ((Baseline - Optimized) / Baseline) × 100
   ```

**Analisis untuk:**
- FCP improvement
- LCP improvement
- TTI improvement
- TBT improvement
- Lighthouse Score improvement
- Bundle Size reduction

---

#### **FASE 5: Visualizations**

**Grafik yang Harus Dibuat:**

1. **Bar Chart: Performance Comparison**
   - X-axis: Metrics (FCP, LCP, TTI)
   - Y-axis: Time (ms)
   - Grouped by: Baseline vs Optimized
   - Per complexity level

2. **Line Chart: Network Impact**
   - X-axis: Network (3G, 4G, Desktop)
   - Y-axis: Time (ms)
   - Lines: Baseline vs Optimized
   - Per metric

3. **Box Plot: Variability**
   - Show distribution dan outliers
   - Per metric dan per app

4. **Pie Chart: Bundle Distribution**
   - Show chunk sizes
   - Compare Baseline vs Optimized

5. **Improvement Bar Chart:**
   - X-axis: Metrics
   - Y-axis: Improvement Percentage
   - Compare Low vs Medium Complexity

---

#### **FASE 6: Answer Research Questions**

**RQ1: Pengaruh pada Kompleksitas Rendah (Company Profile)**

Template Jawaban:
```
Berdasarkan pengujian pada aplikasi kompleksitas rendah (Company Profile),
implementasi hybrid lazy loading dan code splitting menghasilkan:

Performa Metrics:
- FCP improvement: X% (dari X.Xs menjadi Y.Ys)
- LCP improvement: X% (dari X.Xs menjadi Y.Ys)
- TTI improvement: X% (dari X.Xs menjadi Y.Ys)
- Lighthouse Score: meningkat X poin (dari XX menjadi XX)

Bundle Size:
- Initial bundle reduction: X% (dari XXX KB menjadi YYY KB)
- Total bundle reduction: X% (dari XXX KB menjadi YYY KB)
- Jumlah chunks: meningkat dari X menjadi Y chunks

Statistical Analysis:
- Paired t-test/Wilcoxon: p-value = X.XXX (< 0.05)
- Cohen's d: X.XX (Large/Medium/Small effect size)
- Kesimpulan: Terdapat perbedaan yang signifikan secara statistik

Network Condition Impact:
- Improvement paling terlihat pada koneksi 3G (XX%)
- Pada 4G: XX%
- Pada Desktop: XX%
```

---

**RQ2: Pengaruh pada Kompleksitas Sedang (Dashboard Admin)**

Template Jawaban:
```
Berdasarkan pengujian pada aplikasi kompleksitas sedang (Dashboard Admin),
implementasi hybrid lazy loading dan code splitting menghasilkan:

Performa Metrics:
- FCP improvement: X%
- LCP improvement: X%
- TTI improvement: X%
- Lighthouse Score: meningkat X poin

Bundle Size:
- Initial bundle reduction: X% (lebih signifikan dari kompleksitas rendah)
- Total bundle reduction: X%
- Jumlah chunks: meningkat dari X menjadi Y chunks (lebih banyak)

Statistical Analysis:
- p-value = X.XXX (< 0.05)
- Cohen's d: X.XX (Large effect size)

Network Condition Impact:
- Improvement sangat signifikan pada 3G (XX%)
- Pada 4G: XX%
- Pada Desktop: XX%

Analisis Tambahan:
- Chart components yang di-lazy load memberikan dampak besar
- Element Plus library yang dipecah jadi separate chunk efektif
```

---

**RQ3: Perbandingan Efektivitas**

Template Jawaban:
```
Perbandingan efektivitas strategi hybrid antara kompleksitas rendah dan sedang:

Bundle Size Impact:
- Kompleksitas Rendah: XX% reduction
- Kompleksitas Sedang: YY% reduction
- Kesimpulan: Lebih efektif pada kompleksitas [rendah/sedang] karena...

Performance Improvement:
- TTI Improvement pada Low Complexity: XX%
- TTI Improvement pada Medium Complexity: YY%
- Rata-rata improvement lebih tinggi pada [low/medium] complexity

Granularity Effectiveness:
- Aplikasi kompleksitas rendah: X chunks optimal
- Aplikasi kompleksitas sedang: Y chunks optimal
- Semakin tinggi kompleksitas, semakin efektif granular splitting

Network Sensitivity:
- Pada kompleksitas rendah: improvement konsisten di semua network
- Pada kompleksitas sedang: improvement lebih terasa di slow network

Trade-offs:
- Kompleksitas rendah: sedikit chunks, overhead minimal
- Kompleksitas sedang: banyak chunks, perlu balance antara splitting dan overhead
```

---

**RQ4: Rekomendasi Strategi**

Template Jawaban:
```
REKOMENDASI STRATEGI OPTIMASI:

A. UNTUK KOMPLEKSITAS RENDAH (Company Profile, Landing Page, Portfolio):

   1. Route-Based Lazy Loading:
      ✅ Implement untuk semua secondary pages
      ✅ Homepage bisa eager load atau preload
      ❌ Tidak perlu terlalu aggressive

   2. Component-Based Lazy Loading:
      ✅ Hanya untuk komponen > 50KB
      ✅ Gallery components, Video players
      ❌ Small components tidak perlu (overhead)

   3. Code Splitting:
      ✅ Vendor splitting: pisahkan Vue core dari third-party
      ✅ Secondary pages grouped
      ❌ Jangan terlalu granular (max 5-8 chunks)

   4. Prefetching:
      ✅ Implement untuk frequently accessed pages
      ✅ Berdasarkan user flow (e.g., Home → About)

   Estimasi Improvement: 35-45%

B. UNTUK KOMPLEKSITAS SEDANG (Dashboard, Admin Panel, SaaS App):

   1. Route-Based Lazy Loading:
      ✅ AGGRESSIVE implementation untuk semua routes
      ✅ Dashboard/main page preload
      ✅ Group related pages (product module, order module)

   2. Component-Based Lazy Loading:
      ✅ Charts components (Line, Bar, Pie) → async
      ✅ Heavy DataTable → async
      ✅ Modal/Dialog → async
      ✅ Rich Text Editor → async
      ✅ File Upload → async

   3. Code Splitting (GRANULAR):
      ✅ Separate vendor chunks:
         - Vue core (vue, vue-router)
         - State management (pinia/vuex)
         - UI Library (element-plus, vuetify)
         - Charts (chart.js, echarts)
         - HTTP (axios)
      ✅ Module-based chunks:
         - Product module
         - Order module
         - Analytics module
         - Settings module
      ✅ Target: 10-15 chunks

   4. Prefetching:
      ✅ Based on user role/permissions
      ✅ Based on dashboard → frequently accessed sections
      ✅ Predictive prefetching

   5. Additional Optimizations:
      ✅ Suspense + Loading states
      ✅ Skeleton loaders
      ✅ Progressive loading untuk large tables

   Estimasi Improvement: 45-60%

C. BEST PRACTICES UMUM:

   1. Bundle Size Monitoring:
      - Gunakan rollup-plugin-visualizer
      - Target: < 200KB initial bundle (gzipped)
      - Monitor di CI/CD

   2. Network Consideration:
      - Prioritas optimasi untuk slow network (3G/4G)
      - Test dengan network throttling

   3. Testing:
      - Lighthouse score target: > 90
      - LCP target: < 2.5s
      - TTI target: < 3.8s

   4. Balance:
      - Jangan over-splitting (HTTP overhead)
      - Optimal chunk size: 100-300KB
      - Min 3-5 chunks, Max 15-20 chunks
```

---

#### **FASE 7: Documentation**

**Compile Everything:**

1. **BAB IV: HASIL DAN PEMBAHASAN**
   - Deskripsi aplikasi yang dibuat
   - Tabel hasil pengujian
   - Grafik visualisasi
   - Statistical analysis results
   - Comparison analysis

2. **BAB V: KESIMPULAN DAN SARAN**
   - Jawaban untuk 4 research questions
   - Kesimpulan umum
   - Rekomendasi praktis
   - Keterbatasan penelitian
   - Saran untuk penelitian selanjutnya

3. **Appendix:**
   - Source code snippets
   - Raw data (CSV)
   - Bundle analysis screenshots
   - Lighthouse reports

---

## ✅ **CHECKLIST UNTUK SETIAP ANGGOTA**

### **Akhza - Company Profile:**
- [ ] Baseline app selesai & deployed
- [ ] Optimized app selesai & deployed
- [ ] Screenshot build output (2x)
- [ ] File stats.html (1x untuk optimized)
- [ ] Dokumentasi bundle sizes
- [ ] Source code di Git repository
- [ ] Serah terima URL ke koordinator

### **Daffa - Dashboard Admin:**
- [ ] Baseline app selesai & deployed
- [ ] Optimized app selesai & deployed
- [ ] Screenshot build output (2x)
- [ ] File stats.html (1x untuk optimized)
- [ ] Dokumentasi bundle sizes
- [ ] Screenshot setiap halaman (untuk dokumentasi)
- [ ] Source code di Git repository
- [ ] Serah terima URL ke koordinator

### **KEDUANYA :**
- [ ] Setup testing environment
- [ ] Collect all 4 URLs
- [ ] Run 60 Lighthouse tests
- [ ] Collect bundle analysis data
- [ ] Data cleaning
- [ ] Statistical analysis (Python)
- [ ] Create visualizations
- [ ] Answer 4 research questions
- [ ] Write conclusions & recommendations
- [ ] Compile final report

---

## 📅 **TIMELINE SUGGESTION**

| Minggu | Anggota 1 | Anggota 2 | Keduanya |
|--------|-----------|-----------|-------------|
| **1-2** | Buat Company Baseline | Buat Dashboard Baseline | Setup testing tools |
| **3** | Buat Company Optimized | Buat Dashboard Optimized | Review progress |
| **4** | Deploy & dokumentasi | Deploy & dokumentasi | Collect URLs, run tests |
| **5** | - | - | Data analysis |
| **6** | - | - | Write report |

---

## 💡 **TIPS KOORDINASI**

1. **Weekly Meeting:**
   - Check progress setiap minggu
   - Solve blockers bersama
   - Review code implementation

2. **Shared Documentation:**
   - Buat Google Docs/Notion untuk tracking
   - Setiap anggota update progress
   - Share screenshots dan dokumentasi

3. **Quality Control:**
   - Review setiap aplikasi sebelum testing
   - Pastikan fitur lengkap dan sama antara baseline & optimized
   - Pastikan deployment sukses

4. **Backup Data:**
   - Git repositories untuk code
   - Google Drive untuk screenshots & data
   - Keep raw data (jangan dihapus)

---