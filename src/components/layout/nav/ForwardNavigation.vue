<template>
  <router-link v-if="props.shouldAllowForward" :to="props.to">
    <img
      src="/icons/forward active.svg"
      alt="Allowed forward navigation vector"
    />
  </router-link>
  <router-link v-else :to="props.to">
    <img
      src="/icons/forward inactive.svg"
      alt="Unallowed forward navigation vector"
    />
  </router-link>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  shouldAllowForward: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>
