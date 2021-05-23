import { createApp } from 'vue';
import Toast, { PluginOptions } from 'vue-toastification';

import App from './App.vue';
import router from './router';

import 'vue-toastification/dist/index.css';

// store - state management - vuex
// router - vue router

const toastOptions: PluginOptions = {};

createApp(App).use(router).use(Toast, toastOptions).mount('#app');
