<template>
  <base-wrapper image-file-name="identification.png">
    <form>
      <div class="flex flex-col gap-8">
        <div>
          <label for="name" class="block font-bold text-xl">სახელი*</label>
          <input type="text" id="name" class="bg-transparent border" />
        </div>
        <div>
          <label for="surname" class="block font-bold text-xl">გვარი*</label>
          <input type="text" id="surname" class="bg-transparent border" />
        </div>
        <div>
          <label for="email" class="block font-bold text-xl">იმეილი*</label>
          <input type="email" id="email" class="bg-transparent border" />
        </div>
      </div>
    </form>
  </base-wrapper>
</template>

<script setup>
import BaseWrapper from "../components/UI/BaseWrapper.vue";
</script>
