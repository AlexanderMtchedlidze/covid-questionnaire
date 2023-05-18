<template>
  <base-wrapper image-file="/doctor.png" page-num="3">
    <template #default>
      <div class="flex flex-col gap-10">
        <div>
          <group-label>უკვე აცრილი ხარ?*</group-label>
          <radio-input
            v-for="op in hadVaccineOptions"
            :id="op.id"
            :key="op.id"
            v-model="had_vaccine"
            name="had_vaccine"
            :value="op.value"
            :label="op.label"
            rules="required"
          />
        </div>
        <div v-if="isVaccinated">
          <group-label>აირჩიე რა ეტაპზე ხარ*</group-label>
          <radio-input
            v-for="op in vaccinationStageOptions"
            :id="op.value"
            :key="op.id"
            v-model="vaccination_stage"
            name="vaccination_stage"
            :value="op.value"
            :label="op.label"
            rules="required"
          />
        </div>
        <div v-else-if="isNotVaccinated">
          <group-label>რას ელოდები?*</group-label>
          <radio-input
            v-for="op in iAmWaitingForOptions"
            :id="op.value"
            :key="op.id"
            v-model="i_am_waiting"
            name="i_am_waiting"
            :value="op.value"
            :label="op.label"
            rules="required"
          />
        </div>
        <div v-if="vaccinatedAndNotRegisteredOnTheSecond" class="text-lg">
          <p>
            რომ არ გადადო, <br />
            ბარემ ახლავე დარეგისტრირდი
            <a href="https://booking.moh.gov.ge/" class="text-dark-cyan"
              >https://booking.moh.gov.ge/
            </a>
          </p>
        </div>
        <div v-else-if="notVaccinatedAndNotRegistered" class="text-lg">
          <p>
            ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ
            ვაქცინის გაკეთება.
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
        <backward-nav :to="conditionLink"></backward-nav>
        <forward-nav
          to="/politics"
          :should-allow-forward="shouldAllowForward"
        ></forward-nav>
      </nav-wrapper>
    </template>
    <template #secondary-image>
      <transition name="start" appear mode="in-out">
        <img
          src="/vaccination_star.png"
          alt="Red circle secondary image"
          class="absolute top-40 ml-12 w-44 z-[-1]"
        />
      </transition>
    </template>
  </base-wrapper>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useForm } from "vee-validate";
import { useStore } from "vuex";

const store = useStore();

const hadVaccineOptions = store.getters.hadVaccineOptions;
const vaccinationStageOptions = store.getters.vaccinationStageOptions;
const iAmWaitingForOptions = store.getters.iAmWaitingForOptions;

const { meta } = useForm();

const shouldAllowForward = ref(meta.value.valid);

watch(meta, (newVal) => {
  shouldAllowForward.value = newVal.valid;
});

const had_vaccine = ref(store.getters.had_vaccine);

watch(had_vaccine, (value) => {
  store.dispatch({
    type: "setInputValue",
    name: "had_vaccine",
    value,
  });
});

const vaccination_stage = ref(store.getters.vaccination_stage);

watch(vaccination_stage, (value) => {
  store.dispatch({
    type: "setInputValue",
    name: "vaccination_stage",
    value,
  });
});

const vaccinatedAndNotRegisteredOnTheSecond = computed(
  () =>
    had_vaccine.value &&
    vaccination_stage.value === "first_dosage_and_not_registered_yet"
);

const isVaccinated = computed(() => had_vaccine.value === "true");

const isNotVaccinated = computed(() => had_vaccine.value === "false");

const i_am_waiting = ref(store.getters.i_am_waiting);

watch(i_am_waiting, (value) => {
  store.dispatch({
    type: "setInputValue",
    name: "i_am_waiting",
    value,
  });
});

const notVaccinatedAndNotRegistered = computed(
  () =>
    had_vaccine.value === false &&
    i_am_waiting.value === "had_covid_and_planning_to_be_vaccinated"
);

const conditionLink = computed(() => {
  return { path: "/condition", query: { from: "vaccination" } };
});
</script>

<style>
.start-enter-from {
  width: 176px;
  height: 176px;
  margin-left: 48px;
  top: 320px;
  transform: scale(0.5);
}

.start-enter-active {
  transition: all 0.3s;
}

.start-enter-to {
  top: 160px;
  margin-left: 48px;
  width: 176px;
  transform: scale(1);
}
</style>
