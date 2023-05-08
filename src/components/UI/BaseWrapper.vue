<template>
  <div class="mx-44 py-16">
    <header>
      <the-header current-page-num="1"></the-header>
    </header>
    <main class="flex justify-between gap-36">
      <div class="flex-1 pt-12">
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
import { computed } from "vue";
import TheHeader from "../layout/TheHeader.vue";
const props = defineProps({
  imageFileName: {
    type: String,
    required: true,
  },
});
const imageSrcPath = computed(
  () => new URL("/images/" + props.imageFileName, import.meta.url)
);
</script>
