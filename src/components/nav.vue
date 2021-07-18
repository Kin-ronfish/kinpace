<template>
    <div>
        <!-- 顶部导航栏 -->
        <nav class="navbar navbar-default navbar-fixed-top" :class="'bg' + num" role="navigation">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only"></span>
                    <span v-for="index in 3" :key="index" class="icon-bar"></span>
                </button>
                <a class="navbar-brand IconTitle" style="cursor:pointer;" @click="handleNav('/')">Kinron</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right lin-ul">
                    <li class="li-font" v-for="(item, index) in titleList" :key="index">
                        <a style="cursor:pointer;" @click="handleNav(pathList[index])">{{ item }}</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        num: Number
    },
    data() {
        return {
            titleList: ['主页', '绘画', 'DIY', '生活', '总结'],
            pathList: ['/', '/paint', '/diy', '/live', '/note']
        }
    },
    methods: {
        handleNav(path) {
            this.$router.push(path)
        }
    }
}
</script>

<style scoped>
@media (min-width: 768px) {
    .lin-ul {
        padding-right: 50px;
    }
}
.IconTitle {
    font-size: 20px;
    padding-left: 50px;
    transition-duration: 500ms;
}
.IconTitle:hover {
    font-size: 23px;
    transition-duration: 500ms;
    text-shadow: 1px 1px 3px rgb(199, 222, 241);
}
a:hover {
    color: #fff !important;
}
a {
    color: rgb(202, 181, 213) !important;
}
.li-font {
    font-size: 18px;
    transition-duration: 500ms;
}
.li-font:hover {
    font-size: 19px;
    background: rgba(161, 161, 161, 0.205);
    transition-duration: 500ms;
}
.bg2 {
    background: rgb(27, 63, 85);
}
.bg3 {
    background: rgb(61, 85, 126);
}
.bg4 {
    background: rgb(69, 132, 99);
}
.bg5 {
    background: rgb(126, 102, 58);
}
</style>