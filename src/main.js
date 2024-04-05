import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
// tailwindcss file 
import './css/tailwind.css'

const app = createApp(App)
// Make Axios available throughout your project
app.config.globalProperties.$axios = axios

app.mount('#app')