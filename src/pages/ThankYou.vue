<template>
  <div class="flex flex-col justify-center items-center h-screen bg-dark-gray">
    <transition name="sparkle-left" appear>
      <img
        ref="bigSparkle"
        src="/sparkle.svg"
        alt="Big sparkle on the left"
        class="h-10 absolute -ml-44 -mt-20"
      />
    </transition>
    <div>
      <transition name="paragraph" appear>
        <p class="font-bold text-6xl tracking-widest text-white animate-appear">
          მადლობა
        </p>
      </transition>
    </div>
    <transition name="sparkle-right" appear>
      <img
        ref="smallSparkle"
        src="/sparkle.svg"
        alt="Big sparkle on the right"
        class="h-6 ml-44 mt-20 absolute"
      />
    </transition>
  </div>
</template>

<style scoped>
.sparkle-left-enter-from {
  transform: translate(70px, 50px) scale(0);
  opacity: 0;
}

.sparkle-right-enter-from {
  transform: translate(-100px, -20px) scale(0);
  opacity: 0;
}

.sparkle-left-enter-active,
.sparkle-right-enter-active {
  transition: all .7s ease-in;
}

.sparkle-left-enter-to {
  transform: translateX(100px, 50px) scale(1);
  opacity: 1;
}

.sparkle-right-enter-to {
  transform: translateX(100px, 10px) scale(1);
  opacity: 1;
}

.paragraph-enter-from {
  opacity: 0;
}

.paragraph-enter-active {
  transition: all 0.3s ease-in;
}

.paragraph-enter-to {
  opacity: 1;
}
</style>
