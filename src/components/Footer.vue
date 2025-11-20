<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-grid">
        <div class="footer-column">
          <h3 class="footer-logo">CV LAJU BERSAMA MAKMUR</h3>
          <p class="footer-tagline">Empowering Your Digital Transformation</p>
          <p class="footer-description">
            Pioneer dalam bidang jasa IT dan Telekomunikasi yang dapat diandalkan di Indonesia Timur.
          </p>
          <div class="core-values-mini">
            <span class="value-badge">L</span>
            <span class="value-badge">A</span>
            <span class="value-badge">J</span>
            <span class="value-badge">U</span>
          </div>
        </div>

        <div class="footer-column">
          <h4>Layanan Kami</h4>
          <ul class="footer-links">
            <li><a href="#cctv">Pemasangan CCTV</a></li>
            <li><a href="#lan">Instalasi Jaringan</a></li>
            <li><a href="#konsultan">Konsultan IT</a></li>
            <li><a href="#website">Pembuatan Website</a></li>
            <li><a href="#listrik">Instalasi Kelistrikan</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Perusahaan</h4>
          <ul class="footer-links">
            <li><router-link to="/about">Tentang Kami</router-link></li>
            <li><router-link to="/services">Layanan</router-link></li>
            <li><router-link to="/contact">Kontak</router-link></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Kontak</h4>
          <ul class="footer-contact">
            <li>
              <span class="contact-icon">📍</span>
              <span>Jln. Sejati No. 48, RT 03/RW 07<br>Tamalanrea, Makassar 90245</span>
            </li>
            <li>
              <span class="contact-icon">📞</span>
              <span>0821-9231-0646</span>
            </li>
            <li>
              <span class="contact-icon">📧</span>
              <span>cvlajubersamamakmur@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2024 CV Laju Bersama Makmur. Hak cipta dilindungi.</p>
        <p class="footer-quote">"Any sufficiently advanced technology is equivalent to magic." - Arthur C. Clarke</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: #ecf0f1;
  padding: 4rem 0 2rem;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-column h3,
.footer-column h4 {
  margin-bottom: 1.5rem;
  color: #ffa726;
}

.footer-logo {
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.footer-tagline {
  font-size: 1rem;
  color: #ffa726;
  margin-bottom: 1rem;
  font-style: italic;
}

.footer-description {
  line-height: 1.7;
  opacity: 0.9;
  margin-bottom: 1.5rem;
}

.core-values-mini {
  display: flex;
  gap: 0.5rem;
}

.value-badge {
  background: rgba(255, 167, 38, 0.2);
  color: #ffa726;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.1rem;
  border: 2px solid #ffa726;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a {
  color: #ecf0f1;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.footer-links a:hover {
  color: #ffa726;
  transform: translateX(5px);
}

.footer-contact {
  list-style: none;
  padding: 0;
}

.footer-contact li {
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.contact-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  text-align: center;
}

.footer-bottom p {
  margin: 0.5rem 0;
  opacity: 0.8;
}

.footer-quote {
  font-style: italic;
  color: #ffa726;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-logo {
    font-size: 1.1rem;
  }
}
</style>