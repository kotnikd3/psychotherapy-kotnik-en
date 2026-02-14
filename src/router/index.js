import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DenisKotnikView from '@/views/DenisKotnikView.vue'
import PsychodynamicPsychotherapyView from '@/views/PsychodynamicPsychotherapyView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/denis-kotnik',
        name: 'denis_kotnik',
        component: DenisKotnikView
    },
    {
        path: '/psychodynamic-psychotherapy',
        name: 'psychodynamic_psychotherapy',
        component: PsychodynamicPsychotherapyView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // Scroll to top on every navigation
    if (savedPosition) {
        return savedPosition; // This handles browser back/forward
    } else {
        return { top: 0 }; // Scroll to top of the page
    }
  }
})

export default router
