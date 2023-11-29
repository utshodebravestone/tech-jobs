<template>
  <nav
    class="w-full h-20 flex justify-between items-center px-6 border-b border-custom-gray-1"
  >
    <a class="text-4xl font-medium" data-test="brand">{{ brand }}</a>

    <ul class="flex items-center gap-10">
      <li v-for="menu in menus" :key="menu.name" data-test="menu">
        <a
          :href="menu.link"
          class="hover:opacity-50 transition-opacity duration-300"
        >
          {{ menu.name }}
        </a>
      </li>
    </ul>

    <profile-image v-if="signedIn" data-test="profile-image" />
    <action-button
      v-else
      data-test="sign-in-button"
      type="primary"
      text="Sign In"
      @click="signIn"
    />
  </nav>
</template>

<script>
import ActionButton from "@/components/shared/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";

export default {
  name: "PrimaryNav",

  components: { ActionButton, ProfileImage },

  data: () => ({
    brand: "Tech Jobs",
    menus: [
      { name: "Teams", link: "" },
      { name: "Location", link: "" },
      { name: "Career in Tech", link: "" },
      { name: "Students", link: "" },
      { name: "Jobs", link: "" },
    ],
    signedIn: false,
  }),

  methods: {
    signIn() {
      this.signedIn = !this.signedIn;
    },
  },
};
</script>
