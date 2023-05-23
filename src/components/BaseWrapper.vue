<template>
  <div class="mx-20 md:mx-28 lg:mx-36 xl:mx-44 py-10 h-screen">
    <div class="sticky top-0 z-10">
      <the-header :current-page-num="pageNum" />
    </div>
    <main class="flex justify-between gap-24 pt-12">
      <div class="flex-1 pb-4">
        <slot></slot>
      </div>
      <div class="w-1/2 h-12 hidden lg:block">
        <img
          :src="imageFile"
          alt="Image related to the left placed form content"
          class="max-w-[600px]"
        />
        <slot name="secondary-image"> </slot>
      </div>
    </main>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
const TheHeader = defineAsyncComponent(() => import("./TheHeader.vue"));
defineProps({
  imageFile: {
    type: String,
    required: true,
  },
  pageNum: {
    type: String,
    required: true,
  },
});
</script>
