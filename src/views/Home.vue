<template>
    <div>
      <Nav :num="1" />
      <div class="container">
        <div style="margin-top:60px;font-size:30px;">2011-2015年作品合辑</div>
        <div>
          <video style="width:100%;" controls>
            <source src="../assets/video/2011-2015.mp4" type="video/mp4">
          </video>
        </div>
        <div style="margin-top:20px;font-size:30px;">2016-2019年作品合辑</div>
        <div>
          <video style="width:100%;" controls>
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