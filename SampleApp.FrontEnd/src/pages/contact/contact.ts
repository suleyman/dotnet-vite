import "./contact.scss"
import { createApp, ref } from "vue";

const contactPageApp = createApp({
  setup() {
    const title = ref("Contact Page");
    const message = ref("This message coming from Vite + Vue");

    return {
      title,
      message,
    };
  },
});

contactPageApp.mount("#contactPageApp");