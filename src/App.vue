<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import uni from '../js/uni.webview.1.5.3'
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