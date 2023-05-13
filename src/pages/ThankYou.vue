<template>
  <div
    class="flex flex-col justify-center items-center h-screen bg-dark-gray relative"
  >
    <transition name="sparkle">
      <div v-if="!isAnimating">
        <img
          ref="bigSparkle"
          src="/icons/sparkle.svg"
          alt="Big sparkle on the left"
          class="h-10 absolute -ml-36 -mt-12"
        />
      </div>
    </transition>
    <div>
      <p
        class="font-bold text-6xl tracking-widest text-white animate-appear"
        @animationend="startSparkleAnimation"
      >
        მადლობა
      </p>
    </div>
    <transition name="sparkle">
      <div v-if="!isAnimating">
        <img
          ref="smallSparkle"
          src="/icons/sparkle.svg"
          alt="Big sparkle on the right"
          class="h-6 ml-28 mt-2 absolute"
        />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

store.dispatch("sendAllGatheredData");

const bigSparkle = ref(null);
const smallSparkle = ref(null);
const isAnimating = ref(true);

const startSparkleAnimation = () => {
  isAnimating.value = false;
};
</script>

<style scoped>
.sparkle-enter-from {
  opacity: 0;
}

.sparkle-enter-active {
  transition: all 0.3s ease-in;
}

.sparkle-enter-to {
  opacity: 1;
}
</style>
