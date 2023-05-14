<template>
  <textarea
    :id="name"
    v-model.trim="value"
    :name="name"
    rows="6"
    class="w-full bg-transparent border border-black py-2 px-4"
  ></textarea>
</template>

<script setup>
import { ref, watch } from "vue";
import { useStore } from "vuex";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const store = useStore();

const value = ref(store.getters[props.name]);

watch(value, (newVal) => {
  store.dispatch({
    type: "setInputValue",
    name: props.name,
    value: newVal,
  });
});
</script>
