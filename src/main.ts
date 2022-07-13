import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import YUI from './Y-UI/index'

const pinia = createPinia();
const app = createApp(App);
app.use(YUI);
app.use(pinia);
app.mount('#app');
