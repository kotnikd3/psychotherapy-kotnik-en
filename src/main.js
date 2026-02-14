import '@/assets/style.scss'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCopyright, faEnvelope, faClock } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot, faPhone, faGavel, faEuro, faLanguage } from '@fortawesome/free-solid-svg-icons'

library.add(faCopyright, faEnvelope, faLocationDot, faPhone, faGavel, faEuro, faClock, faLanguage)

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon);

app.use(router)

app.mount('#app')
