<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    uni.postMessage(
      {
        data: {
          type: "landscape",
          content: "",
        },
      },
      "*"
    );
  },
  beforeDestroy() {
    uni.postMessage(
      {
        data: {
          type: "portrait",
          content: "",
        },
      },
      "*"
    );
  },
};
</script>

<style scoped>
</style>