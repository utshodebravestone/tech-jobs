<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",

  props: {
    text: { required: true },
    type: { required: false, default: "primary" },
  },

  computed: {
    buttonClass() {
      return {
        [this.type]: true,
      };
    },
  },
};
</script>

<style scoped>
button {
  @apply px-6 py-3 font-medium rounded transition-all duration-200;
}

.primary {
  @apply bg-custom-blue-1 text-white hover:shadow-custom-blue;
}

.secondary {
  @apply text-custom-blue-1 hover:text-white hover:bg-custom-blue-2;
}
</style>
