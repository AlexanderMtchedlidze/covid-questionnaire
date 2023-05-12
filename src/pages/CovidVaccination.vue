<template>
  <base-wrapper image-file-name="doctor.png" page-num="3">
    <div class="flex flex-col gap-10">
      <div>
        <radio-label>უკვე აცრილი ხარ?*</radio-label>
        <form-radio
          v-for="op in vaccinatedOptions"
          :id="op.id"
          :key="op.id"
          v-model="vaccinated"
          name="vaccinated"
          :value="op.value"
          :label="op.label"
        />
        <ErrorMessage name="vaccinated" />
      </div>
      <div v-if="isVaccinated">
        <radio-label>აირჩიე რა ეტაპზე ხარ*</radio-label>
        <form-radio
          v-for="op in stageOptions"
          :id="op.value"
          :key="op.value"
          v-model="stage"
          name="stage"
          :value="op.value"
          :label="op.label"
        />
      </div>
      <div v-else-if="isNotVaccinated">
        <radio-label>რას ელოდები?*</radio-label>
        <form-radio
          v-for="op in waitingForOptions"
          :id="op.value"
          :key="op.value"
          v-model="waitingFor"
          name="waitingFor"
          :value="op.value"
          :label="op.label"
        />
      </div>
      <div v-if="vaccinatedAndNotRegistered" class="text-lg">
        <p>
          რომ არ გადადო, <br />
          ბარემ ახლავე დარეგისტრირდი
          <a href="https://booking.moh.gov.ge/" class="text-dark-cyan"
            >https://booking.moh.gov.ge/
          </a>
        </p>
      </div>
      <div v-else-if="notVaccinatedAndPlanningRegistering" class="text-lg">
        <p>
          ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის
          გაკეთება.
        </p>

        <p class="mt-3">
          👉 რეგისტრაციის ბმული <br />
          <a href="https://booking.moh.gov.ge/" class="text-dark-cyan"
            >https://booking.moh.gov.ge/</a
          >
        </p>
      </div>
    </div>
    <nav-wrapper>
      <backward-nav to="/condition"></backward-nav>
      <forward-nav
        to="/politics"
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

const vaccinatedOptions = store.getters.vaccinatedOptions;
const stageOptions = store.getters.stageOptions;
const waitingForOptions = store.getters.waitingForOptions;

const { meta } = useForm();

const shouldAllowForward = ref(!!store.getters.isVaccinationPageCompleted);

watch(meta, () => {
  shouldAllowForward.value = !!store.getters.isVaccinationPageCompleted;
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

const vaccinatedAndNotRegistered = computed(
  () =>
    vaccinated.value === "yes" &&
    stage.value === "first_dose_and_not_registered"
);

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

const notVaccinatedAndPlanningRegistering = computed(
  () =>
    vaccinated.value === "no" && waitingFor.value === "recovered_and_planning"
);

watch(waitingFor, (value) => {
  store.dispatch({
    type: "setInputValue",
    name: "waitingFor",
    value,
  });
});
</script>
