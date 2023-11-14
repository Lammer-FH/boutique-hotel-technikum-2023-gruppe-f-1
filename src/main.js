import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import BootstrapVue3 from 'bootstrap-vue-3'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faBath, faCookieBite, faTv, faSnowflake, faWifi, faEgg, faWheelchair, faExpand } from '@fortawesome/free-solid-svg-icons'

library.add(faBath, faCookieBite, faTv, faSnowflake, faWifi, faEgg, faWheelchair, faExpand)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)
app.use(BootstrapVue3)

app.mount('#app')
