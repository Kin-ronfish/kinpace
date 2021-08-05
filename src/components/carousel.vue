<template>
    <div style="margin-top:55px;">
        <div class="carousel slide" id="carousel-260043">
            <ol class="carousel-indicators">
                <li class="active" data-slide-to="0" data-target="#carousel-260043">
                </li>
                <li data-slide-to="1" data-target="#carousel-260043">
                </li>
                <li data-slide-to="2" data-target="#carousel-260043">
                </li>
                <li data-slide-to="3" data-target="#carousel-260043">
                </li>
                <li data-slide-to="4" data-target="#carousel-260043">
                </li>
                <li data-slide-to="5" data-target="#carousel-260043">
                </li>
            </ol>
            <div class="carousel-inner">
                <div class="item active">
                <img :src="list[0].img" />
                <div class="carousel-caption">
                    <h4 id="title" class="animated fadeInUp">{{ list[0].value }}</h4>
                    <p id="quto" class="animated fadeInLeft">{{ list[0].word }}</p>
                </div>
                </div>
                <div class="item">
                    <img :src="list[1].img" />
                    <div class="carousel-caption">
                        <h4 id="title" class="animated fadeInUp">{{ list[1].value }}</h4>
                        <p id="quto" class="animated fadeInRight">{{ list[1].word }}</p>
                    </div>
                </div>
                <div class="item">
                    <img :src="list[2].img" />
                    <div class="carousel-caption">
                        <h4 id="title" class="animated fadeInUp">{{ list[2].value }}</h4>
                        <p id="quto" class="animated fadeInDown">{{ list[2].word }}</p>
                    </div>
                </div>
                <div class="item">
                    <img :src="list[3].img" />
                    <div class="carousel-caption">
                        <h4 id="title" class="animated fadeInUp">{{ list[3].value }}</h4>
                        <p id="quto" class="animated fadeInDown">{{ list[3].word }}</p>
                    </div>
                </div>
                <div class="item">
                    <img :src="list[4].img" />
                    <div class="carousel-caption">
                        <h4 id="title" class="animated fadeInUp">{{ list[4].value }}</h4>
                        <p id="quto" class="animated fadeInDown">{{ list[4].word }}</p>
                    </div>
                </div>
                <div class="item">
                    <img :src="list[5].img" />
                    <div class="carousel-caption">
                        <h4 id="title" class="animated fadeInUp">{{ list[5].value }}</h4>
                        <p id="quto" class="animated fadeInDown">{{ list[5].word }}</p>
                    </div>
                </div>
            </div> <a class="left carousel-control" href="#carousel-260043" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a> <a class="right carousel-control" href="#carousel-260043" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
        </div>
    </div>
</template>


<script>
import cloneDeep from 'lodash/cloneDeep'
    export default {
        data() {
            return {
                list: cloneDeep(this.loadAll()),
            }
        },
        methods: {
            loadAll() {
                return [
                    {
                        "value": "手绘曼妥思",
                        "time": "2016月12月6日",
                        "word": "年底送给自己一条真实的曼妥思，来年我会更加努力",
                        "label": ['静物','上色','糖果'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2016/14.jpg')
                    },
                    {
                        "value": "手绘阿尔卑斯",
                        "time": "2017月12月31日",
                        "word": "同学给的小礼物，也是小任务",
                        "label": ['静物','上色','糖果'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2017/15.jpg')
                    },
                    {
                        "value": "手绘雪碧",
                        "time": "2018月9月6日",
                        "word": "第二次画雪碧，送给朋友的礼物，对比上一次有了很大的突破。",
                        "label": ['静物','上色','雪碧'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2018/7.jpg')
                    },
                    {
                        "value": "木制机械臂",
                        "time": "2020年6月9日",
                        "word": "经过前两代的改进与完善，第三代机械臂整合了更多的功能，运行起来更有科技感了。",
                        "label": ['木制','编程','设计原理','流水灯','机械臂'],
                        "color": [0,1,2,3,4],
                        "img": require('@/assets/img/2020/7.jpg')
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
                    }

                ]
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
        font-size: 22px;
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

</style>