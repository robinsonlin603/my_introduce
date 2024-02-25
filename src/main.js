import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';
import { i18n } from '@/i18n';

const app = createApp(App);

app.use(router).use(i18n);

app.mount('#app');
