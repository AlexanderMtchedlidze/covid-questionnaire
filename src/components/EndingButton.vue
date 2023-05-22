<template>
  <router-link
    v-if="shouldAllowForward"
    to="/thank-you"
    :class="buttonClass"
    @click="sendAllGatheredData"
  >
    დასრულება
  </router-link>
  <button v-else :class="buttonClass" class="button__inactive">
    დასრულება
  </button>
</template>

<script setup>
import { computed } from "vue";
import sendAllGatheredData from "../services/axios/sendAllGatheredData.js";

const props = defineProps({
  shouldAllowForward: {
    type: Boolean,
    required: true,
  },
});

const buttonClass = computed(() => [
  "text-white",
  "px-6",
  "py-2",
  "rounded-full",
  "font-bold",
  {
    "bg-dark-cyan": props.shouldAllowForward,
    "bg-light-cyan": !props.shouldAllowForward,
  },
]);
</script>

<style scoped>
.button__inactive {
  cursor: default;
}
</style>
