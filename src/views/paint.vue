<template>
    <div>
        <img class="bg" :src="require('../assets/img/星空5.jpg')" alt="">
        <!-- <vue-particles
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
        </vue-particles> -->
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
                <img :style="'width:' + windowWidth + ';height:' + windowHeight + ';'" :src="list[36].img" />
                <div class="carousel-caption">
                    <h4 id="title" class="animated fadeInUp">{{ list[36].value }}</h4>
                    <p id="quto" class="animated fadeInLeft">{{ list[36].word }}</p>
                </div>
                </div>
                <div class="item">
                <img :style="'width:' + windowWidth + ';height:' + windowHeight + ';'" :src="list[43].img" />
                <div class="carousel-caption">
                    <h4 id="title" class="animated fadeInUp">{{ list[43].value }}</h4>
                    <p id="quto" class="animated fadeInRight">{{ list[43].word }}</p>
                </div>
                </div>
                <div class="item">
                <img :style="'width:' + windowWidth + ';height:' + windowHeight + ';'" :src="list[45].img" />
                <div class="carousel-caption">
                    <h4 id="title" class="animated fadeInUp">{{ list[45].value }}</h4>
                    <p id="quto" class="animated fadeInDown">{{ list[45].word }}</p>
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
                    <div class="row">
                        <div class="col-md-4" v-for="(item, index) in pageList" :key="index">
                            <div class="thumbnail paintImg">
                                <el-image alt="300x200" :src="item.img" :preview-src-list="[item.img]"></el-image>
                                <div class="content animated fadeInUp">
                                    <span class="icon glyphicon glyphicon-download-alt btn" @click="download(index)"></span>
                                    <span class="icon glyphicon glyphicon-th-large btn" @click="look(index)"></span>
                                    <!-- <span class="icon glyphicon glyphicon-link btn"></span> -->
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
                            <h2 class="animated fadeInDown">成功建立在失败之后，或出现于失败之中。</h2>
                            <h2 class="animated fadeInDown">当你抛弃了感兴趣的东西，还会觉得做什么都有趣吗？</h2>
                            <h2 class="animated fadeInDown">生活就像一本无字之书，学习让书里的内容更加充实，努力让内容更加精彩。</h2>
                            <h2 class="animated fadeInUp">将美好的时光化作真实可见的东西，每当拿起它时，曾经为此的努力依然历历在目。</h2>
                            <h2 class="animated fadeInUp">时间永不停息，作品永恒不变，</h2>
                            <h2 class="animated fadeInUp">把短暂的时间化作长久的回忆，</h2>
                            <h2 class="animated fadeInUp">把美好的回忆保存于作品之中。</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-backtop :bottom="50">
            <div class="el-icon-arrow-up" :style="goTop"></div>
        </el-backtop>
        <el-dialog width="30%" :title="pageList[imgIndex].value" :visible.sync="dialogTableVisible">
            <div style="padding:10px;">
                <div><strong>作品名称：{{ pageList[imgIndex].value }}</strong></div>
                <div>留言：{{ pageList[imgIndex].word }}</div>
                <div>创作时间：{{ pageList[imgIndex].time }}</div>
            </div>
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
                        "value": "品茶老人",
                        "time": "2011年",
                        "word": "绘画的第一天，发现兴趣的时刻，感受到绘画给自己带来了乐趣。",
                        "label": ['人物','上色','古风'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2011/1.jpg')
                    },
                    {
                        "value": "山水画",
                        "time": "2013年",
                        "word": "尝试着将学习的多个部分整合，青山绿水，李白遥望瀑布吟诗作对。",
                        "label": ['场景','素描', '意向'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2013/1.jpg')
                    },
                    {
                        "value": " 刻画蝴蝶",
                        "time": "2013年",
                        "word": "初中美术课留下一幅比较有印象的画，记录着自己对绘画的喜爱。",
                        "label": ['动物','雕画','蝴蝶'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2013/2.jpg')
                    },
                    {
                        "value": "小兰新一",
                        "time": "2013年",
                        "word": "开始接触动漫临摹，在同学家跟他一起完成这幅画的临摹。",
                        "label": ['人物','上色','名侦探'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2013/3.jpg')
                    },
                    {
                        "value": "霸气苍龙",
                        "time": "2013年",
                        "word": "--",
                        "label": ['动物','上色','吉祥物'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2013/4.jpg')
                    },
                    {
                        "value": "想象之地",
                        "time": "2013年",
                        "word": "第一次接触水粉画，根据自己的想法画出自己脑海中的一个印象。",
                        "label": ['景物','上色','联想'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2013/5.jpg')
                    },
                    {
                        "value": "天边之树",
                        "time": "2013年",
                        "word": "水粉绘画功底还在缓慢提升，画出来的东西比较抽象且缺少美感。",
                        "label": ['景物','上色','联想'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2013/6.jpg')
                    },
                    {
                        "value": "家中客厅",
                        "time": "2013年",
                        "word": "坐在客厅的沙发上，眼前正是一个框架结构，于是用笔记录下静态的一面。",
                        "label": ['景物','上色','客厅'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2013/7.jpg')
                    },
                    {
                        "value": "花花世界",
                        "time": "2013年4月",
                        "word": "欣赏花朵的美，来自大自然的清新。",
                        "label": ['静物','上色','花朵'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2013/8.jpg')
                    },
                    {
                        "value": "雄鹰展翅",
                        "time": "2013年4月",
                        "word": "飞得更高，看得更远，划破长空，翱翔天际。",
                        "label": ['动物','上色','雄鹰'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2013/9.jpg')
                    },
                    {
                        "value": "盘曲的龙",
                        "time": "2013年4月",
                        "word": "--",
                        "label": ['动物','上色','吉祥物'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2013/10.jpg')
                    },
                    {
                        "value": "七彩凤凰",
                        "time": "2013年4月",
                        "word": "--",
                        "label": ['动物','上色','吉祥物'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2013/11.jpg')
                    },
                    {
                        "value": "麒麟腾云驾雾",
                        "time": "2013年4月",
                        "word": "--",
                        "label": ['动物','上色','吉祥物'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2013/12.jpg')
                    },
                    {
                        "value": "热火标志",
                        "time": "2014年",
                        "word": "--",
                        "label": ['静物','上色','标志'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2014/1.jpg')
                    },
                    {
                        "value": "火箭标志",
                        "time": "2014年",
                        "word": "--",
                        "label": ['静物','上色','标志'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2014/2.jpg')
                    },
                    {
                        "value": "树",
                        "time": "2014年",
                        "word": "--",
                        "label": ['景物','素描','植物'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2014/3.jpg')
                    },
                    {
                        "value": "树",
                        "time": "2014年",
                        "word": "--",
                        "label": ['景物','素描','植物'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2014/4.jpg')
                    },
                    {
                        "value": "树",
                        "time": "2014年",
                        "word": "--",
                        "label": ['景物','素描','植物'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2014/5.jpg')
                    },
                    {
                        "value": "客厅盆栽",
                        "time": "2014年",
                        "word": "--",
                        "label": ['静物','上色','盆栽'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2014/6.jpg')
                    },
                    {
                        "value": "嫦娥奔月",
                        "time": "2014年",
                        "word": "中秋画嫦娥",
                        "label": ['人物','上色','嫦娥'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2014/7.jpg')
                    },
                    {
                        "value": "杜甫",
                        "time": "2014年",
                        "word": "--",
                        "label": ['人物','素描','诗人'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2014/8.jpg')
                    },
                    {
                        "value": "茶具试绘",
                        "time": "2014年",
                        "word": "--",
                        "label": ['静物','上色','茶具'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2014/9.jpg')
                    },
                    {
                        "value": "茶具套装",
                        "time": "2014年",
                        "word": "--",
                        "label": ['静物','上色','茶具'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2014/10.jpg')
                    },
                    {
                        "value": "双花",
                        "time": "2015年",
                        "word": "开始步入真实世界",
                        "label": ['静物','上色','花朵'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2015/1.jpg')
                    },
                    {
                        "value": "玫瑰花",
                        "time": "2015年",
                        "word": "母亲节送给妈妈的一朵花",
                        "label": ['静物','上色','花朵'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2015/2.jpg')
                    },
                    {
                        "value": "手绘雪碧",
                        "time": "2015年",
                        "word": "第一次画雪碧",
                        "label": ['静物','上色','雪碧'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2015/3.jpg')
                    },
                    {
                        "value": "手绘可乐",
                        "time": "2015年",
                        "word": "肥宅快乐水，激爽每一天",
                        "label": ['静物','上色','可乐'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2015/4.jpg')
                    },
                    {
                        "value": "山水画",
                        "time": "2015年3月6日",
                        "word": "--",
                        "label": ['景物','上色','风景'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2015/6.jpg')
                    },
                    {
                        "value": "湖边",
                        "time": "2016月3月20日",
                        "word": "学校艺术节第一幅作品，一等奖",
                        "label": ['景物','上色','风景'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2016/1.jpg')
                    },
                    {
                        "value": "立体魔方",
                        "time": "2016月5月8日",
                        "word": "尝试画三维立体魔方",
                        "label": ['静物','上色','魔方'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2016/2.jpg')
                    },
                    {
                        "value": "立体魔方",
                        "time": "2016月5月9日",
                        "word": "尝试画三维立体魔方",
                        "label": ['静物','上色','魔方'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2016/3.jpg')
                    },
                    {
                        "value": "手绘西红柿",
                        "time": "2016月7月",
                        "word": "--",
                        "label": ['静物','上色','西红柿'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2016/5.jpg')
                    },
                    {
                        "value": "手绘德芙巧克力",
                        "time": "2016月8月2日",
                        "word": "--",
                        "label": ['静物','上色','巧克力'],
                        "color": [0,1],
                        "img": require('@/assets/img/2016/6.jpg')
                    },
                    {
                        "value": "手绘汉堡",
                        "time": "2016月8月15日",
                        "word": "吃肯德基留下的记录",
                        "label": ['静物','上色','汉堡'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2016/8.jpg')
                    },
                    {
                        "value": "天地壹号",
                        "time": "2016月9月16日",
                        "word": "中秋晚来一罐天地壹号",
                        "label": ['静物','上色','天地壹号'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2016/11.jpg')
                    },
                    {
                        "value": "喜迎国庆手抄报",
                        "time": "2016月10月1日",
                        "word": "在班级作品分享中受到团支部老师的表扬",
                        "label": ['静物','上色','国庆'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2016/13.jpg')
                    },
                    {
                        "value": "手绘曼妥思",
                        "time": "2016月12月6日",
                        "word": "年底送给自己一条真实的曼妥思，来年我会更加努力",
                        "label": ['静物','上色','糖果'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2016/14.jpg')
                    },
                    {
                        "value": "手绘好丽友派",
                        "time": "2017月2月4日",
                        "word": "--",
                        "label": ['静物','上色','蛋糕'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2017/1.jpg')
                    },
                    {
                        "value": "海边",
                        "time": "2017月3月25日",
                        "word": "学校艺术绝第二幅作品，一等奖",
                        "label": ['景物','上色','风景'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2017/2.jpg')
                    },
                    {
                        "value": "德芙巧克力",
                        "time": "2017月5月13日",
                        "word": "--",
                        "label": ['静物','上色','巧克力'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2017/4.jpg')
                    },
                    {
                        "value": "玫瑰花",
                        "time": "2017月7月12日",
                        "word": "母亲节送给妈妈的一束花",
                        "label": ['静物','上色','花朵'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2017/5.jpg')
                    },
                    {
                        "value": "手绘月饼",
                        "time": "2017月10月1日",
                        "word": "今年中秋画个月饼留个回忆",
                        "label": ['静物','上色','月饼'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2017/13.jpg')
                    },
                    {
                        "value": "手绘蛋黄派",
                        "time": "2017月10月8日",
                        "word": "--",
                        "label": ['静物','上色','蛋糕'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2017/14.jpg')
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
                        "value": "手绘维他柠檬茶",
                        "time": "2018月2月25日",
                        "word": "在罐装饮料上有了熟悉的基础，尝试画一罐柠檬茶",
                        "label": ['静物','上色','柠檬茶'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2018/3.jpg')
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
                        "value": "手绘月饼",
                        "time": "2018月9月23日",
                        "word": "中秋佳节，需要有饼陪伴",
                        "label": ['静物','上色','月饼'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2018/9.jpg')
                    },
                    {
                        "value": "板绘建筑",
                        "time": "2019月6月24日",
                        "word": "第一次接触板绘，先尝试从自己较熟悉景物绘画开始画起。",
                        "label": ['景物','板绘','建筑'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2019/1.jpg')
                    },
                    {
                        "value": "板绘萧炎云韵",
                        "time": "2019月8月25日",
                        "word": "萧炎云韵完美邂逅，在何时还能再次相遇，再次遇见或许就是在云兰宗上敌对的仇人。",
                        "label": ['人物','板绘','斗破苍穹'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2019/5.jpg')
                    },
                    {
                        "value": "板绘美杜莎",
                        "time": "2019月9月8日",
                        "word": "作为蛇人族不可逾越的一代女王，却有着一个双胞胎妹妹，因为蛇人族的家族规定，自己的妹妹在追捕中被一箭射死，经受失亲之痛。",
                        "label": ['人物','板绘','斗破苍穹'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2019/6.jpg')
                    },
                    {
                        "value": "板绘萧炎云韵",
                        "time": "2019月9月8日",
                        "word": "萧炎云韵完美邂逅，在何时还能再次相遇，再次遇见或许就是在云兰宗上敌对的仇人。",
                        "label": ['人物','板绘','斗破苍穹'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2019/7.jpg')
                    },
                    {
                        "value": "手绘月饼",
                        "time": "2019月9月20日",
                        "word": "今晚的中秋也再宿舍吃着月饼，画着月饼，用调试好的3D打印机打个冰皮月饼配着吃。",
                        "label": ['静物','上色','月饼'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2019/8.jpg')
                    },
                    {
                        "value": "手绘士力架",
                        "time": "2019月10月15日",
                        "word": "学习自己喜欢的画师也画个士力架，拍摄一个创意视频。",
                        "label": ['静物','上色','士力架'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2019/11.jpg')
                    },
                    {
                        "value": "手绘一束花",
                        "time": "2019月11月3日",
                        "word": "画一束花作为送给师姐的毕业礼物。",
                        "label": ['静物','上色','花朵'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2019/12.jpg')
                    },
                    {
                        "value": "手绘雪碧",
                        "time": "2019月11月10日",
                        "word": "第三次画雪碧，单独使用水溶性彩铅绘画，由于彩铅本身的特性不太适用此画，效果不如上一幅。",
                        "label": ['静物','上色','雪碧'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2019/13.jpg')
                    },
                    {
                        "value": "手绘&板绘壁纸",
                        "time": "2020月3月4日",
                        "word": "第一次尝试画壁纸，画出来的画面太过粗糙，虽借用PS调整，但还是不像。",
                        "label": ['人物','上色','壁纸'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2020/3.jpg')
                    },
                    {
                        "value": "手绘焰灵姬",
                        "time": "2020月3月25日",
                        "word": "来自百越一外柔内刚的女子，身世凄凉，一直受到夜幕使者的暗中操控。",
                        "label": ['人物','上色','焰灵姬','天行九歌'],
                        "color": [0,1,2,3],
                        "img": require('@/assets/img/2020/4.jpg')
                    },
                    {
                        "value": "手绘阿尔卑斯",
                        "time": "2020月4月5日",
                        "word": "重新完善同学给予的任务，经过一段时间的绘画练习，这次的画面比上一次更细腻了。",
                        "label": ['静物','上色','糖果'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2020/5.jpg')
                    },
                    {
                        "value": "手绘月饼",
                        "time": "2020月10月1日",
                        "word": "持续每年中秋的传统，画月饼，今年的中秋恰与国庆相遇，迎来双庆美满。",
                        "label": ['静物','上色','月饼'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2020/8.jpg')
                    },
                    {
                        "value": "手绘蛋糕",
                        "time": "2020月10月13日",
                        "word": "尝试画一块静态糕点，透过屏幕感受它的甜。",
                        "label": ['静物','上色','蛋糕'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2020/9.jpg')
                    },
                    {
                        "value": "手绘蛋糕",
                        "time": "2020月10月30日",
                        "word": "尝试画一块静态糕点，作为毕业的礼物送给自己，在实物中觉得最像的一幅。",
                        "label": ['静物','上色','蛋糕'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2020/10.jpg')
                    },
                    {
                        "value": "手绘海琴烟",
                        "time": "2020月11月26日",
                        "word": "送给师弟的礼，外表腼腆的他也喜欢绘画，在了解到他喜欢的漫画，画个海琴烟送给他作为他当组长的礼物。",
                        "label": ['人物','上色','鬼刀'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2020/11.jpg')
                    },
                    {
                        "value": "手绘吉他",
                        "time": "2020月11月26日",
                        "word": "送给师妹的礼物，充满娱乐气息的她喜欢弹吉他，画个吉他送给她作为她当组长的礼物。",
                        "label": ['静物','上色','吉他'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2020/12.jpg')
                    },
                    {
                        "value": "手绘笔记本电脑",
                        "time": "2020月11月27日",
                        "word": "送给师弟的礼物，热爱专研代码，画个电脑送给他作为他当组长的礼物。",
                        "label": ['静物','上色','电脑'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2020/13.jpg')
                    },
                    {
                        "value": "女孩",
                        "time": "2021月2月11日",
                        "word": "尝试画壁纸和上色，在人物比例协调上存在一定的出入，导致画面看起来有点变形。",
                        "label": ['人物','上色','壁纸'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2021/1.jpg')
                    },
                    {
                        "value": "小哥",
                        "time": "2021月2月13日",
                        "word": "接受阿姐给我的一个小任务，尝试画一个动漫版的小哥，相对真实人物还是比较简单的。",
                        "label": ['人物','动漫','盗墓笔记'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2021/2.jpg')
                    },
                    {
                        "value": "小物品",
                        "time": "2021月3月25日",
                        "word": "在公司休息时间，拿起笔画下桌子上的几个小物品，静物素描是绘画基础练习。",
                        "label": ['静物','素描'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2021/3.jpg')
                    },
                    {
                        "value": "可爱女孩",
                        "time": "2021月3月27日",
                        "word": "细致素描尝试，试绘壁纸，在素描画中感觉比较好的一幅，但与壁纸仍存在一定差别。",
                        "label": ['人物','素描','壁纸'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2021/4.jpg')
                    },
                    {
                        "value": "王一博",
                        "time": "2021月4月20日",
                        "word": "细致素描尝试，试绘大众追捧的明星。没有学习素描基础，画出来有点变形。",
                        "label": ['人物','素描','王一博'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2021/5.jpg')
                    },
                    {
                        "value": "M&M糖果",
                        "time": "2021月6月26日",
                        "word": "尝试向绘画大师一样画一包M&M糖果，效果有些差距，但比起第一次模仿他时的作品，还是由很大的进步。",
                        "label": ['静物','上色','糖果'],
                        "color": [0,1,2],
                        "img": require('@/assets/img/2021/6.jpg')
                    },
                    {
                        "value": "华为手机",
                        "time": "2021月7月10日",
                        "word": "把自己的手机升级了新的系统，尝试以假乱真，最终还是被识破。",
                        "label": ['静物','上色','手机','华为'],
                        "color": [0,1,2,3],
                        "img": require('@/assets/img/2021/7.jpg')
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
                },100)
                
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
                if (this.scrollTop > 650) {
                    this.pageShow = 'block'
                    this.workListShow = 'block'
                    setTimeout(() => {
                        this.noteShow = 'block'
                    },1500)
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


.particles {
    position: fixed;
    width: 100%;
    top: 50px;
    bottom: 0;
}

</style>