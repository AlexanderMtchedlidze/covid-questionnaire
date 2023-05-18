<template>
  <router-link
    v-if="shouldAllowForward"
    to="/thank-you"
    :class="buttonClass"
    @click="sendAllGatheredData"
  >
    დასრულება
  </router-link>
  <button v-else :class="buttonClass" class="button__inactive">
    დასრულება
  </button>
</template>

<script setup>
import axios from "axios";
import { computed } from "vue";

const props = defineProps({
  shouldAllowForward: {
    type: Boolean,
    required: true,
  },
});

const ISOFormattedDate = (dateString) => {
  const [day, month, year] = dateString.split("/");

  const date = new Date(`20${year}`, month - 1, day);

  return date.toISOString();
};

const sendAllGatheredData = async () => {
  let antibodies = {};

  if (localStorage.getItem("number")) {
    antibodies.number = +localStorage.getItem("number");
  }
  if (localStorage.getItem("test_date")) {
    antibodies.test_date = ISOFormattedDate(localStorage.getItem("test_date"));
  }
  let object = {
    first_name: localStorage.getItem("first_name"),
    last_name: localStorage.getItem("last_name"),
    email: localStorage.getItem("email"),
    had_covid: localStorage.getItem("had_covid"),
    had_vaccine: JSON.parse(localStorage.getItem("had_vaccine")),
    non_formal_meetings: localStorage.getItem("non_formal_meetings"),
    number_of_days_from_office: localStorage.getItem(
      "number_of_days_from_office"
    ),
  };
  if (localStorage.getItem("had_antibody_test")) {
    object.had_antibody_test = JSON.parse(
      localStorage.getItem("had_antibody_test")
    );
  }
  if (antibodies) {
    object.antibodies = antibodies;
  }
  if (localStorage.getItem("vaccination_stage")) {
    object.vaccination_stage = localStorage.getItem("vaccination_stage");
  }
  if (localStorage.getItem("covid_sickness_date")) {
    object.covid_sickness_date = ISOFormattedDate(
      localStorage.getItem("covid_sickness_date")
    );
  }
  if (localStorage.getItem("i_am_waiting")) {
    object.i_am_waiting = localStorage.getItem("i_am_waiting");
  }
  if (localStorage.getItem("what_about_meetings_in_live")) {
    object.what_about_meetings_in_live = localStorage.getItem(
      "what_about_meetings_in_live"
    );
  }
  if (localStorage.getItem("tell_us_your_opinion_about_us")) {
    object.tell_us_your_opinion_about_us = localStorage.getItem(
      "tell_us_your_opinion_about_us"
    );
  }
  try {
    const response = await axios.post(
      "https://covid19.devtest.ge/api/create",
      object
    );
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

const buttonClass = computed(() => [
  "text-white",
  "px-6",
  "py-2",
  "rounded-full",
  "font-bold",
  {
    "bg-dark-cyan": props.shouldAllowForward,
    "bg-light-cyan": !props.shouldAllowForward,
  },
]);
</script>

<style scoped>
.button__inactive {
  cursor: default;
}
</style>
