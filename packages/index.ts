import { App, Plugin } from 'vue';

import { ButtonPlugin } from './src/button';

const MyKitPlugin: Plugin = {
    install(app: App) {
        ButtonPlugin.install?.(app);
    },
};

export default MyKitPlugin;

export * from './src/button';
