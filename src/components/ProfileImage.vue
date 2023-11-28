<template>
  <img
    :src="user"
    alt="user image"
    class="h-10 w-10 object-contain rounded-full"
  />
</template>

<script>
import user from "@/assets/img/user.png";

export default {
  name: "ProfileImage",
  data: () => ({ user }),
};
</script>
