<template>
    <div>
        <!-- 顶部导航栏 -->
        <nav class="navbar navbar-default navbar-fixed-top bg" role="navigation">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only"></span>
                    <span v-for="index in 3" :key="index" class="icon-bar"></span>
                </button>
                <a class="navbar-brand IconTitle" style="cursor:pointer;" @click="person">Kinron</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right lin-ul">
                    <li class="li-font" v-for="(item, index) in titleList" :key="index">
                        <a style="cursor:pointer;" @click="setFlag(index)">{{ item }}</a>
                    </li>
                </ul>
            </div>
        </nav>
        <el-drawer
            :visible.sync="drawer"
            :size="size"
            direction="ltr"
            :withHeader="false"
            :show-close="false">
            <div class="bg0">
                <div class="content">
                    <el-image class="headImg aminated rotateIn a1" :src="require('../assets/head.jpg')"></el-image>
                    <div class="word aminated rotateInUpLeft a2">Kinron</div>
                </div>
                <div class="word_box">
                    <div class="quto a3 aminated fadeInUp">
                        微笑面对生活，生活给予甘甜。
                    </div>
                    <div class="quto a4 aminated fadeInUp">
                        生活就像一本无字之书，学习让书里的内容更加充实，努力让内容更加精彩。
                    </div>
                    <div class="quto a5 aminated fadeInUp">
                        将美好的时光化作真实可见的东西，每当拿起它时，曾经为此的努力依然历历在目。
                    </div>
                </div>
            </div>
        </el-drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            titleList: ['Paint', 'Diy', 'Video'],
            pathList: ['/', '/paint', '/diy'],
            drawer: false,
            size: '30%'
        }
    },
    created(){
        if(window.innerWidth < 768) {
            this.size = '60%'
        }
    },
    methods: {
        setFlag(index) {
            let height = document.getElementById('Home').offsetTop
            window.scrollTo({ 
                top: height-50, 
                behavior: "smooth" 
            })
            this.$emit('setFlag',index)
        },
        person() {
           this.drawer = true
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
    .headImg {
        margin-top: 80px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: rgb(219, 221, 236);
        border: 2px solid #fff;
        box-shadow: 3px 3px 5px rgb(204, 201, 201);
        transition-duration: 500ms;
    }
    .headImg:hover {
        width: 50px;
        height: 50px;
        transition-duration: 500ms;
    }
    .quto {
        color: #ccc;
        font-family: '楷体';
        font-size: 14px;
        text-indent: 30px;
    }
}
@media (min-width: 768px) {
    .lin-ul {
        padding-right: 50px;
    }
    .headImg {
        margin-top: 80px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: rgb(219, 221, 236);
        border: 5px solid #fff;
        box-shadow: 3px 3px 5px rgb(204, 201, 201);
        transition-duration: 500ms;
    }
    .headImg:hover {
        width: 90px;
        height: 90px;
        transform: scale(1.1);
        transition-duration: 500ms;
    }
    .quto {
        color: #ccc;
        font-family: '楷体';
        font-size: 18px;
        text-indent: 35px;
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
.bg0 {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url('../assets/img/bg0.jpg');
    background-position: center;
    background-size: cover;
}
.content {
    display: flex;
    align-items: center;
    margin-top: 5px;
    flex-direction: column;
}
.word {
    font-size:20px;
    margin-top:10px;
    color: #eee;
}
.a1 {
    animation-delay: 300ms;
    animation-duration: 1300ms;
}
.a2 {
    animation-delay: 1s;
}
.a3 {
    animation-delay: 1600ms;
}
.a4 {
    animation-delay: 2200ms;
}
.a5 {
    animation-delay: 2800ms;
}
.word_box {
    padding: 5px 20px;
}

</style>