<template>
  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script setup>
import { configure } from "vee-validate";
import "./validation/rules.js";
import customValMessages from "./lang/messages.js";

configure({
  ...customValMessages,
  validateOnInput: true,
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@700&display=swap");

body {
  background-color: #eaeaea;
}

.v-enter-from {
  opacity: 0;
}

.v-enter-active {
  transition: all .2s ease-out;
}

.v-enter-to {
  opacity: 1;
}
</style>
