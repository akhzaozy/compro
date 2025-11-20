<template>
  <main>
    <section class="services-hero">
      <div class="hero-overlay"></div>
      <div class="container">
        <h1>Layanan Kami</h1>
        <p class="lead">Solusi teknologi komprehensif untuk kebutuhan bisnis Anda</p>
        <p class="hero-description">CV Laju Bersama Makmur memahami akan kebutuhan pasar yang beragam. Oleh karena itu, kami dengan bangga menjadi solusi yang tepat dengan menyediakan produk-produk yang berkualitas.</p>
      </div>
    </section>

    <section class="services-list">
      <div class="container">
        <div class="services-grid">
          <div v-for="service in services" :key="service.id" class="service-card">
            <div class="service-image">
              <img :src="service.image" :alt="service.title" />
              <div class="service-overlay">
                <div class="service-icon">{{ service.icon }}</div>
              </div>
            </div>
            <div class="service-content">
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery-section">
      <div class="container">
        <h2>Galeri Pekerjaan Kami</h2>
        <p class="section-subtitle">Dokumentasi proyek-proyek yang telah kami kerjakan</p>
        
        <div class="gallery-grid">
          <div class="gallery-item">
            <img src="https://images.unsplash.com/photo-1558002038-1055907df827?w=600&auto=format&fit=crop" alt="Instalasi CCTV" />
            <div class="gallery-caption">
              <h4>Instalasi CCTV</h4>
            </div>
          </div>
          
          <div class="gallery-item">
            <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop" alt="Instalasi LAN" />
            <div class="gallery-caption">
              <h4>Instalasi LAN</h4>
            </div>
          </div>
          
          <div class="gallery-item">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format&fit=crop" alt="Penjualan Alat Telekomunikasi" />
            <div class="gallery-caption">
              <h4>Penjualan Alat Telekomunikasi</h4>
            </div>
          </div>
          
          <div class="gallery-item">
            <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&auto=format&fit=crop" alt="Pembuatan Website dan Aplikasi" />
            <div class="gallery-caption">
              <h4>Pembuatan Website & Aplikasi</h4>
            </div>
          </div>
          
          <div class="gallery-item">
            <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&auto=format&fit=crop" alt="Instalasi Kelistrikan" />
            <div class="gallery-caption">
              <h4>Jasa Instalasi Kelistrikan</h4>
            </div>
          </div>
          
          <div class="gallery-item">
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop" alt="Konsultan Perumahan" />
            <div class="gallery-caption">
              <h4>Jasa Konsultan Perumahan</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Siap Memulai Proyek Anda?</h2>
          <p>Hubungi kami sekarang untuk konsultasi gratis dan dapatkan solusi terbaik untuk kebutuhan teknologi Anda</p>
          <router-link to="/contact" class="cta-button">Hubungi Kami</router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import servicesData from '../../data/services.json'

export default {
  name: 'Services',
  data() {
    return {
      services: servicesData.services
    }
  }
}
</script>

<style scoped>
.services-hero {
  position: relative;
  background: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop') center/cover;
  color: white;
  padding: 5rem 0;
  text-align: center;
  min-height: 450px;
  display: flex;
  align-items: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(30, 60, 114, 0.9) 0%, rgba(42, 82, 152, 0.85) 100%);
}

.container {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.services-hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.lead {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #ffa726;
  font-weight: 600;
}

.hero-description {
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.95;
  line-height: 1.8;
}

.services-list {
  padding: 5rem 0;
  background: white;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
}

.service-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.service-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.service-card:hover .service-image img {
  transform: scale(1.1);
}

.service-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(30, 60, 114, 0.8) 0%, rgba(42, 82, 152, 0.7) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover .service-overlay {
  opacity: 1;
}

.service-icon {
  font-size: 5rem;
  animation: bounce 1s ease infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.service-content {
  padding: 2rem;
}

.service-content h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.service-content p {
  color: #666;
  line-height: 1.7;
  font-size: 1rem;
}

.gallery-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.gallery-section h2 {
  text-align: center;
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.section-subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.gallery-item img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 100%);
  padding: 2rem 1.5rem 1.5rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-caption {
  transform: translateY(0);
}

.gallery-caption h4 {
  color: white;
  margin: 0;
  font-size: 1.2rem;
}

.cta-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  text-align: center;
  color: white;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  display: inline-block;
  background: linear-gradient(135deg, #ffa726 0%, #ff6f00 100%);
  color: white;
  padding: 15px 50px;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(255, 167, 38, 0.4);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 167, 38, 0.6);
}

@media (max-width: 768px) {
  .services-hero h1 {
    font-size: 2rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-content h2 {
    font-size: 1.8rem;
  }
}
</style>