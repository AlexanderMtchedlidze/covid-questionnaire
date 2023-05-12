<template>
  <base-wrapper image-file-name="vaccinate.png" page-num="2">
    <div class="flex flex-col gap-10">
      <div>
        <radio-label>გაქვს გადატანილი Covid-19?*</radio-label>
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
      </div>
      <div v-if="isHavingCovid">
        <radio-label> ანტისხეულების ტესტი გაქვს გაკეთებული?* </radio-label>
        <form-radio
          id="had_antibodies_yes"
          v-model="hadAntibodies"
          name="had_antibodies"
          value="yes"
          label="კი"
        ></form-radio>
        <form-radio
          id="had_antibodies_no"
          v-model="hadAntibodies"
          name="had_antibodies"
          value="no"
          label="არა"
        ></form-radio>
      </div>
      <div v-if="isHavingAntibodies">
        <radio-label>
          თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
          რაოდენობა?*
        </radio-label>
        <form-input
          name="antibodiesDate"
          rules="required|date_format"
          placeholder="რიცხვი"
        />
        <form-input
          name="antibodiesQuantity"
          type="number"
          placeholder="ანტისხეულების რაოდენობა"
          rules="required"
        />
      </div>
      <div v-if="isNotHavingAntibodies">
        <radio-label>
          მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
        </radio-label>
        <form-input
          name="covidDate"
          rules="required|date_format"
          placeholder="დდ/თთ/წწ"
        />
      </div>
    </div>
    <nav-wrapper>
      <backward-nav to="/identification"></backward-nav>
      <forward-nav
        to="/vaccination"
        :should-allow-forward="shouldAllowForward"
      ></forward-nav>
    </nav-wrapper>
  </base-wrapper>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { ErrorMessage, useForm } from "vee-validate";
import { useStore } from "vuex";

const store = useStore();

const { meta } = useForm();

const shouldAllowForward = ref(
  meta.value.valid && store.getters.isConditionPageCompleted
);

watch(meta, (newVal) => {
  shouldAllowForward.value =
    newVal.valid && store.getters.isConditionPageCompleted;
});

const isHavingCovid = computed(() => hadCovid.value === "yes");
const isHavingAntibodies = computed(
  () => hadCovid.value === "yes" && hadAntibodies.value === "yes"
);
const isNotHavingAntibodies = computed(
  () => hadCovid.value === "yes" && hadAntibodies.value === "no"
);

const hadCovid = ref(store.getters.hadCovid);
watch(hadCovid, (newVal) => {
  store.dispatch({
    type: "setInputValue",
    name: "hadCovid",
    value: newVal,
  });
});

const hadAntibodies = ref(store.getters.hadAntibodies);
watch(hadAntibodies, (newVal) => {
  store.dispatch({
    type: "setInputValue",
    name: "hadAntibodies",
    value: newVal,
  });
});
</script>
