<template>
  <nav
    class="w-full h-14 px-6 bg-white border-b border-custom-gray-1 flex justify-between items-center"
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
