import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const pinia = createPinia()
pinia.use(({ store }) => {
    store.router = markRaw(router)
  })
library.add(faNoteSticky)
createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(router)
    .use(pinia)
    .mount('#app')
