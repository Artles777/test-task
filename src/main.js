import { createApp } from 'vue'
import '@/fonts'
import store from './store'
import App from './App.vue'

createApp(App).use(store).mount('#app')
