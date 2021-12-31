<template>
  <div class="list-page">
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "List",
  setup() {
    const list = ref([
      "List Element 1",
      "List Element 2",
      "List Element 3"
    ]);

    return {
      list
    }
  }
});

</script>