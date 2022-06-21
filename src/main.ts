import { createApp } from 'vue'
import App from './App.vue'
import YUI from './Y-UI/index'

const app = createApp(App);
app.use(YUI);
app.mount('#app');
