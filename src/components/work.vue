<template>
    <div>
        <h3 id="work" class="text-center paint animated flipInX">
          {{title}}
        </h3>
        <div class="row clearfix">
            <div class="col-md-12 column">
                <div class="row clearfix">
                    <div class="a2 col-md-2 column animated fadeInLeft">
                        <ul v-if="!model" class="list-unstyled">
                            <li class="time" v-for="(item,index) in timeList" :key="index" @click="setTime(item)">
                                <span>{{item}}</span>
                            </li>
                        </ul>
                        <h4 class="a4 animated zoomIn font">成功建立在失败之后，或出现于失败之中。</h4>
                    </div>
                    <div class="a1 col-md-8 column animated fadeIn">
                        <el-button class="btn" type="button" size="mini" @click="reset">重置</el-button>
                        <div class="conbox" v-for="(item,index) in pageList" :key="item.key">
                            <div class="box">
                                <div class="content">
                                    <el-image class="headImg" :src="require('../assets/head.jpg')"></el-image>
                                    <div style="margin-left:15px;">
                                        <div style="font-size:15px;">Kinron</div>
                                        <div>创作时间：{{item.time}}</div>
                                    </div>
                                </div>
                                <div class="el-icon-download" style="cursor: pointer;font-size:20px;" @click="download(index)"></div>
                            </div>
                            <div class="box_title">
                                <div>
                                    <div class="work_title">
                                        <div v-if="item.url" data-toggle="tooltip" title="视频原址" @click="openUrl(item.url)">{{item.value}}</div>
                                        <div v-else data-toggle="tooltip" title="暂无视频">{{item.value}}</div>
                                    </div>
                                </div>
                                <div>
                                    <span class="label" :class="'label-' + color[index]" v-for="(value, index) in item.label" :key="index">
                                        {{value}}    
                                    </span>
                                </div>
                            </div>
                            <el-image :src=item.img :preview-src-list="[item.img]"></el-image>
                            <div class="word">此刻的想法：{{item.word}}</div>
                        </div>
                    </div>
                    <div v-if="!model" class="a3 col-md-2 column timeList animated fadeInRight">
                        <ul class="list-unstyled workListName">
                            <li class="name" v-for="item in nameList" :key="item.key" @click="choseItem(item.value)">
                                <span>{{item.value}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="a4 animated zoomIn font">当你抛弃了感兴趣的东西，还会觉得做什么都有趣吗？</div>
                </div>
                <!-- 列表分页 -->
                <div class="animated fadeInUp text-center" style="padding-top:20px;">
                    <div v-if="width < 768">
                        <el-pagination
                            @current-change="handleCurrentChange"
                            background
                            :page-size="4"
                            layout="prev, next"
                            :total="list.length">
                        </el-pagination>
                    </div>
                    <div v-else>
                        <el-pagination
                            @current-change="handleCurrentChange"
                            background
                            :page-size="4"
                            layout="prev, pager, next"
                            :total="list.length">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            title: String,
            timeList: Array,
            list: Array
        },
        data() {
            return {
                pageList: this.list.slice(0, 4), // 分页,
                nameList: [],
                hash: {},
                width: '',
                color: {
                    0: 'default',
                    1: 'primary',
                    2: 'success',
                    3: 'info',
                    4: 'warning',
                    5: 'danger'
                },
                model: false
            }
        },
        created(){
            this.removeDuplicate()
            this.width = window.innerWidth
        },
        methods: {
            removeDuplicate() { // 去重
                this.list.forEach(item => {
                    if (!this.hash[item.value]) {
                        this.hash[item.value] = true
                        this.nameList.push(item)
                    }
                })
            },
            handleCurrentChange(val) {
                let height = document.getElementById('Home').offsetTop
                window.scrollTo({ 
                    top: height+20, 
                    behavior: "smooth" 
                })
                this.pageList = this.list.slice(val * 4 - 4, val * 4)
            },
            download(index) {
                console.log(this.pageList[index].img)
                const url = this.pageList[index].img
                const a = document.createElement('a')
                a.download = this.pageList[index].value
                a.href = url
                a.click()
            },
            setTime(value) {
                this.pageList = this.list.filter(item => {
                    return item.time.includes(value)
                })
            },
            reset() {
                this.pageList = this.list.slice(0, 4)
            },
            choseItem(value) {
                this.pageList = this.list.filter(item => {
                    return item.value === value
                })
            },
            openUrl(url) {
                window.open(url)
            }
        }
    }
</script>

<style scoped>
@font-face {
    font-family: myfont1;
    src: url('../assets/font/renaissance.ttf');
}
@media (max-width: 768px) {
    .time,
    .timeList,
    .font,
    .btn {
        display: none;
    }
    .word {
        color: #aaa;
        font-size: 15px;
        font-family: '楷体';
    }
    .work_title {
        font-family: '楷体';
        font-weight: blod;
        font-size: 20px;
        color: #000;
        text-decoration: none;
    }
}
@media (min-width:768px) {
    .word {
        color: #aaa;
        font-size: 20px;
        font-family: '楷体';
    }
    .work_title {
        cursor: pointer;
        font-family: '楷体';
        font-weight: blod;
        font-size: 30px;
        color: #000;
        text-decoration: none;
    }
}
.paint {
  color: #fff;
  background-color: rgb(77, 66, 93);
  font-size: 25px;
  padding: 12px;
}
.time {
    text-align: center;
    font-family: 'myfont1';
    color: rgb(132, 132, 238);
    transition-duration: 400ms;
    background-color: rgb(201, 217, 246);
    font-size: 25px;
    padding: 5px;
}
.time:hover {
    cursor: pointer;
    color: rgb(89, 89, 133);
    transition-duration: 400ms;
    background-color: rgb(162, 178, 208);
}
.name {
    text-align: center;
    background-color: rgb(182, 162, 216);
    font-size: 25px;
    padding: 5px;
}
.name:hover {
    cursor: pointer;
    transition-duration: 400ms;
    background-color: rgb(149, 134, 174);
}
.conbox {
    margin-top: 20px;
    background-color: #fff;
    padding:10px;
    margin: 1rpx;
    border-radius: 5px;
    transition-duration: 500ms;
}
.conbox:hover {
    box-shadow: 1px 1px 8px #aaa;
    transform: scale(1.01);
    transition-duration: 500ms;
}
.box {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px;
    justify-content: space-between;
}
.headImg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgb(219, 221, 236);
    border: 3px solid #fff;
    box-shadow: 3px 3px 5px rgb(204, 201, 201);
}
.content {
    display: flex;
    align-items: center;
}

/** 作品时间表 */
.timeList {
    height: 400px;
    overflow: scroll;
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
.font {
    font-family: '楷体';
    font-size: 25px;
    color: #fff;
    margin: 0 auto;  
    height: 300px;  
    writing-mode: vertical-lr;
    writing-mode: tb-lr;
}
/** 动画播放顺序 */
.a1 {
    animation-delay: 1s;
}
.a2 {
    animation-delay: 1500ms;
}
.a3 {
    animation-delay: 2s;
}
.a4 {
    animation-delay: 2500ms;
}
.box_title {
    display: flex;
    justify-content: space-between;
}
.label {
    margin-right: 5px;
}
.btnGroup {
    display: flex;
    justify-content: space-between;
}
</style>