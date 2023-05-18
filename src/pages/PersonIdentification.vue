<template>
  <base-wrapper image-file="/identification.png" page-num="1">
    <template #default>
      <div class="flex flex-col gap-8">
        <text-input
          name="first_name"
          label="სახელი*"
          placeholder="იოსებ"
          :rules="nameRules"
        />
        <text-input
          name="last_name"
          label="გვარი*"
          placeholder="ჯუღაშვილი"
          :rules="nameRules"
        />
        <text-input
          name="email"
          label="მეილი*"
          type="email"
          placeholder="fbi@redberry.ge"
          rules="required|email|redberryEmail"
        />
      </div>
      <div class="py-10">
        <img src="/form_line.svg" alt="footer line" />
        <p class="font-bold text-gray-500 pt-2">
          *-ით მონიშნული ველების შევსება <br />
          სავალდებულოა
        </p>
      </div>
      <nav-wrapper>
        <forward-nav
          :should-allow-forward="shouldAllowForward"
          :to="conditionLink"
        ></forward-nav>
      </nav-wrapper>
    </template>
    <template #secondary-image>
      <transition appear name="identification" mode="in-out">
        <img
          src="/people_stroke.png"
          alt="People stroke secondary image"
          class="absolute top-80 w-96 ml-24 z-[-1]"
        />
      </transition>
    </template>
  </base-wrapper>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useForm } from "vee-validate";

const nameRules = computed(() => ({
  required: true,
  min: 3,
}));

const { meta } = useForm();

const shouldAllowForward = ref(meta.value.valid && meta.value.dirty);

watch(meta, (val) => {
  shouldAllowForward.value = val.valid;
});

const conditionLink = computed(() => {
  return { path: "/condition", query: { from: "identification" } };
});
</script>

<style scoped>
.identification-enter-from {
  width: 100px;
}

.identification-enter-active {
  transition: all 0.3s;
}

.identification-enter-to {
  width: 384px;
}
</style>
