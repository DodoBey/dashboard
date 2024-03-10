import LandingPage from '../components/LandingPage/LandingPage.vue'
import TheSetup from '../components/Setup/TheSetup.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {path: '/', name: 'Home', component: LandingPage},
    {path: '/setup', name: 'Setup', component: TheSetup},

  ]

const router = createRouter({
    history: createWebHistory(),
    routes
})
  

export default router