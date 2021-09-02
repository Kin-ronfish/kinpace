<template>
    <div style="height:800px;">
        <h3 id="timeLine" class="text-center paint animated flipInX">
          TimeLine
        </h3>
        <div class="line"></div>
        <div class="box" v-for="(item, index1) in list" :key="index1">
            <div v-if="index1%2==0" class="left">
                <div>
                    <div class="item aminated fadeInUp" :style="aminte(index2)" v-for="(value, index2) in workList" :key="index2">
                        <div v-if="value.time.includes(item)">{{value.value}}</div>
                    </div>
                </div>
                <div class="time aminated fadeIn" :style="amin(index1)">{{item}}</div>
            </div>
            <div v-if="index1%2==0"></div>
            <div v-if="index1%2!=0"></div>
            <div v-if="index1%2!=0" class="right">
                <div class="aminated fadeIn time" :style="amin(index1)">{{item}}</div>
                <div>
                    <div class="item aminated fadeInLeft" :style="aminte(index3)" v-for="(value, index3) in workList" :key="index3">
                        <div v-if="value.time.includes(item)">{{value.value}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            list: Array,
            workList: Array
        },
        data() {
            return {
                num: 0,
                id: ''
            }
        },
        created() {
            const height = window.pageYOffset
            if (height!=0){
                window.scrollTo({ 
                    top: 0, 
                    behavior: "smooth" 
                })
            }
        },
        mounted() {
            setTimeout(() => {
                this.scro()
            }, 3000);
        },
        watch: {
            num(newVal) {
                const height = document.body.clientHeight
                if(newVal > height-500) {
                    clearInterval(this.id)
                }
            }
        },
        methods: {
            amin(index) {
                return `animation-delay: ${index+3}s;`
            },
            aminte(index) {
                return `animation-delay: ${(index+1)*380}ms;`
            },
            scro() {
                this.id = setInterval(() => {
                    window.scrollTo({
                        top: this.num,
                        behavior: 'smooth'
                    })
                    this.num += 2
                }, 50);
            }
        }
    }
</script>

<style scoped>
@keyframes timeline {
    0% {
        height: 1px;
    }
    100% {
        height: 650px;
    }
}
@media (max-width:768px) {
    .left {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        color: #fff;
        margin-right: 170px;
        width: 150px;
    }
    .right {
        display: flex;
        justify-content: space-between;
        color: #fff;
        margin-left: 170px;
        width: 150px;
    }
}
@media (min-width:768px) {
    .left {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        color: #fff;
        margin-right: 200px;
    }
    .right {
        display: flex;
        justify-content: space-between;
        color: #fff;
        margin-left: 200px;
    }
}
.box {
    margin: auto;
    display: flex;
    justify-content: center;
    width: 100%;
}
.line {
    position: absolute;
    top: 120px;
    left: 50%;
    border: 1px solid #ddd;
    animation: timeline 14s;
    animation-timing-function: linear;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    width: 1px;
    height: 1px;
}
.paint {
  color: #fff;
  background-color: rgb(77, 66, 93);
  font-size: 25px;
  padding: 12px;
  margin-top: 60px;
  animation-delay: 500ms;
}
.item,
.time {
    margin: 0 5px;
}
</style>