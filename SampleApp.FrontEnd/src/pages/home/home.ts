import "./home.scss";
import { createApp, ref } from "vue";

const homePageApp = createApp({
  setup() {
    const title = ref("Home Page");
    const message = ref("This message coming from Vite + Vue");
    const count = ref(0);

    return {
      title,
      message,
      count,
    };
  },
});

homePageApp.mount("#homePageApp");
