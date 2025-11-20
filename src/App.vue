<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer/>
  </div>
</template>

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

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>