import '@/assets/style.scss'
import { createApplication } from './app'

const target = document.querySelector('#app')
const { app, router } = createApplication({ hydrate: target.hasChildNodes() })

router.isReady().then(() => app.mount(target))
