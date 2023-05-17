<template>
  <base-wrapper image-file="/bike.png" page-num="4">
    <template #default>
      <div class="flex flex-col gap-10">
        <div>
          <p>
            რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
            რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
            განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
            ჩვენთან გადმოსვლის.
          </p>
          <p class="mt-4">
            პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
            ყოველდღიური კომუნიკაციაც გაიშვიათდა.
          </p>
        </div>
        <div>
          <group-label>
            რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
            სადაც ყველა სურვილისამებრ ჩაერთვება?*
          </group-label>
          <radio-input
            v-for="day in meetingDays"
            :id="day.value"
            :key="day.value"
            v-model="non_formal_meetings"
            name="non_formal_meetings"
            :value="day.value"
            :label="day.label"
            rules="required"
          />
        </div>
        <div>
          <group-label>
            კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
          </group-label>
          <radio-input
            v-for="day in officeWorkingDays"
            :id="day.value"
            :key="day.value"
            v-model="number_of_days_from_office"
            name="number_of_days_from_office"
            :value="day.value"
            :label="day.value"
            rules="required"
          />
        </div>
        <div>
          <group-label> რას ფიქრობ ფიზიკურ შეკრებებზე? </group-label>
          <FormTextarea name="what_about_meetings_in_live" />
        </div>
        <div>
          <group-label
            >რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას
            შეცვლიდი?
          </group-label>
          <FormTextarea name="tell_us_your_opinion_about_us" />
        </div>
        <div class="flex justify-end">
          <ending-button
            :should-allow-forward="shouldAllowForward"
          ></ending-button>
        </div>
      </div>
      <nav-wrapper>
        <backward-nav to="/vaccination"></backward-nav>
      </nav-wrapper>
    </template>
    <template #secondary-image>
      <transition appear name="politics" mode="in-out">
        <img
          src="/politics_heart.png"
          alt="Red circle secondary image"
          class="absolute top-56 ml-20 w-44 z-[-1]"
        />
      </transition>
    </template>
  </base-wrapper>
</template>

<script setup>
import { ref, watch, defineAsyncComponent } from "vue";
const FormTextarea = defineAsyncComponent(() =>
  import("../../components/form/textarea/FormTextarea.vue")
);
const EndingButton = defineAsyncComponent(() =>
  import("../../components/layout/nav/EndingButton.vue")
);
import { useStore } from "vuex";
import { useForm } from "vee-validate";

const store = useStore();

const { meta } = useForm();

const shouldAllowForward = ref(meta.value.valid);

watch(meta, () => {
  shouldAllowForward.value = meta.value.valid;
});

const meetingDays = store.getters.meetingDays;

const officeWorkingDays = store.getters.officeWorkingDays;

const non_formal_meetings = ref(store.getters.non_formal_meetings);

watch(non_formal_meetings, (value) => {
  store.dispatch("setInputValue", {
    name: "non_formal_meetings",
    value,
  });
});

const number_of_days_from_office = ref(
  store.getters.number_of_days_from_office
);

watch(number_of_days_from_office, (value) => {
  store.dispatch("setInputValue", {
    name: "number_of_days_from_office",
    value,
  });
});
</script>

<style scoped>
.politics-enter-from {
  top: 160px;
  margin-left: 48px;
  width: 176px;
  transform: scale(0.5);
}

.politics-enter-active {
  transition: all 0.3s;
}

.politics-enter-to {
  transform: scale(1);
}
</style>
