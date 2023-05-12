<template>
  <header
    class="flex justify-between pb-4 border-b-2 border-b-dark-gray"
  >
    <img src="/images/main logo.png" alt="Redberry Company Logo" class="h-6" />
    <span class="text-3xl font-semibold font-Anonymous-Pro flex gap-2">
      <span>{{ currentPageNum }}</span>
      <span>/</span>
      <span>4</span>
    </span>
  </header>
</template>

<script setup>
defineProps({
  currentPageNum: {
    type: String,
    required: true,
  },
});
</script>
