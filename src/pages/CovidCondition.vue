<template>
  <base-form image-file-name="vaccinate.png" :validation-schema="schema">
    <p class="block font-bold text-xl mb-3">გაქვს გადატანილი Covid-19?*</p>
    <form-radio
      id="had_covid_yes"
      v-model="hadCovid"
      name="had_covid"
      value="yes"
      label="კი"
    />
    <form-radio
      id="had_covid_no"
      v-model="hadCovid"
      name="had_covid"
      value="no"
      label="არა"
    />
    <form-radio
      id="had_covid_now"
      v-model="hadCovid"
      name="had_covid"
      value="now"
      label="ახლა მაქვს"
    />
    <ErrorMessage name="had-covid" />
    <nav-wrapper>
      <backward-nav to="/identification"></backward-nav>
      <forward-nav to="/test"></forward-nav>
    </nav-wrapper>
  </base-form>
</template>

<script setup>
import { ref, watch } from "vue";
import { ErrorMessage } from "vee-validate";
import { useStore } from "vuex";
const store = useStore();
const schema = {
  had_covid: (value) => {
    if (value) {
      return true;
    }

    return "You must choose a drink";
  },
};
const hadCovid = ref(store.getters.hadCovid || null);
console.log(localStorage.getItem("hadCovid"))
watch(hadCovid, (newVal) => {
  store.dispatch({
    type: "setInputValue",
    name: "hadCovid",
    value: newVal,
  });
});
</script>
