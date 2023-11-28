<template>
  <nav
    class="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-3 border-b border-custom-gray-1"
  >
    <a class="text-4xl" data-test="brand">{{ brand }}</a>

    <ul class="flex items-center gap-10">
      <li v-for="menu in menus" :key="menu.name" data-test="menu">
        <a
          :href="menu.link"
          class="text-xl hover:opacity-50 transition-opacity duration-300"
          >{{ menu.name }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "PrimaryNav",
  data: () => ({
    brand: "Tech Jobs",
    menus: [
      { name: "Teams", link: "" },
      { name: "Location", link: "" },
      { name: "Career in Tech", link: "" },
      { name: "Students", link: "" },
      { name: "Jobs", link: "" },
    ],
  }),
};
</script>
