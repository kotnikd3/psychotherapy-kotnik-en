import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutMeView from '@/views/AboutMeView.vue'
import AboutPsychotherapyView from '@/views/AboutPsychotherapyView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about-me',
        name: 'about_me',
        component: AboutMeView
    },
    {
        path: '/about-psychotherapy',
        name: 'about_psychotherapy',
        component: AboutPsychotherapyView
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
