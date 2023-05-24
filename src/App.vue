<template>
  <router-view> </router-view>
</template>

<script setup>
import { configure } from "vee-validate";
import "./config/vee validate/rules.js";
import customValMessages from "./config/vee validate/messages.js";

configure({
  ...customValMessages,
  validateOnInput: true,
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@400;700&display=swap");

body {
  background-color: #eaeaea;
  font-family: "Arial";
}
</style>
