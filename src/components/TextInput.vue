<template>
  <div>
    <input-label v-if="label" :for="name" class="font-bold text-[22px]">{{
      label
    }}</input-label>
    <Field
      :id="name"
      v-model.trim="value"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :rules="rules"
      class="bg-transparent mb-1 border border-dark-gray mt-3 py-6 px-5 w-full text-lg placeholder:text-dark-gray text-dark-gray h-12"
    />
    <div class="ml-5">
      <ErrorMessage :name="name" class="text-invalid" />
    </div>
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
  // eslint-disable-next-line vue/require-default-prop
  rules: {
    type: [String, Object],
    required: false,
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
