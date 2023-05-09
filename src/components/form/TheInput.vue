<template>
  <div>
    <label :for="name" class="block font-bold text-xl">{{ label }}*</label>
    <Field
      :type="type"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :rules="rules"
      class="bg-transparent border border-black mt-2 py-3 px-4 w-full text-lg placeholder-gray-500"
    />
    <ErrorMessage :name="name" />
  </div>
</template>

<script setup>
import { Field, ErrorMessage } from "vee-validate";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: "text",
  },
  placeholder: {
    type: String,
    required: true,
  },
  rules: {
    type: [String, Object],
    required: true,
  }
});
</script>
