<template>
  <label
    :for="props.for"
    class="block text-lg"
    :class="{ 'font-bold': props.asterisk }"
  >
    <span>
      <slot></slot>
      <span v-if="asterisk"> * </span>
    </span>
  </label>
</template>

<script setup>
const props = defineProps({
  for: {
    type: String,
    required: true,
  },
  asterisk: {
    type: Boolean,
    required: false,
    default: true,
  },
});
</script>
