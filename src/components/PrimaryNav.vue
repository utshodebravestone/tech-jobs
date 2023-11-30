<template>
  <nav
    class="w-full h-20 flex justify-start items-center px-6 border-b border-custom-gray-1"
  >
    <a class="text-4xl font-medium" data-test="brand">{{ brand }}</a>

    <ul class="flex ml-10">
      <li
        v-for="menu in menus"
        :key="menu.name"
        data-test="menu"
        class="ml-10 first:ml-0"
      >
        <a
          :href="menu.link"
          class="hover:opacity-50 transition-opacity duration-300"
        >
          {{ menu.name }}
        </a>
      </li>
    </ul>

    <div class="ml-auto">
      <div v-if="signedIn" class="flex items-center gap-5">
        <a
          href=""
          class="flex items-center gap-2.5 text-custom-blue-1 font-bold"
          >My applications
          <font-awesome-icon :icon="['fas', 'square-arrow-up-right']" />
        </a>
        <profile-image data-test="profile-image" />
      </div>
      <action-button
        v-else
        data-test="sign-in-button"
        type="primary"
        text="Sign In"
        @click="signIn"
      />
    </div>
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
