<template>
  <div>
    <label :for="name" class="block font-bold text-xl">{{ label }}*</label>
    <input
      :type="type"
      :id="name"
      :placeholder="placeholder"
      class="bg-transparent border border-black mt-2 py-3 px-4 w-full text-lg placeholder-gray-500"
    />
  </div>
</template>

<script setup>
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
    default: 'text',
  },
  placeholder: {
    type: String,
    required: true,
  }
});
console.log(props.label);
</script>
