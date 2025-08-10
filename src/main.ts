import { createApp } from "vue";
import { createPinia } from 'pinia';
import App from "./App.vue";
import { router } from './router';

try {
    const app = createApp(App)
    const pinia = createPinia()

    app.use(pinia)
    app.use(router)

    app.mount("#app");
} catch(error) {
    console.log(error);
}
