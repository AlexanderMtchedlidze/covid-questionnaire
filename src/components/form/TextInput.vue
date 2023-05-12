<template>
  <div>
    <input-label v-if="label" :for="name" class="font-bold">{{
      label
    }}</input-label>
    <Field
      :id="name"
      v-model.trim="value"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :rules="rules"
      class="bg-transparent mb-1 border border-black mt-2 py-2 px-4 w-full text-lg placeholder-gray-500"
    />
    <ErrorMessage :name="name" class="text-invalid text-sm" />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { Field, ErrorMessage } from "vee-validate";
import { useStore } from "vuex";
const store = useStore();
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
    default: "",
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
  },
});
const value = ref(store.getters[props.name]);
watch(value, (value) => {
  store.dispatch({
    type: "setInputValue",
    name: props.name,
    value,
  });
});
</script>
