<template>
  <main>
    <section class="about-hero">
      <div class="hero-overlay"></div>
      <div class="container">
        <h1>Tentang {{ companyData.name }}</h1>
        <p class="lead">{{ companyData.description }}</p>
      </div>
    </section>

    <section class="about-content">
      <div class="container">
        <div class="content-grid">
          <div class="vision-mission">
            <div class="vision-card">
              <div class="card-icon">🎯</div>
              <h2>Visi Kami</h2>
              <p>{{ companyData.vision }}</p>
            </div>
            
            <div class="mission-card">
              <div class="card-icon">🚀</div>
              <h2>Misi Kami</h2>
              <div class="mission-items">
                <p class="mission-item">{{ companyData.mission[0] }}</p>
                <p class="mission-item">{{ companyData.mission[1] }}</p>
              </div>
            </div>
          </div>
          
          <div class="company-info">
            <h2>Tentang Perusahaan</h2>
            <div class="info-content">
              <p>Semakin majunya perkembangan teknologi informasi saat ini, menjadi cikal bakal berdirinya CV Laju Bersama Makmur. Sejak berdirinya pada 22 April 2024, perusahaan kami telah berdedikasi untuk menjadi pioneer dalam bidang jasa IT dan Telekomunikasi yang dapat diandalkan.</p>
              
              <p>Dengan kemajuan teknologi yang semakin pesat dan kesamaan tujuan {{ companyData.founder }}, pendiri CV Laju Bersama Makmur, perusahaan ini akan terus berupaya mempertahankan nilai-nilai inti dan siap bertumbuh untuk menjawab segala tantangan industri yang terjadi di seluruh wilayah Indonesia, khususnya wilayah Indonesia Timur.</p>
              
              <p>Kami berkomitmen melayani segala kebutuhan yang berkaitan dengan sistem IT dan telekomunikasi, serta memastikan agar perusahaan kami menjadi andalan untuk mencapai tujuan bisnis konsumen.</p>
            </div>
            
            <div class="info-grid">
              <div class="info-item">
                <div class="info-icon">📅</div>
                <strong>Didirikan</strong>
                <p>{{ companyData.founded }}</p>
              </div>
              <div class="info-item">
                <div class="info-icon">👥</div>
                <strong>Tim Profesional</strong>
                <p>{{ companyData.employees }}</p>
              </div>
              <div class="info-item">
                <div class="info-icon">📍</div>
                <strong>Lokasi</strong>
                <p v-for="location in companyData.locations" :key="location">
                  {{ location }}
                </p>
              </div>
              <div class="info-item">
                <div class="info-icon">👨‍💼</div>
                <strong>Pendiri</strong>
                <p>{{ companyData.founder }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="core-values-section">
      <div class="container">
        <h2>Nilai-Nilai Inti Kami</h2>
        <p class="section-subtitle">Fondasi yang membimbing setiap langkah kami</p>
        <div class="core-values-grid">
          <div v-for="value in companyData.coreValues" :key="value.letter" class="core-value-item">
            <div class="value-letter">{{ value.letter }}</div>
            <div class="value-text">{{ value.value }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
        <h2>Tim Kami</h2>
        <p class="section-subtitle">Profesional berpengalaman yang siap melayani Anda</p>
        
        <div class="team-structure">
          <div class="team-level level-1">
            <div class="team-member">
              <div class="member-avatar">👔</div>
              <h3>Andi Raka Inzagi Sagaji</h3>
              <p class="member-position">Komisaris</p>
            </div>
          </div>

          <div class="team-level level-2">
            <div class="team-member">
              <div class="member-avatar">👨‍💼</div>
              <h3>Mustari Muhiddin, S.ST</h3>
              <p class="member-position">Direktur</p>
            </div>
          </div>

          <div class="team-level level-3">
            <div class="team-member">
              <div class="member-avatar">💼</div>
              <h3>Ita Sulfiani</h3>
              <p class="member-position">Bendahara</p>
            </div>
          </div>

          <div class="team-level level-4">
            <div class="team-row">
              <div class="team-department">
                <div class="team-member manager">
                  <div class="member-avatar">👨‍💻</div>
                  <h3>Andi Ardiansyah, S.ST</h3>
                  <p class="member-position">Manager SDM dan Operasional</p>
                </div>
                <div class="team-staff">
                  <div class="team-member staff">
                    <div class="member-avatar-small">👤</div>
                    <h4>Muh Ashar</h4>
                    <p>Staff SDM dan Operasional</p>
                  </div>
                  <div class="team-member staff">
                    <div class="member-avatar-small">👤</div>
                    <h4>Ammar Abdullah Dahlan</h4>
                    <p>Staff SDM dan Operasional</p>
                  </div>
                </div>
              </div>

              <div class="team-department">
                <div class="team-member manager">
                  <div class="member-avatar">💻</div>
                  <h3>Ainul Yaqin, S.ST</h3>
                  <p class="member-position">Manager IT dan Infrastruktur</p>
                </div>
                <div class="team-staff">
                  <div class="team-member staff">
                    <div class="member-avatar-small">👤</div>
                    <h4>Fadly Ardiansyah Ahmad, S.Pd</h4>
                    <p>Staff IT dan Infrastruktur</p>
                  </div>
                  <div class="team-member staff">
                    <div class="member-avatar-small">👤</div>
                    <h4>Muhammad Wahyu</h4>
                    <p>Staff IT dan Infrastruktur</p>
                  </div>
                  <div class="team-member staff">
                    <div class="member-avatar-small">👤</div>
                    <h4>Fikram Tanda Malika</h4>
                    <p>Staff IT dan Infrastruktur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import companyData from '../../data/company.json'

export default {
  name: 'About',
  data() {
    return {
      companyData: companyData
    }
  }
}
</script>

<style scoped>
.about-hero {
  position: relative;
  background: url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop') center/cover;
  color: white;
  padding: 5rem 0;
  text-align: center;
  min-height: 400px;
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

.about-hero h1 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.lead {
  font-size: 1.2rem;
  opacity: 0.95;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
}

.about-content {
  padding: 5rem 0;
  background: white;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
}

.vision-mission {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.vision-card,
.mission-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.vision-card h2,
.mission-card h2 {
  color: white;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}

.vision-card p {
  line-height: 1.8;
  opacity: 0.95;
}

.mission-card ul {
  list-style: none;
  padding: 0;
}

.mission-card li {
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
  line-height: 1.6;
  opacity: 0.95;
}

.mission-card li:before {
  content: "✓";
  position: absolute;
  left: 0;
  font-weight: bold;
  color: #ffa726;
}

.mission-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mission-item {
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.7;
  opacity: 0.95;
  margin: 0;
}

.mission-item:before {
  content: "✓";
  position: absolute;
  left: 0;
  font-weight: bold;
  color: #ffa726;
}

.company-info {
  background: #f8f9fa;
  padding: 3rem;
  border-radius: 20px;
}

.company-info h2 {
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.info-content {
  margin-bottom: 2rem;
}

.info-content p {
  color: #555;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.info-item {
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
}

.info-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.info-item strong {
  display: block;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.info-item p {
  color: #666;
  margin: 0;
}

.core-values-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.core-values-section h2 {
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

.core-values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.core-value-item {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.core-value-item:hover {
  transform: translateY(-10px);
}

.value-letter {
  font-size: 3.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.value-text {
  font-size: 1.3rem;
  font-weight: bold;
  color: #2c3e50;
}

.team-section {
  padding: 5rem 0;
  background: white;
}

.team-section h2 {
  text-align: center;
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.team-structure {
  margin-top: 3rem;
}

.team-level {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

.team-member {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.team-member:hover {
  transform: translateY(-5px);
}

.team-member.manager {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  margin-bottom: 1.5rem;
}

.member-avatar {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.team-member h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.team-member.manager h3 {
  color: white;
}

.member-position {
  color: #666;
  font-size: 1rem;
}

.team-member.manager .member-position {
  color: rgba(255, 255, 255, 0.9);
}

.team-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.team-department {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 20px;
}

.team-staff {
  display: grid;
  gap: 1rem;
}

.team-member.staff {
  padding: 1.5rem;
  background: white;
}

.member-avatar-small {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.team-member.staff h4 {
  color: #2c3e50;
  margin-bottom: 0.3rem;
  font-size: 1.1rem;
}

.team-member.staff p {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
}

@media (max-width: 968px) {
  .team-row {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .about-hero h1 {
    font-size: 2rem;
  }
  
  .vision-mission {
    grid-template-columns: 1fr;
  }
  
  .core-values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>