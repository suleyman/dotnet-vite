<template>
  <div class="page-detail">
    <button @click="increase">{{ store.state.counter }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "detail",
  setup() {
    const store = useStore();

    const increase = () => store.dispatch("increase", 1);

    return {
      store,
      increase
    };
  }
});
</script>