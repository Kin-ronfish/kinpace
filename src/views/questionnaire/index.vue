<template>
  <div class="home">
    <img class="bg" src="@/assets/bg.jpeg" alt="">
    <div class="content">
      <div class="title">测试问卷</div>
      <div class="btn_grounp">
        <van-button type="primary" color="rgb(125, 92, 225)" plain @click="createTest">新建问卷</van-button>
        <van-button type="info" color="rgb(52, 79, 212)" plain style="margin-top:20px" @click="getData">填写问卷</van-button>
      </div>
    </div>
    <div class="footer">
      <div></div>
      <div>{{version}}</div>
      <div><van-icon name="question-o" /></div>
    </div>
    <van-popup v-model="show" :style="{ width: '60%' }" closeable>
      <div class="list">
        <div style="text-align:center;margin-bottom: 20px;">选择问卷</div>
        <van-radio-group v-model="radio">
          <van-radio style="margin:8px 0" v-for="item in list" :key="item.id" :name="item.id">{{item.title}}</van-radio>
        </van-radio-group>
      </div>
      <div style="margin:15px">
        <van-button class="btn" type="info" size="medium" plain @click="writeTest">确定</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'Home',
  data() {
    return {
      version: 'V1.0.0',
      show: false,
      list: '',
      radio: ''
    }
  },
  methods: {
    createTest() {
      this.$router.push('/createlist')
    },
    writeTest() {
      if(this.radio) {
        this.$router.push({path: '/publishform', query: {id: this.radio}})
      }else {
        Toast('请选择一个模板')
      }
    },
    getData() {
      let questionList = localStorage.getItem("questionList");
      if (questionList.length) {
        this.list = JSON.parse(questionList).data;
        this.show = true
      }else {
        Toast('暂无问卷模板，请先创建')
      }
    }
  }
}
</script>
<style scoped>
.title {
  text-align: center;
  margin-top: 50%;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
}
.btn_grounp {
  display: flex;
  flex-direction: column;
  padding: 10% 25%;
}
.bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
.content {
  position: relative;
  z-index: 1;
}
.footer {
  position: fixed;
  left: 20px;
  right: 20px;
  bottom: 25px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 16px;
}
.list {
  margin: 15px;
  height: 120px;
  overflow-y: scroll;
}
.btn {
  width: 100%;
}
</style>

