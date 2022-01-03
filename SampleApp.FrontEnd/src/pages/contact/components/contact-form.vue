<template>
  <div>
    <Form v-slot="{ values }">
      <Field name="email" type="email" />
      <Field name="password" type="password" />
      <!-- print form values -->
      <pre>{{ values }}</pre>
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Form, Field } from "vee-validate";

export default defineComponent({
  name: "contact-form",
  components: {
    Form,
    Field
  },
  setup() {

  }
});
</script>