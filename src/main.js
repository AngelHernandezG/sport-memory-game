import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Card from 'primevue/card'
import 'primeflex/primeflex.css'
import App from './App.vue'

const app = createApp(App)
app.use(PrimeVue)
app.component('Card', Card)
app.mount('#app')
