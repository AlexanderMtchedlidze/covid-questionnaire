<template>
  <router-view v-slot="{ Component }">
    <transition mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script setup>
import { configure } from "vee-validate";
import "./config/vee validate/rules.js"
import customValMessages from "./config/vee validate/messages.js";

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
  transition: all .3s;
}

.v-enter-to {
  opacity: 1;
}
</style>
