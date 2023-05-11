<template>
  <div class="mx-44 py-10 h-screen">
    <header>
      <the-header current-page-num="1"></the-header>
    </header>
    <main class="flex justify-between gap-24">
      <div class="flex-1 pt-12">
        <Form v-if="validationSchema" :validation-schema="validationSchema">
          <slot></slot>
        </Form>
        
        <slot v-else></slot>
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
import { Form } from "vee-validate";
const TheHeader = defineAsyncComponent(() => import("../layout/TheHeader.vue"));
const props = defineProps({
  imageFileName: {
    type: String,
    required: true,
  },
  validationSchema: {
    type: Object,
    required: false,
  },
});
const imageSrcPath = computed(
  () => new URL("/images/" + props.imageFileName, import.meta.url)
);
</script>
