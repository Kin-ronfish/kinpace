<template>
    <div>
        <div v-for="(item,index) in list" :key="index">
            <div class="item" v-if="item.type==='input'" @click="handleEdit(index)">
                <input :disabled="edit" type="text" v-model="item.value" :placeholder="item.placeholder">
                <van-icon v-show="edit" name="close" @click.stop="remove(index)" />
            </div>
            <div class="item" v-if="item.type==='span'" @click="handleEdit(index)">
                <div style="width:90%;margin-right: 10px;word-wrap: break-word;">{{item.value}}</div>
                <van-icon v-show="edit" name="close" @click.stop="remove(index)" />
            </div>
            <div class="item" v-if="item.type==='textarea'" @click="handleEdit(index)">
                <textarea style="height:80px" :disabled="edit" type="text" v-model="item.value" :placeholder="item.placeholder"></textarea>
                <van-icon v-show="edit" name="close" @click.stop="remove(index)" />
            </div>
            <div class="item" v-if="item.type==='radio'" @click="handleEdit(index)">
                <van-radio-group :disabled="edit" v-model="item.value">
                    <van-radio v-for="(val,index_1) in item.list" 
                    style="margin:10px 0" :key="index_1" :name="val.val">
                    {{val.title}}
                    </van-radio>
                </van-radio-group>
                <van-icon v-show="edit" name="close" @click.stop="remove(index)" />
            </div>
            <div class="item" v-if="item.type==='checkbox'" @click="handleEdit(index)">
                <van-checkbox-group :disabled="edit" v-model="item.value">
                    <van-checkbox style="margin:10px 0" shape="square" :name="val.val"
                    v-for="(val,index_1) in item.list" :key="index_1">
                        {{val.title}}
                    </van-checkbox>
                </van-checkbox-group>
                <van-icon v-show="edit" name="close" @click.stop="remove(index)" />
            </div>
        </div>
        <van-popup v-model="show" position="bottom" style="max-height:60%">
            <van-cell-group style="margin-bottom:40px">
                <div v-if="editItem.type==='span'">
                    <div style="margin:15px">初始值</div>
                    <div style="margin:15px">
                        <textarea style="border:none;width: 100%;background: rgb(245, 245, 245);height: 80px;resize: none;" 
                        v-model="editItem.value" placeholder="输入绑定值"></textarea>
                    </div>
                </div>
                <van-cell v-else title="初始值">
                    <input type="text" placeholder="输入绑定值" style="border:none;text-align: right;" v-model="editItem.value">
                </van-cell>
                <div v-if="editItem.type==='input' || editItem.type==='textarea'">
                    <van-cell title="提示语句">
                        <input type="text" placeholder="输入提示语句" style="border:none;text-align: right;" v-model="editItem.placeholder">
                    </van-cell>
                </div>
                <div style="margin-bottom:20px" v-if="editItem.type==='radio' || editItem.type==='checkbox'">
                    <div style="margin: 10px 15px">选项列表</div>
                    <div v-for="(item,index) in editItem.list" :key="index">
                        <div class="inputList">
                            <div>
                                <input type="text" style="width:120px" placeholder="输入标题" v-model="item.title">
                                <input type="text" style="width:120px;margin-left: 10px;" placeholder="输入绑定值" v-model="item.val">
                            </div>
                            <div>
                                <van-icon name="plus" @click="addItem" />
                                <van-icon name="minus" style="margin-left:10px" @click="removeItem(index)" />
                            </div>
                        </div>
                    </div>
                </div>
            </van-cell-group>
        </van-popup>
    </div>
</template>

<script>
    export default {
        props: {
            edit: {
                type: Boolean,
                default: false
            },
            list: Array
        },
        data() {
            return {
                show: false,
                editItem: ''
            }
        },
        methods: {
            handleEdit(index) {
                if(this.edit) {
                    console.log(index)
                    this.show = true
                    this.editItem = this.list[index]
                }
            },
            remove(index) {
                this.list.splice(index,1)
            },
            addItem() {
                this.editItem.list.push({title: "",val: ""})
            },
            removeItem(index) {
                this.editItem.list.splice(index,1)
            }
        }
    }
</script>

<style scoped>
.item {
    margin: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.item input {
    width: 100%;
    margin-right: 10px;
}
.item textarea {
    width: 100%;
    resize: none;
    margin-right: 10px;
}
.inputList {
    padding: 5px;
    background: rgb(245, 245, 245);
    margin: 5px 15px;
    display: flex;
    justify-content: space-between;
}
.inputList input {
    border:none;
}
</style>