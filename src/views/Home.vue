<template>
    <div>
      <Nav :num="1" />
        <video style="width:80%;" controls>
          <source src="../assets/video/2011-2015.mp4" type="video/mp4">
        </video>
      <video style="width:80%;" controls>
        <source src="../assets/video/2016-2019.mp4" type="video/mp4">
      </video>
    </div>
</template>

<script>
import Nav from '../components/nav.vue'
    export default {
        components: { Nav },
    }
</script>

<style scoped>

</style>