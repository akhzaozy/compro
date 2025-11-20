import { createRouter, createWebHistory } from 'vue-router'

// ✅ Route-based lazy loading (dynamic import)
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

// ✅ Intelligent Prefetching:
// Saat user di Home, kita prefetch About & Services
router.afterEach((to) => {
  if (to.name === 'Home') {
    import('../views/About.vue')
    import('../views/Services.vue')
  }
})

export default router
