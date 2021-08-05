<template>
    <div>
        <!-- 顶部导航栏 -->
        <nav class="navbar navbar-default navbar-fixed-top bg" role="navigation">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only"></span>
                    <span v-for="index in 3" :key="index" class="icon-bar"></span>
                </button>
                <a :href="'#Home'" class="navbar-brand IconTitle" style="cursor:pointer;">Kinron</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right lin-ul">
                    <li class="li-font" v-for="(item, index) in titleList" :key="index">
                        <a style="cursor:pointer;" @click="jump(item)">{{ item }}</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            titleList: ['Home', 'Paint', 'Diy', 'Video', 'Note'],
            pathList: ['/', '/paint', '/diy']
        }
    },
    methods: {
        jump(item) {
            let height = document.getElementById(item).offsetTop
            console.log(height)
            window.scrollTo({ 
                top: height, 
                behavior: "smooth" 
            })
        }
    }
}
</script>

<style scoped>
/**
* 手机相应样式
*/
@media (max-width: 768px) {
    .lin-ul {
        padding-left: 35px;
    }
}
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
.bg {
    background: rgb(54, 54, 54);
}
</style>