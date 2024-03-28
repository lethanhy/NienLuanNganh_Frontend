

import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import router from './router';

// import { createPinia } from 'pinia';
// // import piniaPersist from 'pinia-plugin-persist'

// const pinia = createPinia()

// pinia.use(piniaPersist)

createApp(App).use(router).mount('#app')
