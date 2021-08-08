<template>
    <div>
        <h3 class="text-center video animated flipInX">Video</h3>
        <div class="a1 animated fadeInLeft" style="margin-top:30px;font-size:30px;">2011-2015年作品合辑</div>
        <div class="a1 animated fadeIn">
            <video style="width:100%;" controls>
                <source src="../assets/video/2011-2015.mp4" type="video/mp4">
            </video>
        </div>
        <div class="a2 animated fadeInLeft" style="margin-top:20px;font-size:30px;">2016-2019年作品合辑</div>
        <div class="a2 animated fadeIn">
            <video style="width:100%;" controls>
                <source src="../assets/video/2016-2019.mp4" type="video/mp4">
            </video>
        </div>
    </div>
</template>
<style scoped>
.video {
  color: #fff;
  background-color: rgb(77, 66, 93);
  padding: 12px;
}
.a1 {
    color: #fff;
    animation-delay: 1s;
}
.a2 {
    color: #fff;
    animation-delay: 1500ms;
}
</style>