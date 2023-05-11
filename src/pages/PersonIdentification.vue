<template>
  <base-form image-file-name="identification.png">
    <div class="flex flex-col gap-8">
      <form-input
        name="name"
        label="სახელი"
        placeholder="იოსებ"
        :rules="nameRules"
      >
      </form-input>
      <form-input
        name="surname"
        label="გვარი"
        placeholder="ჯუღაშვილი"
        :rules="nameRules"
      >
      </form-input>
      <form-input
        name="mail"
        label="მეილი"
        type="email"
        placeholder="fbi@redberry.ge"
        rules="required|email|redberryEmail"
      >
      </form-input>
    </div>
    <div class="py-10">
      <img src="/icons/form line.svg" alt="footer line" />
      <p class="font-bold text-gray-500 pt-2">
        *-ით მონიშნული ველების შევსება <br />
        სავალდებულოა
      </p>
    </div>
    <nav-wrapper>
      <forward-nav
        :should-allow-forward="shouldAllowForward"
        to="/condition"
      ></forward-nav>
    </nav-wrapper>
  </base-form>
</template>

<script setup>
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

const shouldAllowForward = ref(localStorage.getItem("errors") || false);
console.log(shouldAllowForward.value)

watch(errors, (newVal) => {
  console.log(newVal);
  shouldAllowForward.value = Object.keys(newVal).length === 0;
  localStorage.setItem("errors", Object.keys(newVal).length === 0);
  console.log(localStorage.getItem("errors"))
});
</script>
