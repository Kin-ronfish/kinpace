<!-- 我的项目演示 -->
<template>
  <div>
    <van-nav-bar title="项目列表" style="margin-top:15px" left-arrow fixed @click-left="back" />
    <div style="height:60px"></div>
    <van-cell-group>
      <van-cell title="汽车展厅" @click="nav('/car')" />
      <van-cell title="调查问卷" @click="nav('/questionnaire')" />
    </van-cell-group>
    <!-- <van-button @click="save">保存数据</van-button>
    <van-button @click="getValue">获取数据</van-button>
    <van-button @click="removeValue">删除数据</van-button> -->
  </div>
</template>

<script>
import { Toast } from "vant";
import uni from "../js/uni.webview.1.5.3";
export default {
  data() {
    return {};
  },
  created() {
    // 以下函数用于接收返回值
    window.setResult = (res) => {
      console.log(res);
      Toast(`${res}`);
    };
    window.getResult = (res) => {
      console.log(res);
      Toast(`${res}`);
    };
    window.removeResult = (res) => {
      console.log(res);
      Toast(`${res}`);
    };
    console.log("数据设置成功");
  },
  methods: {
    save() {
      uni.postMessage(
        {
          data: {
            type: "setStore",
            content: {
              name: "name",
              value: "Kin",
            },
          },
        },
        "*"
      );
    },
    getValue() {
      uni.postMessage(
        {
          data: {
            type: "getStore",
            content: {
              name: "name",
              value: "",
            },
          },
        },
        "*"
      );
    },
    removeValue() {
      uni.postMessage(
        {
          data: {
            type: "removeStore",
            content: {
              name: "name",
              value: "",
            },
          },
        },
        "*"
      );
    },
    nav(name) {
      this.$router.push(name);
    },
    back() {
      uni.postMessage(
        {
          data: {
            type: "back",
            content: "",
          },
        },
        "*"
      );
    },
  },
};
</script>

<style scoped></style>