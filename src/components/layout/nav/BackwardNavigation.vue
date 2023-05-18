<template>
  <router-link :to="props.to">
    <img src="/backward_active.svg" alt="Allowed forward navigation vector" />
  </router-link>
</template>

<script setup>
const props = defineProps({
  to: {
    type: [String, Object],
    required: true,
  },
});
</script>
