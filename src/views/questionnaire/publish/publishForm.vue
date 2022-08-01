<template>
  <div>
    <van-nav-bar
        title="测试问卷"
        right-text="提交"
        style="margin-top:10px"
        left-arrow
        fixed
        @click-left="back"
        @click-right="handle"
    />
    <div style="height: 60px"></div>
    <form-create :edit="edit" :list="detail.list[index]"></form-create>
    <div class="btn">
      <van-button
        :disabled="!preFlag"
        style="width: 100px"
        size="meduim"
        type="info"
        @click="pre"
      >
        上一页
      </van-button>
      <van-button
        :disabled="!nextFlag"
        style="width: 100px; margin-left: 10px"
        size="meduim"
        type="info"
        @click="next"
      >
        下一页
      </van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import formCreate from "../../../components/formCreate.vue";
export default {
  components: { formCreate },
  data() {
    return {
      edit: false,
      show: false,
      columns: ["文字", "输入框", "多选框", "单选框", "文本域"],
      detail: {},
      index: 0,
      preFlag: false,
      nextFlag: true,
      isDetail: false
    };
  },
  created() {
    this.isDetail = true
    let res = localStorage.getItem("questionList")
    this.detail = JSON.parse(res).data.filter(item=> `${item.id}`===this.$route.query.id)[0]
    console.log(this.detail)
    this.isIndex()
  },
  methods: {
    back() {
      this.$router.back();
    },
    handle() {
      console.log(this.detail)
      Toast('提交成功')
    },
    pre() {
      if (this.index > 0) {
        this.index--;
      }
      this.isIndex();
    },
    next() {
      if (this.index < this.detail.list.length - 1) {
        this.index++;
      }
      this.isIndex();
    },
    // 判断索引值
    isIndex() {
      if (this.index === 0) {
        this.preFlag = false;
      } else {
        this.preFlag = true;
      }
      if (this.index === this.detail.list.length - 1) {
        this.nextFlag = false;
      } else {
        this.nextFlag = true;
      }
    }
  },
};
</script>

<style scoped>
.header {
  margin: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn {
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  padding: 10px 0 30px;
}
</style>