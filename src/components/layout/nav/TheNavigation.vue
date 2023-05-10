<template>
  <nav>
    <ul>
      <li>
        <router-link v-if="props.from" :to="props.from">
          <img
            src="/icons/backward active.svg"
            alt="Allowed backward navigation vector"
          />
        </router-link>
      </li>
      <li>
        <router-link
          v-if="props.to"
          :to="props.forward"
          :disabled="props.shouldAllowForward"
        >
          <img
            src="/icons/forward inactive.svg"
            alt="Unallowed forward navigation vector"
          />
        </router-link>
        <router-link v-else :to="props.to">
          <img
            src="/icons/forward active.svg"
            alt="Allowed forward navigation vector"
          />
        </router-link>
      </li>
    </ul>
  </nav>
</template>i

<script setup>
const props = defineProps({
  from: {
    type: String,
    required: false,
    default: "",
  },
  to: {
    type: String,
    required: false,
    default: "",
  },
  shouldAllowForward: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>
