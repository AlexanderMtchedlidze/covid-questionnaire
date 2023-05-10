<template>
  <base-wrapper image-file-name="identification.png">
    <div class="flex flex-col gap-8">
      <the-input
        name="name"
        label="სახელი"
        placeholder="იოსებ"
        :rules="nameRules"
        @inputHasTouched="loadErrors"
      >
      </the-input>
      <the-input
        name="surname"
        label="გვარი"
        placeholder="ჯუღაშვილი"
        :rules="nameRules"
        @inputHasTouched="loadErrors"
      >
      </the-input>
      <the-input
        name="mail"
        label="მეილი"
        type="email"
        placeholder="fbi@redberry.ge"
        rules="required|email|redberryEmail"
        @inputHasTouched="loadErrors"
      >
      </the-input>
    </div>
    <div class="py-10 absolute">
      <img src="/icons/form line.svg" alt="footer line" class="absolute" />
      <p class="font-bold text-gray-500 pt-2">
        *-ით მონიშნული ველების შევსება <br />
        სავალდებულოა
      </p>
    </div>
    <the-forward
      :should-allow-forward="shouldAllowForward"
      to="/errors"
    ></the-forward>
  </base-wrapper>
</template>

<script setup>
import BaseWrapper from "../components/UI/BaseWrapper.vue";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { useForm } from "vee-validate";

const store = useStore();
const minValue = store.getters["validation/minValue"];
const nameRules = computed(() => ({
  required: true,
  min: minValue,
}));

const { errors } = useForm();

let canTriggerWatcher = false;

const areThereNoErrors = JSON.parse(localStorage.getItem("errorsOnIdentification"));
const shouldAllowForward = ref(areThereNoErrors);

watch(errors, (newVal) => {
  if (canTriggerWatcher) {
    const areThereNoErrors = !Object.keys(newVal).length;
    shouldAllowForward.value = areThereNoErrors;
    localStorage.setItem("errorsOnIdentification", areThereNoErrors);
  }
});

const loadErrors = () => {
  canTriggerWatcher = true;
}
</script>
