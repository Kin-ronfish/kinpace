<template>
    <div>
        <!-- 顶部导航栏 -->
        <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" style="cursor:pointer;" @click="handleNav('/')">Kinron</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <form class="navbar-form navbar-left" role="search">
                <div class="form-group">
                    <input type="text" class="form-control" />
                </div> <button type="submit" class="btn btn-default">Submit</button>
                </form>
                <ul class="nav navbar-nav navbar-right lin-ul">
                <li :class="num === 1 ? 'active' : ''">
                    <a style="cursor:pointer;" @click="handleNav('/')">主页</a>
                </li>
                <li :class="num === 2 ? 'active' : ''">
                    <a  style="cursor:pointer;" @click="handleNav('/paint')">绘画</a>
                </li>
                <li :class="num === 3 ? 'active' : ''">
                    <a  style="cursor:pointer;" @click="handleNav('/diy')">DIY</a>
                </li>
                <li :class="num === 4 ? 'active' : ''">
                    <a  style="cursor:pointer;" @click="handleNav('/live')">生活</a>
                </li>
                <li :class="num === 5 ? 'active' : ''">
                    <a  style="cursor:pointer;" @click="handleNav('/note')">总结</a>
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
</style>