import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutPsychotherapyView from '@/views/AboutPsychotherapyView.vue'


export default function createAppRouter(history = createWebHistory(import.meta.env.BASE_URL)) {
  return createRouter({
  history,
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
          slovenianPath: '/',
          title: 'Psychotherapy Denis Kotnik',
          description: 'I offer psychotherapy in Leeuwarden in a safe space where we can explore unconscious patterns and develop a deeper understanding of oneself.',
        }
    },
    {
        path: '/about-psychotherapy',
        name: 'about_psychotherapy',
        component: AboutPsychotherapyView,
        meta: {
          slovenianPath: '/o-psihoterapiji',
          title: 'About Psychotherapy | Psychotherapy Denis Kotnik',
          description: 'Learn about psychodynamic psychotherapy: how sessions work, how long therapy takes, and how it can help explore unconscious patterns, feelings and relationships.',
        }
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
}
