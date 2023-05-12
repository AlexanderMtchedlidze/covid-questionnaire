<template>
  <router-link v-if="shouldAllowForward" to="/thanks" :class="buttonClass">
    დასრულება
  </router-link>
  <button v-else :class="buttonClass">დასრულება</button>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  shouldAllowForward: {
    type: Boolean,
    required: true,
  },
});
const buttonClass = computed(() => ({
  "text-white": true,
  "px-6": true,
  "py-2": true,
  "rounded-full": true,
  "font-bold": true,
  "bg-dark-cyan": props.shouldAllowForward,
  "bg-light-cyan": !props.shouldAllowForward,
}));
</script>
