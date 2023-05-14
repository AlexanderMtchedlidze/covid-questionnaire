<template>
  <base-wrapper
    image-file="/images/identification/identification.png"
    page-num="1"
  >
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
        <img src="/icons/form line.svg" alt="footer line" />
        <p class="font-bold text-gray-500 pt-2">
          *-ით მონიშნული ველების შევსება <br />
          სავალდებულოა
        </p>
      </div>
      <nav-wrapper>
        <forward-nav
          :should-allow-forward="shouldAllowForward"
          to="/condition"
        ></forward-nav>
      </nav-wrapper>
    </template>
    <template #secondary-image>
      <img
        src="/images/identification/people stroke.png"
        alt="People stroke secondary image"
        class="absolute top-80 w-96 ml-24 opacity-70"
      />
    </template>
  </base-wrapper>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useForm } from "vee-validate";

const nameRules = computed(() => ({
  required: true,
  min: 2,
}));

const { meta } = useForm();

const shouldAllowForward = ref(meta.value.valid && meta.value.dirty);

watch(meta, (val) => {
  shouldAllowForward.value = val.valid;
});
</script>
