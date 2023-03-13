import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Vue phone input
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'

import mitt from 'mitt'

const emitter = mitt()

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.config.compilerOptions.isCustomElement = (tag) => tag.includes('-')

app.component('vue-phone-number-input', VuePhoneNumberInput)

app.config.globalProperties.emitter = emitter

app.use(router)
   .use(vuetify)
   .mount('#app')
