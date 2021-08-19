<template>
    <div>
        <h3 id="work" class="text-center paint animated flipInX">
          {{title}}
        </h3>
        <div class="row clearfix">
            <div class="col-md-12 column">
                <div class="row clearfix">
                    <div class="a2 col-md-2 column animated fadeInLeft">
                        <ul class="list-unstyled">
                            <li class="time" v-for="(item,index) in timeList" :key="index" @click="setTime(item)">
                                <span>{{item}}</span>
                            </li>
                        </ul>
                        <h4 class="a4 animated zoomIn font">成功建立在失败之后，或出现于失败之中。</h4>
                    </div>
                    <div class="a1 col-md-8 column animated fadeIn">
                        <div class="set">
                            <el-button class="btn" type="button" size="mini" @click="reset">重置</el-button>
                            <span v-if="!isList" class="icon glyphicon glyphicon-th-list" style="cursor: pointer;font-size:15px;" @click="isList=!isList"></span>
                            <span v-if="isList" class="icon glyphicon glyphicon-th-large" style="cursor: pointer;font-size:15px;" @click="isList=!isList"></span>
                        </div>
                        <div class="conbox" :class="isList?'':'col-md-6 column'" v-for="(item,index) in pageList" :key="item.key">
                            <div class="box">
                                <div class="content">
                                    <el-image class="headImg" :src="require('../assets/Kin.png')"></el-image>
                                    <div style="margin-left:15px;">
                                        <div style="font-size:15px;">Kinron</div>
                                        <div>{{item.time}}</div>
                                    </div>
                                </div>
                                <div class="el-icon-download" style="cursor: pointer;font-size:20px;" @click="download(index)"></div>
                            </div>
                            <h3 style="font-family:'楷体';font-weight:600;">{{item.value}}</h3>
                            <el-image :src=item.img :preview-src-list="[item.img]"></el-image>
                            <el-tooltip :content="item.word" placement="top" effect="light">
                                <div class="word">{{item.word}}</div>
                            </el-tooltip>
                        </div>
                    </div>
                    <div class="a3 col-md-2 column timeList animated fadeInRight">
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
                isList: true,
                hash: {},
                width: ''
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
            }
        }
    }
</script>

<style scoped>
@media (max-width: 768px) {
    .time,
    .timeList,
    .font,
    .btn,
    .icon {
        display: none;
    }
}
.paint {
  color: #fff;
  background-color: rgb(77, 66, 93);
  padding: 12px;
}
.time {
    text-align: center;
    color: rgb(132, 132, 238);
    transition-duration: 400ms;
    background-color: rgb(201, 217, 246);
    font-size: 20px;
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
    font-size: 20px;
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
.word {
    color: #aaa;
    font-size: 20px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
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

.set {
    display:flex;
    justify-content:space-between;
    align-items:center;
}
</style>