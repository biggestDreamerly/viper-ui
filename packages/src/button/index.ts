import { App, Plugin } from 'vue';
// import Button from './src/button.vue';
import Button from './src/button.vue'

export const ButtonPlugin: Plugin = {
    install(app: App) {
        app.component('vi-button', Button);
    },
};

export { Button };
