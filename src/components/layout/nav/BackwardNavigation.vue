<template>
  <router-link :to="props.to">
    <img
      src="/icons/backward active.svg"
      alt="Allowed forward navigation vector"
    />
  </router-link>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>
