<template>
  <base-wrapper image-file-name="identification.png">
    <form>
      <div class="flex flex-col gap-8">
        <the-input name="name" label="სახელი" placeholder="იოსებ"> </the-input>
        <the-input name="surname" label="გვარი" placeholder="ჯუღაშვილი"> </the-input>
        <the-input name="email" label="იმეილი" type="email" placeholder="fbi@redberry.ge"> </the-input>
      </div>
    </form>
    <div class="mt-10 absolute">
      <img src="/icons/form line.svg" alt="" class="absolute">
      <p class="font-bold text-gray-500 pt-2">*-ით მონიშნული ველების შევსება <br> სავალდებულოა</p>
    </div>
  </base-wrapper>
</template>

<script setup>
import BaseWrapper from "../components/UI/BaseWrapper.vue";
</script>
