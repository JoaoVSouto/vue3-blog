import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

// store - state management - vuex
// router - vue router

createApp(App).use(router).mount('#app');
