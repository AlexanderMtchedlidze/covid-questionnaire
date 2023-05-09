<template>
  <base-wrapper image-file-name="identification.png">
    <Form>
      <div class="flex flex-col gap-8">
        <the-input
          name="name"
          label="სახელი"
          placeholder="იოსებ"
          :rules="nameRules"
        >
        </the-input>
        <the-input
          name="surname"
          label="გვარი"
          placeholder="ჯუღაშვილი"
          :rules="nameRules"
        >
        </the-input>
        <the-input
          name="mail"
          label="მეილი"
          type="email"
          placeholder="fbi@redberry.ge"
          rules="required|email|redberryEmail"
        >
        </the-input>
      </div>
    </Form>
    <div class="mt-10 absolute">
      <img src="/icons/form line.svg" alt="footer line" class="absolute" />
      <p class="font-bold text-gray-500 pt-2">
        *-ით მონიშნული ველების შევსება <br />
        სავალდებულოა
      </p>
    </div>
  </base-wrapper>
</template>

<script setup>
import BaseWrapper from "../components/UI/BaseWrapper.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { Form } from "vee-validate";
const store = useStore();
const minValue = store.getters["validation/minValue"];
const nameRules = computed(() => ({
  required: true,
  min: minValue,
}));
</script>
