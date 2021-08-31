<template>
    <div style="height:1500px;">
        <div class="box">
            <div class="left">xx</div>
            <div class="line"></div>
            <div class="right">yy</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        created() {
            window.scrollTo({ 
                top: 0, 
                behavior: "smooth" 
            })
        }
    }
</script>

<style scoped>
.box {
    margin-top: 50px;
    display: flex;
    justify-content: center;
}
.left {
    margin-top: 50px;
    padding: 10px 20px;
    color: #fff;
}
.line {
    border: 1px solid #ddd;
    height: 100px;
}
.right {
    padding: 10px 20px;
    color: #fff;
}
</style>