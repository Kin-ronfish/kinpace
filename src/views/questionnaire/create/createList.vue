<template>
  <div>
    <van-nav-bar
      title="问卷列表"
      right-text="新增"
      left-arrow
      style="margin-top:10px"
      fixed
      @click-left="back"
      @click-right="create"
    />
    <div style="height: 60px"></div>
    <van-search
      style="background: #eee"
      v-model="keyword"
      shape="round"
      placeholder="搜索"
      @search="onSearch"
    />
    <div class="list">
      <div
        class="item"
        v-for="(item, index) in list"
        :key="item.id"
        @click="look(item)"
      >
        <div>{{ item.title }}</div>
        <div style="color: red" @click.stop="remove(index)">删除</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      keyword: "",
      list_1: [],
      list: [],
    };
  },
  created() {
    let questionList = localStorage.getItem("questionList");
    if (!questionList) {
      let res = [];
      localStorage.setItem(
        "questionList",
        JSON.stringify({
          data: res,
        })
      );
      this.list_1 = res;
      this.list = JSON.parse(JSON.stringify(this.list_1));
    } else {
      let res = JSON.parse(questionList);
      this.list_1 = res.data;
      this.list = JSON.parse(JSON.stringify(this.list_1));
    }
  },
  methods: {
    create() {
      this.$router.push("/createdetail");
    },
    back() {
      this.$router.back();
    },
    onSearch(val) {
      if (val) {
        this.list = this.list_1.filter((item) => item.title.includes(val));
      } else {
        this.list = this.list_1;
      }
    },
    look(item) {
      this.$router.push({ path: "/createdetail", query: {id:item.id} });
    },
    remove(index) {
      Dialog.alert({
        message: "是否删除此模板",
        showCancelButton: true,
        confirmButtonColor: "rgb(41, 121, 226)",
      }).then(() => {
        this.list.splice(index, 1);
        localStorage.setItem(
            "questionList",
            JSON.stringify({
                data: this.list
            })
        );
      });
    },
  },
};
</script>

<style scoped>
.item {
  background: rgb(246, 247, 247);
  padding: 10px;
  margin: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>