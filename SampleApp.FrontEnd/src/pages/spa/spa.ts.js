import { createApp } from "vue";
import { store } from "./store";
import { router } from "./router";

const spaApp = createApp({

});

spaApp.use(router);
spaApp.use(store);
spaApp.mount("#spaApp");
