<template>
  <base-wrapper image-file-name="vaccinate.png" page-num="2">
    <div class="flex flex-col gap-10">
      <div>
        <group-label>გაქვს გადატანილი Covid-19?*</group-label>
        <radio-input
          v-for="op in hadCovidOptions"
          :id="op.id"
          :key="op.id"
          v-model="hadCovid"
          name="hadCovid"
          :value="op.value"
          :label="op.label"
        />
        <ErrorMessage name="had-covid" />
      </div>
      <div v-if="isHavingCovid">
        <group-label> ანტისხეულების ტესტი გაქვს გაკეთებული?* </group-label>
        <radio-input
          v-for="op in hadAntibodiesOptions"
          :id="op.id"
          :key="op.id"
          name="hadAntibodies"
          :value="op.value"
          :label="op.label"
        />
      </div>
      <div v-if="isHavingAntibodies">
        <group-label>
          თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
          რაოდენობა?*
        </group-label>
        <text-input
          name="antibodiesDate"
          rules="required|date_format"
          placeholder="რიცხვი"
        />
        <text-input
          name="antibodiesQuantity"
          type="number"
          placeholder="ანტისხეულების რაოდენობა"
          rules="required"
        />
      </div>
      <div v-if="isNotHavingAntibodies">
        <group-label>
          მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
        </group-label>
        <text-input
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

const hadCovidOptions = store.getters.hadCovidOptions;
const hadAntibodiesOptions = store.getters.hadAntibodiesOptions;

const { meta } = useForm();

const shouldAllowForward = ref(
  meta.value.valid && !!store.getters.isConditionPageCompleted
);

watch(meta, (newVal) => {
  shouldAllowForward.value =
    newVal.valid && !!store.getters.isConditionPageCompleted;
});

const isHavingCovid = computed(() => hadCovid.value === "yes");
const isHavingAntibodies = computed(
  () => hadCovid.value === "yes" && hadAntibodies.value === "yes"
);
const isNotHavingAntibodies = computed(
  () => hadCovid.value === "yes" && hadAntibodies.value === "no"
);

const hadCovid = ref(store.getters.hadCovid);
watch(hadCovid, (value) => {
  store.dispatch({
    type: "setInputValue",
    name: "hadCovid",
    value,
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
