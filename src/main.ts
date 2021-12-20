import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import MyKit from '../packages';
import Preview from './components/Preview.vue';
createApp(App)

const app = createApp(App)
app.component('Preview', Preview)
app.use(MyKit).use(router).mount('#app')