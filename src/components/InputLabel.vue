<template>
  <div>
    <label :for="props.for" class="block">
      <span>
        <slot></slot>
      </span>
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  for: {
    type: String,
    required: true,
  },
});
</script>
