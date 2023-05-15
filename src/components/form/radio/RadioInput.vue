<template>
  <div class="flex items-center gap-5 mb-2">
    <Field
      :id="id"
      v-model="model"
      :value="value"
      :name="name"
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
  modelValue: {
    required: true,
    type: [String, Boolean],
  },
  value: { required: true, type: [String, Boolean] },
});

const model = props.modelValue;

function setValue() {
  emit("update:modelValue", props.value);
}
</script>
