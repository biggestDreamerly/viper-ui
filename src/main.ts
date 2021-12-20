import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import MyKit from '../packages';

createApp(App).use(MyKit).use(router).mount('#app')

