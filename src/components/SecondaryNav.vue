<template>
  <nav
    class="w-full h-14 px-8 bg-white border-b border-custom-gray-1 flex justify-between items-center"
  >
    <div v-if="onJobsPage" class="flex gap-2.5 items-center">
      <font-awesome-icon :icon="['fas', 'search']" />
      <p>
        <span class="text-green-700" data-test="jobs-count">{{
          jobsCount
        }}</span>
        jobs matched
      </p>
    </div>

    <div class="flex gap-5">
      <a href="" class="hover:opacity-50 transition-opacity duration-300"
        >Saved Jobs</a
      >
      <a href="" class="hover:opacity-50 transition-opacity duration-300"
        >Jobs Alert</a
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "SecondaryNav",

  data: () => ({
    jobsCount: 420,
    onJobsPage: true,
  }),
};
</script>
