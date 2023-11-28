<template>
  <nav
    class="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-3 border-b border-custom-gray-1"
  >
    <a class="text-3xl">{{ brand }}</a>
  </nav>
</template>

<script>
export default {
  name: "PrimaryNav",
  data: () => ({ brand: "Tech Jobs" }),
};
</script>
