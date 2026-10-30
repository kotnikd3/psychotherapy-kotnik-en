import { createApp, createSSRApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCopyright, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot, faPhone, faGavel, faEuro } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import createAppRouter from './router'

library.add(faCopyright, faEnvelope, faLocationDot, faPhone, faGavel, faEuro)

export function createApplication({ history, hydrate = false } = {}) {
    const app = (hydrate ? createSSRApp : createApp)(App)
    const router = createAppRouter(history)

    app.component('font-awesome-icon', FontAwesomeIcon)
    app.use(router)

    return { app, router }
}