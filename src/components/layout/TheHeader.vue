<template>
  <header
    class="flex justify-between items-center pb-4 border-b-2 border-b-dark-gray"
  >
    <img src="/images/main logo.png" alt="Redberry Company Logo" class="h-6" />
    <span class="text-3xl font-semibold flex gap-2">
      <span>{{ currentPageNum }}</span>
      <span>/</span>
      <span>{{ ALL_PAGES_NUM }}</span>
    </span>
  </header>
</template>

<script setup>
const ALL_PAGES_NUM = 4;

defineProps({
  currentPageNum: {
    type: String,
    required: true,
  },
});
</script>
