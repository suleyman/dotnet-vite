import "./about.scss"
import { createApp, ref } from "vue";

const aboutPageApp = createApp({
  setup() {
    const title = ref("About Page");
    const message = ref("This message coming from Vite + Vue");

    return {
      title,
      message,
    };
  },
});

aboutPageApp.mount("#aboutPageApp");