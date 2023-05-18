<template>
  <router-link v-if="shouldAllowForward" :to="to">
    <img
      src="/forward_active.svg"
      alt="Allowed forward navigation vector"
    />
  </router-link>
  <img
    v-else
    src="/forward_inactive.svg"
    alt="Unallowed forward navigation vector"
  />
</template>

<script setup>
defineProps({
  to: {
    type: [String, Object],
    required: true,
  },
  shouldAllowForward: {
    type: Boolean,
    required: true,
  },
});
</script>
