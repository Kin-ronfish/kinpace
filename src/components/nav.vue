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
                    <form class="navbar-form navbar-left" role="search">
                        <div class="form-group">
                            <input type="text" class="form-control" />
                        </div> <button type="submit" class="btn btn-default">Submit</button>
                    </form>
                    <li class="li-font animated bounceIn" v-for="(item, index) in titleList" :key="index">
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
  .IconTitle {
    font-size: 20px;
    padding-left: 50px;
  }
  .li-font {
    font-size: 18px;
  }
  .li-font:hover {
    font-size: 20px;
  }
}
.bg2 {
    background: rgb(236, 214, 240);
}
.bg3 {
    background: rgb(111, 169, 240);
}
.bg4 {
    background: rgb(124, 233, 177);
}
.bg5 {
    background: rgb(241, 196, 110);
}
</style>