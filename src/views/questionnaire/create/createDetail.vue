<template>
  <div>
    <van-nav-bar
      :title="isDetail?'问卷详情':'新建问卷'"
      :right-text="edit ? '保存' : '编辑'"
      style="margin-top:15px"
      left-arrow
      fixed
      @click-left="back"
      @click-right="handle"
    />
    <div style="height: 60px"></div>
    <div style="margin: 15px 25px 15px 15px">
      <input
        type="text"
        :disabled="!edit"
        v-model="detail.title"
        style="width: 100%"
      />
    </div>
    <div class="header">
      <div>选项卡：{{ index + 1 }}</div>
      <van-icon v-show="edit" name="close" @click="removeTemp" />
    </div>
    <form-create :edit="edit" :list="detail.list[index]"></form-create>
    <div v-show="edit" class="btn">
      <van-button
        :disabled="!preFlag"
        style="width: 30px"
        size="large"
        type="info"
        @click="pre"
      >
        <van-icon name="arrow-left" />
      </van-button>
      <van-button
        style="width: 60%"
        size="large"
        type="info"
        @click="show = true"
        >添加组件</van-button
      >
      <van-button style="width: 30px" size="large" type="info">
        <van-icon v-show="nextFlag" name="arrow" @click="next" />
        <van-icon v-show="!nextFlag" name="plus" @click="addTemp" />
      </van-button>
    </div>
    <div v-show="!edit" class="btn">
      <van-button
        :disabled="!preFlag"
        style="width: 40px"
        size="meduim"
        type="info"
        @click="pre"
      >
        <van-icon name="arrow-left" />
      </van-button>
      <van-button
        :disabled="!nextFlag"
        style="width: 40px; margin-left: 10px"
        size="meduim"
        type="info"
        @click="next"
      >
        <van-icon name="arrow" />
      </van-button>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-picker
        title="选择组件"
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="show = false"
      />
    </van-popup>
  </div>
</template>

<script>
import { Dialog, Toast } from "vant";
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
    if(this.$route.query.id) {
      this.isDetail = true
      let res = localStorage.getItem("questionList")
      this.detail = JSON.parse(res).data.filter(item=> `${item.id}`===this.$route.query.id)[0]
      this.isIndex()
    }else {
      this.isDetail = false
      this.edit = true
      this.detail = {
        id: new Date().getTime(),
        title: '标题',
        list: [[]]
      }
      this.isIndex()
    }
  },
  methods: {
    back() {
      this.$router.back();
    },
    handle() {
      this.edit = !this.edit;
      if (!this.edit) {
        let res = localStorage.getItem("questionList")
        if(this.$route.query.id) {
          let result = JSON.parse(res).data.map(item => {
            if(`${item.id}`===this.$route.query.id) {
              return this.detail
            }else {
              return item
            }
          })
          localStorage.setItem("questionList", JSON.stringify({
            data: result
          }))
          Toast('保存成功')
        }else {
          let result = JSON.parse(res).data
          result.push(this.detail)
          localStorage.setItem("questionList", JSON.stringify({
            data: result
          }))
          Toast('保存成功')
        }
      }
    },
    onConfirm(val) {
      console.log(val);
      this.show = false;
      switch (val) {
        case "文字":
          this.detail.list[this.index].push({
            type: "span",
            value: "标题",
          });
          break;
        case "输入框":
          this.detail.list[this.index].push({
            type: "input",
            value: "",
            placeholder: "",
            reg: "phone",
            required: false
          });
          break;
        case "单选框":
          this.detail.list[this.index].push({
            type: "radio",
            value: "",
            required: false,
            list: [
              {
                title: "是",
                val: "1",
              },
              {
                title: "否",
                val: "2",
              },
            ],
          });
          break;
        case "多选框":
          this.detail.list[this.index].push({
            type: "checkbox",
            value: [],
            required: false,
            list: [
              {
                title: "11",
                val: "11",
              },
              {
                title: "22",
                val: "22",
              },
            ],
            reg: "",
          });
          break;
        case "文本域":
          this.detail.list[this.index].push({
            type: "textarea",
            value: "",
            required: false,
            placeholder: "",
          });
          break;
      }
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
    },
    addTemp() {
      this.detail.list.push([]);
      this.index++;
      this.isIndex();
    },
    removeTemp() {
      if (this.detail.list.length > 1) {
        Dialog.alert({
          message: "是否删除此选项卡",
          showCancelButton: true,
          confirmButtonColor: "rgb(41, 121, 226)",
        }).then(() => {
          this.detail.list.splice(this.index, 1);
          this.index = 0;
          this.isIndex();
        });
      }else {
        Toast('选项卡至少一条数据')
      }
    },
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