<template>
  <router-link v-if="shouldAllowForward" :to="to">
    <img
      src="/icons/nav/forward active.svg"
      alt="Allowed forward navigation vector"
    />
  </router-link>
  <img
    v-else
    src="/icons/nav/forward inactive.svg"
    alt="Unallowed forward navigation vector"
  />
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
  shouldAllowForward: {
    type: Boolean,
    required: true,
  },
});
</script>
