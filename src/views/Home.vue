<template>
  <main>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-container">
        <h1 class="hero-title">{{ companyData.name }}</h1>
        <p class="hero-subtitle">{{ companyData.tagline }}</p>
        <p class="hero-description">{{ companyData.description }}</p>
        <router-link to="/services" class="cta-button">Lihat Layanan Kami</router-link>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
      <div class="stats-container">
        <div class="stat-item">
          <div class="stat-icon">📅</div>
          <h3>Didirikan</h3>
          <p>{{ companyData.founded }}</p>
        </div>
        <div class="stat-item">
          <div class="stat-icon">👥</div>
          <h3>Tim Profesional</h3>
          <p>{{ companyData.employees }}</p>
        </div>
        <div class="stat-item">
          <div class="stat-icon">📍</div>
          <h3>Lokasi</h3>
          <p>Indonesia Timur</p>
        </div>
      </div>
    </section>

    <!-- About Preview -->
    <section class="about-preview">
      <div class="container">
        <div class="about-grid">
          <div class="about-image">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop" alt="Technology" />
          </div>
          <div class="about-content">
            <h2>Tentang Kami</h2>
            <p>Semakin majunya perkembangan teknologi informasi saat ini, menjadi cikal bakal berdirinya CV Laju Bersama Makmur. Sejak berdirinya pada 22 April 2024, perusahaan kami telah berdedikasi untuk menjadi pioneer dalam bidang jasa IT dan Telekomunikasi yang dapat diandalkan.</p>
            <p>Kami berkomitmen melayani segala kebutuhan yang berkaitan dengan sistem IT dan telekomunikasi, serta memastikan agar perusahaan kami menjadi andalan untuk mencapai tujuan bisnis konsumen.</p>
            <router-link to="/about" class="learn-more">Pelajari Lebih Lanjut →</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="services-preview">
      <div class="container">
        <h2>Layanan Kami</h2>
        <p class="section-subtitle">Solusi teknologi komprehensif untuk kebutuhan bisnis Anda</p>
        <div class="services-grid">
          <div v-for="service in featuredServices" :key="service.id" class="service-card">
            <div class="service-image">
              <img :src="service.image" :alt="service.title" />
            </div>
            <div class="service-content">
              <div class="service-icon">{{ service.icon }}</div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
        <div class="view-all">
          <router-link to="/services" class="view-all-btn">Lihat Semua Layanan</router-link>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="core-values">
      <div class="container">
        <h2>Nilai-Nilai Inti Kami</h2>
        <div class="values-grid">
          <div v-for="value in companyData.coreValues" :key="value.letter" class="value-card">
            <div class="value-letter">{{ value.letter }}</div>
            <div class="value-name">{{ value.value }}</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import companyData from '../../data/company.json'
import servicesData from '../../data/services.json'

export default {
  name: 'Home',
  data() {
    return {
      companyData: companyData
    }
  },
  computed: {
    featuredServices() {
      return servicesData.services.slice(0, 4)
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  background: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop') center/cover;
  color: white;
  padding: 6rem 0;
  text-align: center;
  min-height: 500px;
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

.hero-container {
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #ffa726;
  font-weight: 600;
}

.hero-description {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  line-height: 1.8;
}

.cta-button {
  display: inline-block;
  background: linear-gradient(135deg, #ffa726 0%, #ff6f00 100%);
  color: white;
  padding: 15px 40px;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 167, 38, 0.4);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 167, 38, 0.6);
}

.stats {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 4rem 0;
}

.stats-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
}

.stat-item {
  text-align: center;
  background: white;
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.stat-item h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.stat-item p {
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-preview {
  padding: 5rem 0;
  background: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-image img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.about-content h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.about-content p {
  color: #555;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.learn-more {
  display: inline-block;
  color: #ffa726;
  font-weight: bold;
  text-decoration: none;
  margin-top: 1rem;
  transition: transform 0.3s ease;
}

.learn-more:hover {
  transform: translateX(10px);
}

.services-preview {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.services-preview h2 {
  text-align: center;
  margin-bottom: 1rem;
  color: #2c3e50;
  font-size: 2.5rem;
}

.section-subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.service-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
}

.service-image {
  height: 200px;
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

.service-content {
  padding: 2rem;
  text-align: center;
}

.service-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.service-card p {
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
}

.view-all {
  text-align: center;
}

.view-all-btn {
  display: inline-block;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 12px 35px;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.view-all-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(30, 60, 114, 0.4);
}

.core-values {
  padding: 5rem 0;
  background: white;
}

.core-values h2 {
  text-align: center;
  margin-bottom: 3rem;
  color: #2c3e50;
  font-size: 2.5rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.value-card {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
  transition: transform 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
}

.value-letter {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: white;
  color: #667eea;
  width: 80px;
  height: 80px;
  line-height: 80px;
  border-radius: 50%;
  margin: 0 auto 1rem;
}

.value-name {
  font-size: 1.3rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.3rem;
  }
  
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>