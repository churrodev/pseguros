import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import router from './router';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

// Importar FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Añado iconos a la librería
library.add(faPowerOff, faFacebookF, faInstagram, faLinkedinIn, faTwitter);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon); // Registro FontAwesomeIcon globalmente
app.use(router);
app.use(pinia);
app.mount('#app');
