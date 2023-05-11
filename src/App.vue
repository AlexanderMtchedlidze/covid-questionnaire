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
@import url("https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@700&display=swap");

body {
  background-color: #eaeaea;
}
</style>
