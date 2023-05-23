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
body {
  background-color: #eaeaea;
}
</style>
