



import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // chemin vers ton fichier router/index.js
import 'bootstrap/dist/css/bootstrap.min.css'


const app = createApp(App)
app.use(router)
app.mount('#app')
