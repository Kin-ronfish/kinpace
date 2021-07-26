<template>
    <div>
        <img class="bg" :src="require('../assets/img/星空5.jpg')" alt="">
        <vue-particles
            class="particles"
            color="#cbb8ea"
            :particleOpacity="0.7"
            :particlesNumber="50"
            shapeType="circle"
            :particleSize="4"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            :clickEffect="true"
            clickMode="push"
        >
        </vue-particles>
        <div :style="'margin:60px ' + marginDistance + ' 20px;'" class="carousel slide" id="carousel-260043">
            <ol class="carousel-indicators">
                <li class="active" data-slide-to="0" data-target="#carousel-260043">
                </li>
                <li data-slide-to="1" data-target="#carousel-260043">
                </li>
                <li data-slide-to="2" data-target="#carousel-260043">
                </li>
            </ol>
            <div class="carousel-inner">
                <div class="item active">
                <img :style="'width:' + windowWidth + ';height:' + windowHeight + ';'" :src="list[24].img" />
                <div class="carousel-caption">
                    <h4 id="title" class="animated fadeInUp">{{ list[24].value }}</h4>
                    <p id="quto" class="animated fadeInLeft">{{ list[24].word }}</p>
                </div>
                </div>
                <div class="item">
                <img :style="'width:' + windowWidth + ';height:' + windowHeight + ';'" :src="list[25].img" />
                <div class="carousel-caption">
                    <h4 id="title" class="animated fadeInUp">{{ list[25].value }}</h4>
                    <p id="quto" class="animated fadeInRight">{{ list[25].word }}</p>
                </div>
                </div>
                <div class="item">
                <img :style="'width:' + windowWidth + ';height:' + windowHeight + ';'" :src="list[28].img" />
                <div class="carousel-caption">
                    <h4 id="title" class="animated fadeInUp">{{ list[28].value }}</h4>
                    <p id="quto" class="animated fadeInDown">{{ list[28].word }}</p>
                </div>
                </div>
            </div> <a class="left carousel-control" href="#carousel-260043" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a> <a class="right carousel-control" href="#carousel-260043" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
        </div>
        <div class="glyphicon glyphicon-chevron-down iconCenter animated fadeInDown" @click="go"></div>
        <div class="container">
            <div class="clearfix row">
                <div class="col-md-12 column">
                    <Nav :num="2" />
                    <div class="animated fadeInUp box">
                        <img class="boxImg" :src="require('@/assets/Kin.png')" />&nbsp;
                        <div class="myWork">我的作品</div>
                    </div>
                    <!-- 作品预览列表 -->
                    <div class="row" :style="'display:' + imgListShow + ';'">
                        <div class="col-md-4" v-for="(item, index) in pageList" :key="index">
                            <div class="thumbnail animated fadeInUp paintImg">
                                <img alt="300x200" :src="item.img" />
                                <div class="content animated fadeInUp">
                                    <span class="icon glyphicon glyphicon-download-alt btn" @click="download(index)"></span>
                                    <span class="icon glyphicon glyphicon-search btn" @click="look(index)"></span>
                                    <span class="icon glyphicon glyphicon-link btn"></span>
                                </div>
                                <div class="time animated fadeInDown">{{item.time}}</div>
                                <div class="caption">
                                    <span v-for="(value, key) in item.label" :key="key">
                                        <span class="label" :class="'label-' + type[item.color[key]]">{{value}}</span>
                                        &nbsp;
                                    </span>
                                    <h3 class="value">{{ item.value }}</h3>
                                    <p class="word">{{ item.word }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 列表分页 -->
                    <div class="page animated fadeInUp" :style="'display:' + pageShow + ';'">
                        <el-pagination
                            @current-change="handleCurrentChange"
                            background
                            :page-size="6"
                            layout="prev, pager, next"
                            :total="list.length">
                        </el-pagination>
                    </div>
                    <!-- 作品时间表 -->
                    <div class="row">
                        <div class="col-md-4 workList" :style="'display:' + workListShow + ';'">
                            <div class="text-center animated fadeInLeft workListName">作品时间表</div>
                            <div class="timeList animated fadeInRight">
                                <ul style="color:#fff;" v-for="(item, index) in list" :key="index">
                                    <li>{{item.value}} —— {{item.time}}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-8 note" :style="'display:' + noteShow + ';'">
                            <h4 class="animated fadeInRight">成功建立在失败之后，或出现于失败之中。</h4>
                            <h4 class="animated fadeInLeft">当你抛弃了感兴趣的东西，还会觉得做什么都有趣吗？</h4>
                            <h4 class="animated fadeInRight">生活就像一本无字之书，学习让书里的内容更加充实，努力让内容更加精彩。</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-backtop :bottom="50">
            <div class="el-icon-arrow-up" :style="goTop"></div>
        </el-backtop>
        <el-dialog width="100%" :title="pageList[imgIndex].value" :visible.sync="dialogTableVisible">
            <el-image class="lookImg" :src="pageList[imgIndex].img"></el-image>
            <div class="text-center">{{ pageList[imgIndex].word }}</div>
        </el-dialog>
    </div>
</template>

<script>
import Nav from '@/components/nav.vue'
import cloneDeep from 'lodash/cloneDeep'
    export default {
        data() {
            return {
                list: cloneDeep(this.loadAll()),
                pageList: this.loadAll().slice(0, 6),
                dialogTableVisible: false,
                imgIndex: 0,
                scrollHeight: 0, // 滚动条位置
                windowHeight: '', // 窗口高度
                windowWidth: '', // 窗口宽度
                marginDistance: '',
                scrollTop: 0,
                imgListShow: 'none',
                pageShow: 'none',
                workListShow: 'none',
                noteShow: 'none',
                type: ['default', 'primary', 'success', 'info', 'warning', 'danger'],
                goTop: `{
                    height: 100%;
                    width: 100%;
                    background-color: rgba(76, 121, 152);
                    text-align: center;
                    line-height: 40px;
                    color: #fff;
                }`
            }
        },
        components: { Nav },
        mounted() {
            this.getWindowHight()
            this.getScrollHeight()
            window.addEventListener('scroll',this.handleScroll)
        },
        methods: {
            loadAll() {
                return [
                    {
                        "value": "木制飞机",
                        "time": "2015年",
                        "word": "第一次开始木制DIY",
                        "label": ['木模','模型','飞机'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2015/5.jpg')
                    },
                    {
                        "value": "纸板凉亭",
                        "time": "2016年6月11日",
                        "word": "第一次尝试做纸膜，通过上色让建筑更加逼真",
                        "label": ['纸板','建筑','凉亭'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2016/4.jpg')
                    },
                    {
                        "value": "纸板风扇",
                        "time": "2016年8月3日",
                        "word": "尝试通过简单的电路做一个DIY纸板压缩小风扇",
                        "label": ['纸板','模型','电路','风扇'],
                        "color": [0,1,2,3],
                        "img": require('@/assets/img/2016/7.jpg')
                    },
                    {
                        "value": "御膳房",
                        "time": "2016年9月1日",
                        "word": "DIY一个御膳房，此时对摩登城市极为感兴趣，想通过纸模打造一个古风城镇。",
                        "label": ['纸板','模型','古风','御膳房'],
                        "color": [0,1,2,3],
                        "img": require('@/assets/img/2016/9.jpg')
                    },
                    {
                        "value": "纸板沙漠之鹰",
                        "time": "2016年9月",
                        "word": "尝试做一把可以发射纸弹的手枪，在现实中体验射击的感觉。",
                        "label": ['纸板','设计原理','手枪'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2016/10.jpg')
                    },
                    {
                        "value": "意大利面",
                        "time": "2016年9月28日",
                        "word": "尝试做一盘一直想做的意大利面，品尝一下自己的手艺。",
                        "label": ['烹饪','意面'],
                        "color": [0,1],
                        "img": require('@/assets/img/2016/12.jpg')
                    },
                    {
                        "value": "纸板弓弩",
                        "time": "2017年8月",
                        "word": "在楚乔传中非常喜欢宇文玥的弓弩，于是也做了一把，同样也体验到射击的感觉。",
                        "label": ['纸板','设计原理','弓弩'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2017/6.jpg')
                    },
                    {
                        "value": "弓",
                        "time": "2017年8月",
                        "word": "考虑到弓弩的弹射系数是固定的，尝试做一个可自由控制弹力的弓",
                        "label": ['纸板','设计原理','弓'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2017/7.jpg')
                    },
                    {
                        "value": "炒饭",
                        "time": "2017年8月24日",
                        "word": "尝试自己下厨做炒饭",
                        "label": ['烹饪','炒饭'],
                        "color": [0,1],
                        "img": require('@/assets/img/2017/8.jpg')
                    },
                    {
                        "value": "炒饭",
                        "time": "2017年8月25日",
                        "word": "尝试自己下厨做炒饭",
                        "label": ['烹饪','炒饭'],
                        "color": [0,1],
                        "img": require('@/assets/img/2017/9.jpg')
                    },
                    {
                        "value": "炒饭",
                        "time": "2017年8月26日",
                        "word": "尝试自己下厨做炒饭",
                        "label": ['烹饪','炒饭'],
                        "color": [0,1],
                        "img": require('@/assets/img/2017/10.jpg')
                    },
                    {
                        "value": "炒饭",
                        "time": "2017年8月28日",
                        "word": "尝试自己下厨做炒饭",
                        "label": ['烹饪','炒饭'],
                        "color": [0,1],
                        "img": require('@/assets/img/2017/11.jpg')
                    },
                    {
                        "value": "炒饭",
                        "time": "2017年8月29日",
                        "word": "尝试自己下厨做炒饭",
                        "label": ['烹饪','炒饭'],
                        "color": [0,1],
                        "img": require('@/assets/img/2017/12.jpg')
                    },
                    {
                        "value": "炒饭",
                        "time": "2018年2月12日",
                        "word": "尝试自己下厨做炒饭",
                        "label": ['烹饪','炒饭'],
                        "color": [0,1],
                        "img": require('@/assets/img/2018/1.jpg')
                    },
                    {
                        "value": "意大利面",
                        "time": "2018年2月14日",
                        "word": "尝试做一款螺旋式的意大利面",
                        "label": ['烹饪','意面'],
                        "color": [0,1],
                        "img": require('@/assets/img/2018/2.jpg')
                    },
                    {
                        "value": "纸板水笔",
                        "time": "2018年4月6日",
                        "word": "尝试做一支双头可写的水铅笔",
                        "label": ['纸板','水笔','铅笔'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2018/4.jpg')
                    },
                    {
                        "value": "纸板小风扇",
                        "time": "2018年4月6日",
                        "word": "在原有第一代的小风扇进行压缩处理，变得更小巧",
                        "label": ['纸板','电路','风扇'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2018/5.jpg')
                    },
                    {
                        "value": "意大利面",
                        "time": "2018年9月3日",
                        "word": "这是做的比较好吃的一份海鲜番茄意大利面",
                        "label": ['烹饪','意面'],
                        "color": [0,1],
                        "img": require('@/assets/img/2018/6.jpg')
                    },
                    {
                        "value": "木制纸板弓弩",
                        "time": "2018年9月20日",
                        "word": "在原有的第一代弓弩上添加比例较多的木头，稳定性提升了很多。",
                        "label": ['纸板','木板','设计原理','弓弩'],
                        "color": [0,1,2,3],
                        "img": require('@/assets/img/2018/8.jpg')
                    },
                    {
                        "value": "蓝牙音箱",
                        "time": "2019年7月26日",
                        "word": "对科技DIY逐渐产生浓厚兴趣，尝试制作一个纸板蓝牙音箱。",
                        "label": ['纸板','电路','设计原理','音箱'],
                        "color": [0,1,2,3],
                        "img": require('@/assets/img/2019/2.jpg')
                    },
                    {
                        "value": "纸板机械臂",
                        "time": "2019年7月31日",
                        "word": "在接触了arduino开发板后，了解到机械臂带来的科技感，于是自学了arduino语言，做出了一台纸板机械臂。",
                        "label": ['纸板','电路','编程','机械臂'],
                        "color": [0,1,2,3],
                        "img": require('@/assets/img/2019/3.jpg')
                    },
                    {
                        "value": "3D打印机",
                        "time": "2019年8月7日",
                        "word": "今年的巅峰之作，尝试做一台可打印的3D打印机，自学arduino语言和C语言，设计打印机雏形，根据一些零散的图来完成打印机的整机设计，组装，开源代码调试。",
                        "label": ['木板','电路','编程','设计原理','3D'],
                        "color": [0,1,2,3,4,5],
                        "img": require('@/assets/img/2019/4.jpg')
                    },
                    {
                        "value": "塑料机械臂",
                        "time": "2019年9月20日",
                        "word": "在第一版机械臂设计中，通过跟换制作的材料，运动的稳定性提升了，加上了自学算法的导入，能实现机械臂的自学运动。",
                        "label": ['塑料','电路','编程','机械臂'],
                        "color": [0,1,2,3],
                        "img": require('@/assets/img/2019/9.jpg')
                    },
                    {
                        "value": "3D打印机2",
                        "time": "2019年10月2日",
                        "word": "根据上一台3D打印机存在的问题，进行多方面的调整设计，改变原有的框架，调整了代码的参数，打印机的稳定性及打印精度有了很大的提升。",
                        "label": ['木板','电路','编程','设计原理','3D'],
                        "color": [0,1,2,3,4,5],
                        "img": require('@/assets/img/2019/10.jpg')
                    },
                    {
                        "value": "手写打印机",
                        "time": "2019年11月19日",
                        "word": "根据网上一些迷你打印机的制作视频，尝试做一台迷你的手写打印机",
                        "label": ['木板','电路','编程','设计原理','写字机'],
                        "color": [0,1,2,3,4,5],
                        "img": require('@/assets/img/2019/14.jpg')
                    },
                    {
                        "value": "小古筝",
                        "time": "2020年2月12日",
                        "word": "网上一个牛人可以通过一根毛线弹出一首歌，我尝试用几根风筝线做一个小古筝。",
                        "label": ['木板','创意','古筝'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2020/1.jpg')
                    },
                    {
                        "value": "木制小枪",
                        "time": "2020年2月15日",
                        "word": "原有的纸板沙鹰射程有限，现在采用木制的和更换成弹簧，弹力明显提高很多。",
                        "label": ['木制','创意','小枪'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2020/2.jpg')
                    },
                    {
                        "value": "大古筝",
                        "time": "2020年4月19日",
                        "word": "在第一代小古筝上画出一幅墨梅图，显得更有诗意的韵味。",
                        "label": ['木制','手绘','创意','古筝'],
                        "color": [0,1,2,3],
                        "img": require('@/assets/img/2020/6.jpg')
                    },
                    {
                        "value": "木制机械臂",
                        "time": "2020年6月9日",
                        "word": "经过前两代的改进与完善，第三代机械臂整合了更多的功能，运行起来更有科技感了。",
                        "label": ['木制','编程','设计原理','流水灯','机械臂'],
                        "color": [0,1,2,3,4],
                        "img": require('@/assets/img/2020/7.jpg')
                    }
                ]
            },
            handleCurrentChange(val) {
                this.pageList = this.loadAll().slice(val * 6 - 6, val * 6)
            },
            look(index) {
                this.imgIndex = index
                this.dialogTableVisible = true
            },
            download(index) {
                console.log(this.pageList[index].img)
                const url = this.pageList[index].img
                const a = document.createElement('a')
                a.download = this.pageList[index].value
                a.href = url
                a.click()
            },
            go() {
                this.imgListShow = 'block'
                setTimeout(() => {
                    window.scrollTo({
                        top: this.windowHeight.split('p')[0],
                        behavior: "smooth"
                    })
                },500)

            },
            getWindowHight() {
                if (window.innerWidth >= 768) {
                    this.windowHeight = (window.innerHeight - 100) + 'px'
                    this.windowWidth = '100%'
                    this.marginDistance = '50px'
                } else {
                    this.windowHeight = '100%'
                    this.windowWidth = '100%'
                }
            },
            getScrollHeight() {
                this.scrollHeight = document.documentElement.scrollTop // 获取滚动条与顶部的距离
                console.log(this.scrollHeight)
            },
            handleScroll(){
                setTimeout(() => {
                    this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                },100)
                if (this.scrollTop > 30) {
                    this.imgListShow = 'block'
                }
                if (this.scrollTop > 650) {
                    this.pageShow = 'block'
                    this.workListShow = 'block'
                    setTimeout(() => {
                        this.noteShow = 'block'
                    },1000)
                }
            }
        }
    }
</script>

<style scoped>
/**
* 手机响应样式
*/
@media (min-width: 768px) {
    #title, #quto {
        animation-delay: 500ms;
        font-size: 25px;
    }
}
.bg {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
}
#title, #quto {
    animation-delay: 500ms;
}
.iconCenter {
    animation-iteration-count: infinite;
    animation-delay: 1s;
    animation-duration: 2s;
    text-align: center;
    width: 100%;
    color: #fff;
    cursor: pointer;
}


/** 作品标题 */
.box {
    display: flex;
    margin: 20px auto;
    width: 50%;
    justify-content: center;
    transition-duration: 1s;
}
.box:hover {
    cursor: pointer;
    display: flex;
    margin: 10px auto;
    width: 50%;
    flex-direction: column;
    transition-duration: 500ms;
}
.box:hover .myWork {
    transition-duration: 500ms;
    margin: 0 auto;
    font-size: 25px;
}
.box:hover .boxImg {
    transition-duration: 500ms;
    margin: 0 auto;
    width:60px;
    height: 60px;
}
.myWork {
    transition-duration: 500ms;
    color:rgb(166, 211, 228);
    font-size: 23px;
    font-family: '楷体';
}
.boxImg {
    width:30px;
    height: 30px;
}

/** 作品预览列表 */
.paintImg:hover .content {
    display: flex;
    position:absolute;
    width: 90%;
    margin-top:-30%;
    justify-content: center;
}
.paintImg:hover .value {
    color: rgb(54, 121, 162);
}
.paintImg:hover .time {
    display: block;
    text-align: center;
    font-size: 25px;
    color: beige;
    margin-top:-15%;
    width: 90%;
    position:absolute;
}
.icon {
    background-color:rgb(155, 169, 189);
    color:#fff;
    margin: 0 20px;;
}
.icon:hover {
    background-color:rgb(103, 113, 126);
    color:rgb(34, 60, 85);
}
.word {
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}

/** 作品分页 */
.page {
    margin-bottom: 50px;
    text-align: center;
}

/** 作品时间表 */
.timeList {
    height: 500px;
    overflow: scroll;
    background-color: rgba(149, 164, 174, 0.432);
    padding-top: 15px;
    border-radius: 5px;
    margin-bottom: 50px;
}
.timeList::-webkit-scrollbar {
    width: 0;
}
.workListName {
    animation-delay: 500ms;
    font-size: 25px;
    color: #fff;
    margin-bottom:20px;
}
.content,
.time {
    display: none;
}
.note {
    color:#fff;
    margin-top:50px;
}


.lookImg {
    width: 80%;
    display: block;
    margin: auto;
}
.particles {
    position: fixed;
    width: 100%;
    top: 50px;
    bottom: 0;
}

</style>