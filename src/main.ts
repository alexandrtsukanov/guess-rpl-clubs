import { createApp } from "vue";

import App from "./App.vue";

try {
    const app = createApp(App)
    app.mount("#app");
} catch(error) {
    console.log(error);
}
