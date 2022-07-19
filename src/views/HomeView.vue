<!-- 我的项目演示 -->
<template>
    <div>
        <button @click="save">保存数据</button>
        <button @click="getValue">获取数据</button>
        <button @click="removeValue">删除数据</button>
        <button @click="nav('/cars')">汽车展厅</button>
    </div>
</template>

<script>
import { Toast } from 'vant'
import uni from '../js/uni.webview.1.5.3'
export default {
    data() {
        return {}
    },
    created() {
        // 以下函数用于接收返回值
        window.setResult = (res) => {
            console.log(res)
            Toast(`${res}`)
        }
        window.getResult = (res) => {
            console.log(res)
            Toast(`${res}`)
        }
        window.removeResult = (res) => {
            console.log(res)
            Toast(`${res}`)
        }
        console.log('数据设置成功')
        uni.postMessage({
            data: {
                type: 'landscape',
                content: ''
            }
        },'*')
    },
    beforeDestroy() {
        uni.postMessage({
            data: {
                type: 'portrait',
                content: ''
            }
        },'*')
    },
    methods: {
        save() {
            uni.postMessage({
                data: {
                    type: 'setStore',
                    content: {
                        name: 'name',
                        value: 'Kin'
                    }
                }
            },'*')
        },
        getValue() {
            uni.postMessage({
                data: {
                    type: 'getStore',
                    content: {
                        name: 'name',
                        value: ''
                    }
                }
            },'*')
        },
        removeValue() {
            uni.postMessage({
                data: {
                    type: 'removeStore',
                    content: {
                        name: 'name',
                        value: ''
                    }
                }
            },'*')
        },
        nav(name) {
            this.$router.push(name)
        }
    }
}
</script>

<style scoped>

</style>