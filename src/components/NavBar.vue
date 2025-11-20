<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="nav-logo">
        <span class="logo-text">CV LAJU BERSAMA MAKMUR</span>
      </router-link>
      <ul class="nav-menu">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Beranda</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">Tentang Kami</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/services" class="nav-link">Layanan</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Kontak</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.nav-logo {
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 1px;
}

.logo-text {
  background: linear-gradient(90deg, #fff 0%, #ffa726 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: 500;
}

.nav-link:hover,
.nav-link.router-link-active {
  background-color: rgba(255, 167, 38, 0.2);
  color: #ffa726;
}

@media (max-width: 768px) {
  .nav-logo {
    font-size: 1rem;
  }
  
  .nav-menu {
    gap: 1rem;
  }
  
  .nav-link {
    font-size: 0.9rem;
    padding: 0.3rem 0.7rem;
  }
}
</style>