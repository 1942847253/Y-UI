import { createApp } from 'vue'
import App from './App.vue'
import YUI from './Y-UI/index'

const app = createApp(App);
YUI.install(app);
app.mount('#app');
