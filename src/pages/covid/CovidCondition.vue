<template>
  <base-wrapper image-file-name="vaccinate.png" page-num="2">
    <div class="flex flex-col gap-10">
      <div>
        <group-label>გაქვს გადატანილი Covid-19?*</group-label>
        <radio-input
          v-for="op in hadCovidOptions"
          :id="op.id"
          :key="op.id"
          v-model="had_covid"
          name="had_covid"
          :value="op.value"
          :label="op.label"
        />
      </div>
      <div v-if="hadCovid">
        <group-label> ანტისხეულების ტესტი გაქვს გაკეთებული?* </group-label>
        <radio-input
          v-for="op in hadAntibodyTestOptions"
          :id="op.id"
          :key="op.id"
          v-model="had_antibody_test"
          name="had_antibody_test"
          :value="op.value"
          :label="op.label"
        />
      </div>
      <div v-if="hadAntibodyTest">
        <group-label>
          თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
          რაოდენობა?*
        </group-label>
        <text-input name="test_date" placeholder="რიცხვი" />
        <text-input
          name="number"
          type="number"
          placeholder="ანტისხეულების რაოდენობა"
        />
      </div>
      <div v-if="didntHaveAntibodyTest">
        <group-label>
          მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
        </group-label>
        <text-input
          name="covid_sickness_date"
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
import { useForm } from "vee-validate";
import { useStore } from "vuex";

const store = useStore();

const hadCovidOptions = store.getters.hadCovidOptions;
const hadAntibodyTestOptions = store.getters.hadAntibodyTestOptions;

const { meta } = useForm();

const shouldAllowForward = ref(
  meta.value.valid && !!store.getters.isConditionPageCompleted
);

watch(meta, (newVal) => {
  shouldAllowForward.value =
    newVal.valid && !!store.getters.isConditionPageCompleted;
});

const had_covid = ref(store.getters.had_covid);
watch(had_covid, (value) => {
  store.dispatch({
    type: "setInputValue",
    name: "had_covid",
    value,
  });
});

const had_antibody_test = ref(store.getters.had_antibody_test);
watch(had_antibody_test, (newVal) => {
  store.dispatch({
    type: "setInputValue",
    name: "had_antibody_test",
    value: newVal,
  });
});

const hadCovid = computed(() => had_covid.value === "yes");

const hadAntibodyTest = computed(
  () => had_covid.value === "yes" && had_antibody_test.value
);
const didntHaveAntibodyTest = computed(
  () =>
    had_covid.value === "yes" && had_antibody_test.value === false
);
</script>
