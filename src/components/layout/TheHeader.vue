<template>
  <header
    class="flex justify-between items-center pb-4 border-b-2 border-b-gray-black"
  >
    <img
      src="../../assets/icons/named logo.svg"
      alt="Redberry Company Logo"
      class="h-6"
    />
    <span class="text-3xl font-semibold flex gap-2">
      <span>{{ currentPageNum }}</span>
      <span>/</span>
      <span>{{ ALL_PAGES_NUM }}</span>
    </span>
  </header>
</template>

<script setup>
import { defineProps, computed } from "vue";

const ALL_PAGES_NUM = 4;

const props = defineProps({
  currentPageNum: {
    type: String,
    required: true,
  },
});

const currentPageOfAllPages = computed(
  () => props.currentPageNum + "/" + ALL_PAGES_NUM
);
</script>
