<template>
  <base-wrapper image-file-name="identification.png" page-num="1">
    <div class="flex flex-col gap-8">
      <text-input
        name="name"
        label="სახელი*"
        placeholder="იოსებ"
        :rules="nameRules"
      />
      <text-input
        name="surname"
        label="გვარი*"
        placeholder="ჯუღაშვილი"
        :rules="nameRules"
      />
      <text-input
        name="mail"
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
