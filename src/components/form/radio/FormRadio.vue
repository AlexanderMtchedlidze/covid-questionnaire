<template>
  <div class="flex items-center gap-5 mb-2">
    <Field :id="id" :name="name" type="radio" :value="value" @click="setValue(value)" />
    <input-label :for="id" :asterisk="false">{{ label }}</input-label>
  </div>
</template>

<script setup>
import { Field } from "vee-validate";
const emit = defineEmits(["update:modelValue"]);
defineProps({
  name: {
    required: true,
    type: String,
  },
  label: {
    required: true,
    type: String,
  },
  id: {
    required: true,
    type: String,
  },
  value: { required: true, type: String },
});

function setValue(val) {
  emit("update:modelValue", val);
}
</script>
