import "./contact.scss";
import { createApp, ref } from "vue";
import ContactForm from "./components/contact-form.vue";

const contactPageApp = createApp({
  components: {
    ContactForm,
  },
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