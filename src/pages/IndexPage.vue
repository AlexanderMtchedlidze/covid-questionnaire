<template>
  <section
    class="h-screen flex flex-col justify-center items-center bg-gray-20 gap-16"
  >
    <img
      src="/main_logo.svg"
      alt="Main Logo of a Company"
      class="animate-logo-appear absolute top-44"
      @animationend="startTextAnimation"
    />
    <transition name="text">
      <h3 v-if="!isAnimating" class="text-center font-bold text-3xl mt-36">
        <router-link to="/identification" class="hover:text-shadow-start">
          კითხვარის <br />
          დაწყება
        </router-link>
      </h3>
    </transition>
  </section>
</template>

<script setup>
import { ref } from "vue";

const isAnimating = ref(true);

const startTextAnimation = () => {
  setTimeout(() => {
    isAnimating.value = false;
  }, 500);
};
</script>

<style scoped>
.text-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.text-enter-active {
  transition: all 0.5s ease-in;
}

.text-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
</style>
