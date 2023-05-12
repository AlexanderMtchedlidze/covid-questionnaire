<template>
  <base-wrapper image-file-name="doctor.png" page-num="3">
    <div class="flex flex-col gap-10">
      <div>
        <radio-label>უკვე აცრილი ხარ?*</radio-label>
        <form-radio
          id="vaccinated_yes"
          v-model="vaccinated"
          name="vaccinated"
          value="yes"
          label="კი"
        />
        <form-radio
          id="vaccinated_no"
          v-model="vaccinated"
          name="vaccinated"
          value="no"
          label="არა"
        />
        <ErrorMessage name="vaccinated" />
      </div>
      <div v-if="isVaccinated">
        <radio-label>აირჩიე რა ეტაპზე ხარ*</radio-label>
        <form-radio
          id="first_dose_and_registered"
          v-model="stage"
          name="stage"
          value="first_dose_and_registered"
          label="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
        />
        <form-radio
          id="fully_vaccinated"
          v-model="stage"
          name="stage"
          value="fully_vaccinated"
          label="სრულად აცრილი ვარ"
        />
        <form-radio
          id="first_dose_and_not_registered"
          v-model="stage"
          name="stage"
          value="first_dose_and_not_registered"
          label="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
        />
      </div>
      <div v-else-if="isNotVaccinated">
        <radio-label>რას ელოდები?*</radio-label>
        <form-radio
          id="first_dose_and_registered"
          v-model="waitingFor"
          name="waitingFor"
          value="first_dose_and_registered"
          label="დარეგისტრირებული ვარ და ველოდები რიცხვს"
        />
        <form-radio
          id="fully_vaccinated"
          v-model="waitingFor"
          name="waitingFor"
          value="fully_vaccinated"
          label="არ ვგეგმავ"
        />
        <form-radio
          id="first_dose_and_not_registered"
          v-model="waitingFor"
          name="waitingFor"
          value="first_dose_and_not_registered"
          label="გადატანილი მაქვს და ვგეგმავ აცრას"
        />
      </div>
    </div>
    <nav-wrapper>
      <backward-nav to="/condition"></backward-nav>
      <forward-nav
        to="/tips"
        :should-allow-forward="shouldAllowForward"
      ></forward-nav>
    </nav-wrapper>
  </base-wrapper>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useForm, ErrorMessage } from "vee-validate";
import { useStore } from "vuex";

const store = useStore();

const { meta } = useForm();

const shouldAllowForward = ref(meta.value.valid && meta.value.dirty);

watch(meta, (newValue) => {
  shouldAllowForward.value = newValue.valid && newValue.dirty;
});

const vaccinated = ref(store.getters.vaccinated);

watch(vaccinated, (value) => {
  store.dispatch({
    type: "setInputValue",
    name: "vaccinated",
    value,
  });
});

const stage = ref(store.getters.stage);

watch(stage, (value) => {
  store.dispatch({
    type: "setInputValue",
    name: "stage",
    value,
  });
});

const isVaccinated = computed(() => {
  return vaccinated.value === "yes";
});

const isNotVaccinated = computed(() => {
  return vaccinated.value === "no";
});

const waitingFor = ref(store.getters.waitingFor);

watch(waitingFor, (value) => {
  store.dispatch({
    type: "setInputValue",
    name: "waitingFor",
    value,
  });
});
</script>
