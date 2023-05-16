<template>
  <div class="flex items-center gap-5 mb-2">
    <Field
      :id="id"
      :value="value"
      :name="name"
      v-model="model"
      type="radio"
      class="accent-dark-gray w-4 h-4"
      @click="setValue"
    />
    <input-label :for="id">{{ label }}</input-label>
  </div>
</template>

<script setup>
import { Field } from "vee-validate";
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
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
  value: { required: true, type: [String, Boolean] },
  modelValue: {
    type: [String, Boolean],
    required: true,
  },
});

const model = props.modelValue;

function setValue() {
  emit("update:modelValue", props.value);
}
</script>
