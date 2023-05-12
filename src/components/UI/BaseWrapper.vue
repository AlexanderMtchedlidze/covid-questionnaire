<template>
  <div class="mx-44 py-10 h-screen">
    <header>
      <the-header :current-page-num="pageNum"></the-header>
    </header>
    <main class="flex justify-between gap-24">
      <div class="flex-1 pt-12 pb-4">
        <slot></slot>
      </div>
      <div class="w-1/2">
        <img
          :src="imageSrcPath"
          alt="Image related to the left placed form content"
        />
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent } from "vue";
const TheHeader = defineAsyncComponent(() => import("../layout/TheHeader.vue"));
const props = defineProps({
  imageFileName: {
    type: String,
    required: true,
  },
  pageNum: {
    type: String,
    required: true,
  },
});
const imageSrcPath = computed(
  () => new URL("/images/" + props.imageFileName, import.meta.url)
);
</script>
