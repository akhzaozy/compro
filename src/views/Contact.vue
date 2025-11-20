<template>
  <main>
    <section class="contact-hero">
      <div class="hero-overlay"></div>
      <div class="container">
        <h1>Hubungi Kami</h1>
        <p class="lead">Kami siap membantu mewujudkan kebutuhan teknologi Anda</p>
      </div>
    </section>

    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Informasi Kontak</h2>
            <p>Kami senang mendengar dari Anda. Kirim pesan dan kami akan merespons secepat mungkin untuk membantu kebutuhan bisnis Anda.</p>
            
            <div class="contact-details">
              <div class="contact-item">
                <div class="contact-icon">📧</div>
                <div class="contact-text">
                  <h3>Email</h3>
                  <p>{{ companyData.contact.email }}</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">📞</div>
                <div class="contact-text">
                  <h3>Telepon</h3>
                  <p>{{ companyData.contact.phone }}</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div class="contact-text">
                  <h3>Alamat</h3>
                  <p>{{ companyData.contact.address }}</p>
                </div>
              </div>
            </div>

            <div class="working-hours">
              <h3>⏰ Jam Operasional</h3>
              <div class="hours-list">
                <div class="hours-item">
                  <span class="day">Senin - Jumat</span>
                  <span class="time">08:00 - 17:00 WITA</span>
                </div>
                <div class="hours-item">
                  <span class="day">Sabtu</span>
                  <span class="time">08:00 - 14:00 WITA</span>
                </div>
                <div class="hours-item">
                  <span class="day">Minggu</span>
                  <span class="time">Tutup</span>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form-wrapper">
            <h2>Kirim Pesan</h2>
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-group">
                <label for="name">Nama Lengkap *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required
                  placeholder="Masukkan nama lengkap Anda"
                >
              </div>
              
              <div class="form-group">
                <label for="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required
                  placeholder="email.anda@contoh.com"
                >
              </div>
              
              <div class="form-group">
                <label for="phone">Nomor Telepon</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone"
                  placeholder="08xx-xxxx-xxxx"
                >
              </div>
              
              <div class="form-group">
                <label for="subject">Subjek *</label>
                <select id="subject" v-model="form.subject" required>
                  <option value="">Pilih Layanan</option>
                  <option value="cctv">Jasa Pemasangan CCTV</option>
                  <option value="lan">Instalasi Jaringan LAN & Fiber Optic</option>
                  <option value="konsultan">Konsultan IT & Penjualan Alat</option>
                  <option value="website">Pembuatan Website & Aplikasi</option>
                  <option value="listrik">Instalasi Kelistrikan</option>
                  <option value="properti">Konsultan Perumahan</option>
                  <option value="kendaraan">Perbaikan & Spare Part Kendaraan</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message">Pesan *</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  required
                  rows="6"
                  placeholder="Jelaskan kebutuhan Anda..."
                ></textarea>
              </div>
              
              <button type="submit" class="submit-btn">
                <span>Kirim Pesan</span>
                <span class="btn-icon">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <div class="container">
        <h2>Lokasi Kami</h2>
        <p class="section-subtitle">Kunjungi kantor kami di Makassar, Sulawesi Selatan</p>
        <div class="map-container">
          <div class="map-placeholder">
            <div class="map-icon">🗺️</div>
            <p>{{ companyData.contact.address }}</p>
            <a href="https://maps.google.com" target="_blank" class="map-link">Buka di Google Maps</a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import companyData from '../../data/company.json'

export default {
  name: 'Contact',
  data() {
    return {
      companyData: companyData,
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      alert(`Terima kasih ${this.form.name}! Pesan Anda telah kami terima. Tim kami akan segera menghubungi Anda melalui ${this.form.email}.`)
      
      this.form = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.contact-hero {
  position: relative;
  background: url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&auto=format&fit=crop') center/cover;
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
  background: linear-gradient(135deg, rgba(225, 112, 85, 0.9) 0%, rgba(255, 107, 107, 0.85) 100%);
}

.container {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contact-hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.lead {
  font-size: 1.3rem;
  opacity: 0.95;
  line-height: 1.6;
}

.contact-content {
  padding: 5rem 0;
  background: white;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-info h2,
.contact-form-wrapper h2 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 2rem;
}

.contact-info > p {
  margin-bottom: 2.5rem;
  color: #666;
  line-height: 1.8;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 1.5rem;
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateX(10px);
}

.contact-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.contact-text h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.contact-text p {
  color: #555;
  line-height: 1.6;
  margin: 0;
}

.working-hours {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  border-radius: 15px;
  color: white;
}

.working-hours h3 {
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.hours-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.hours-item {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

.day {
  font-weight: 600;
}

.time {
  opacity: 0.9;
}

.contact-form-wrapper {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: 600;
  font-size: 0.95rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
}

.btn-icon {
  font-size: 1.3rem;
  transition: transform 0.3s ease;
}

.submit-btn:hover .btn-icon {
  transform: translateX(5px);
}

.map-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.map-section h2 {
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

.map-container {
  max-width: 900px;
  margin: 0 auto;
}

.map-placeholder {
  background: white;
  padding: 4rem 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.map-icon {
  font-size: 5rem;
  margin-bottom: 1.5rem;
}

.map-placeholder p {
  color: #555;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.map-link {
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px 30px;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.map-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .contact-hero h1 {
    font-size: 2rem;
  }
  
  .contact-form-wrapper {
    padding: 2rem;
  }
}
</style>