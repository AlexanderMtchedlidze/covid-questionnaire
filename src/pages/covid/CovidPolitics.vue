<template>
  <base-wrapper image-file-name="bike.png" page-num="4">
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
          v-model="meetingFrequency"
          name="meetingFrequency"
          :value="day.value"
          :label="day.label"
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
          v-model="officeWorkFrequency"
          name="officeWorkFrequency"
          :value="day.value"
          :label="day.label"
        />
      </div>
      <div>
        <group-label> რას ფიქრობ ფიზიკურ შეკრებებზე? </group-label>
        <FormTextarea name="opinionAboutMeetings" />
      </div>
      <div>
        <group-label
          >რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას
          შეცვლიდი?
        </group-label>
        <FormTextarea name="opinionAboutEnvironment" />
      </div>
      <div class="flex justify-end">
       <ending-button :should-allow-forward="shouldAllowForward"></ending-button>
      </div>
    </div>
    <nav-wrapper>
      <backward-nav to="/vaccination"></backward-nav>
    </nav-wrapper>
  </base-wrapper>
</template>

<script setup>
import FormTextarea from "../../components/form/textarea/FormTextarea.vue";
import EndingButton from "../../components/layout/nav/EndingButton.vue";
import { ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();

const shouldAllowForward = ref(!!store.getters.isPoliticsPageCompleted);

const meetingDays = store.getters.meetingDays;

const officeWorkingDays = store.getters.officeWorkingDays;

const meetingFrequency = ref(store.getters.meetingFrequency);

watch(meetingFrequency, (value) => {
  shouldAllowForward.value = ref(!!store.getters.isPoliticsPageCompleted);
  store.dispatch("setInputValue", {
    name: "meetingFrequency",
    value,
  });
});

const officeWorkFrequency = ref(store.getters.officeWorkFrequency);

watch(officeWorkFrequency, (value) => {
  shouldAllowForward.value = ref(!!store.getters.isPoliticsPageCompleted);
  store.dispatch("setInputValue", {
    name: "officeWorkFrequency",
    value,
  });
});
</script>
