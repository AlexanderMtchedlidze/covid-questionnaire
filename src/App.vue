<template>
  <router-view></router-view>
</template>

<script setup>
import { configure } from "vee-validate";
import customValMessages from "./lang/messages.js";

configure({
  ...customValMessages,
  validateOnInput: true,
});
</script>

<style>
@font-face {
  font-family: "Arial";
  src: url("./assets/fonts/bpg_arial_2009.ttf");
}

body {
  background-color: #eaeaea;
}
</style>
