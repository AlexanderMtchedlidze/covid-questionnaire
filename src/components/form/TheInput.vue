<template>
  <div>
    <label :for="name" class="block font-bold text-xl">{{ label }}*</label>
    <Field
      :id="name"
      v-model.trim="value"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :rules="rules"
      class="bg-transparent mb-1 border border-black mt-2 py-3 px-4 w-full text-lg placeholder-gray-500"
      @input="onInput"
      @blur="onInputTouch"
    />
    <ErrorMessage :name="name" class="text-invalid" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Field, ErrorMessage } from "vee-validate";
import { useStore } from "vuex";
const store = useStore();
const emit = defineEmits(["inputHasTouched"]);
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
  },
});
const value = ref(store.getters[props.name]);
const onInput = () => {
  emit("inputHasTouched");
  store.dispatch({
    type: "setInputValue",
    name: props.name,
    value: value.value,
  });
};
const onInputTouch = () => {
  emit("inputHasTouched")
}
</script>
