<template>
    <div>
      <Nav :num="1" />
      <div class="container">
        <div>
          <video style="width:100%;margin-top:60px;" controls>
            <source src="../assets/video/2011-2015.mp4" type="video/mp4">
          </video>
        </div>
        <div>
          <video style="width:100%;margin-top:20px;" controls>
            <source src="../assets/video/2016-2019.mp4" type="video/mp4">
          </video>
        </div>
      </div>
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