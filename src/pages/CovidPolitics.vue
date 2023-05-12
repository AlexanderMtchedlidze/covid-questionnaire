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
        <radio-label>
          რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
          სადაც ყველა სურვილისამებრ ჩაერთვება?*
        </radio-label>
        <form-radio
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
        <radio-label>
          კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
        </radio-label>
        <form-radio
          v-for="day in officeWorkingDays"
          :id="day.value"
          :key="day.value"
          v-model="officeWorkFrequency"
          name="officeWorkFrequency"
          :value="day.value"
          :label="day.label"
        />
      </div>
    </div>
    <nav-wrapper>
      <backward-nav to="/vaccination"></backward-nav>
      <forward-nav
        to="/thanks"
        :should-allow-forward="shouldAllowForward"
      ></forward-nav>
    </nav-wrapper>
  </base-wrapper>
</template>

<script setup>
import { ref, watch } from "vue";
import { useForm } from "vee-validate";
import { useStore } from "vuex";

const store = useStore();

const meetingDays = store.getters.meetingDays;

const officeWorkingDays = store.getters.officeWorkingDays;

const { meta } = useForm();

const shouldAllowForward = ref(
  meta.value.valid && store.getters.isConditionPageCompleted
);

watch(meta, (newVal) => {
  shouldAllowForward.value =
    newVal.valid && store.getters.isConditionPageCompleted;
});
</script>
