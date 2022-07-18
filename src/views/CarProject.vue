<template>
  <div class="home" @click="onMouseClick">
    <div class="canvas-container" ref="canvasDom"></div>
    <div class="home-content">
      <div style="margin-top:10px">汽车展示与选配</div>
      <h6 style="margin:10px 0">选择车身颜色</h6>
      <div class="select">
        <div class="select-item" v-for="(item, index) in colors" :key="index" @click="selectColor(index)">
          <div class="select-item-color" :style="{backgroundColor: item.color}"></div>
        </div>
      </div>
      <h6 style="margin:10px 0">选择贴膜材质</h6>
      <div class="select">
        <div class="select-item" v-for="(item, index) in materials" :key="index" @click="selectMaterial(index)">
          <div class="select-title">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import uni from '../js/uni.webview.1.5.3'
let controls;
let carBody = [], // 车身
    glassCar = []; // 玻璃

const scene = new THREE.Scene()

// 相机
const camera = new THREE.PerspectiveCamera(
  40, window.innerWidth / window.innerHeight,0.1,1000
)
camera.position.set(0,2,6);

const renderer = new THREE.WebGL1Renderer({
  antialias: true // 抗锯齿
})
renderer.setSize(window.innerWidth, window.innerHeight);

const render = () => {
  renderer.render(scene, camera);
  controls && controls.update();
  requestAnimationFrame(render);
}

export default {
  data() {
    return {
      colors: [
        {
          color: "red"
        },
        {
          color: "blue"
        },
        {
          color: "green"
        },
        {
          color: "yellow"
        },
        {
          color: "purple"
        },
        {
          color: "lightgray"
        },
        {
          color: "gray"
        },
        {
          color: "white"
        },
        {
          color: "black"
        }
      ],
      materials: [
        {
          name: "磨砂",
          value: 1
        },
        {
          name: "冰品",
          value: 0
        }
      ],
      bodyMaterial: '',
      glassMaterial: ''
    }
  },
  created() {
    // uni.postMessage({
    //     data: {
    //         type: 'setStore',
    //         content: {
    //             name: 'name',
    //             value: 'Kin'
    //         }
    //     }
    // },'*')
  },
  mounted() {
    this.$refs.canvasDom.appendChild(renderer.domElement);
    renderer.setClearColor('#000');
    scene.background = new THREE.Color('#ccc');
    scene.environment = new THREE.Color('#ccc');
    render();

    // 地面
    // const gridHelper = new THREE.GridHelper(10,10);
    // gridHelper.material.opacity = 0.2;
    // gridHelper.material.transparent = true;
    // scene.add(gridHelper);

    // 创建车身材质
    this.bodyMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xff0000,
      metalness: 1,
      roughness: 0.5,
      clearcoat: 1,
      clearcoatRoughness: 0
    })

    // 控制器
    controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.update();

    // 加载模型
    const loader = new GLTFLoader();
    loader.load('./model/car.gltf', (mesh) => {
      const m = mesh.scene
      m.traverse((child) => {
        if(child.isMesh) {
          // child.castShadow = true;
          // child.receiveShadow = true;
          if(child.name === 'mesh_11' || child.name === 'mesh_12' ||
             child.name === 'mesh_10' || child.name === 'mesh_5' ||
             child.name === 'mesh_8' || child.name === 'mesh_7' ||
             child.name === 'mesh_6') {
            carBody.push(child);
            child.material = this.bodyMaterial
          }
          // if(child.name === 'mesh_18' || child.name === 'mesh_19' ||
          //    child.name === 'mesh_23' || child.name === 'mesh_27') {
          //   hoodCar.push(child)
          //   child.material = hoodMaterial
          // }
          if(child.name === 'mesh_22_1' || child.name === 'mesh_24' ||
             child.name === 'mesh_22') {
            glassCar.push(child)
            child.material = this.glassMaterial
          }
        }
      })
      scene.add(m)
    })

    // 灯光
    const light_1 = new THREE.DirectionalLight(0xffffff, 1)
    light_1.position.set(0,0,10)
    scene.add(light_1)
    const light_2 = new THREE.DirectionalLight(0xffffff, 1)
    light_2.position.set(0,0,-10)
    scene.add(light_2)
    const light_3 = new THREE.DirectionalLight(0xffffff, 1)
    light_3.position.set(10,0,0)
    scene.add(light_3)
    const light_4 = new THREE.DirectionalLight(0xffffff, 1)
    light_4.position.set(-10,0,0)
    scene.add(light_4)
    const light_5 = new THREE.DirectionalLight(0xffffff, 1)
    light_5.position.set(0,10,0)
    scene.add(light_5)
    const light_6 = new THREE.DirectionalLight(0xffffff, 0.3)
    light_6.position.set(5,10,0)
    scene.add(light_6)
    const light_7 = new THREE.DirectionalLight(0xffffff, 0.3)
    light_7.position.set(0,10,5)
    scene.add(light_7)
    const light_8 = new THREE.DirectionalLight(0xffffff, 0.3)
    light_8.position.set(0,10,-5)
    scene.add(light_8)
    const light_9 = new THREE.DirectionalLight(0xffffff, 0.3)
    light_9.position.set(-5,10,0)
    scene.add(light_9)
  },
  methods: {
    onMouseClick(event) {
      // 射线选择模型
      let raycaster = new THREE.Raycaster();
      let mouse = new THREE.Vector2();
      mouse.x = (event.clientX/window.innerWidth)*2-1
      mouse.y = (event.clientY/window.innerHeight)*2-1
      raycaster.setFromCamera( mouse, camera );

      // 获取raycaster直线和所有模型相交的数组集合
      raycaster.intersectObjects( scene.children );
    },
    selectColor(index) {
      this.bodyMaterial.color.set(this.colors[index].color)
    },
    selectMaterial(index) {
      this.bodyMaterial.clearcoatRoughness =  this.materials[index].value
    }
  }
}
</script>

<style scoped>
.home {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.home-content {
  position: fixed;
  top: 0;
  right: 20px;
}
.select {
  display: flex;
}
.select-item-color {
  width: 15px;
  height: 15px;
  border: 1px solid rgb(143, 143, 143);
  margin: 5px 5px 5px 0;
  display: inline-block;
  cursor: pointer;
  border-radius: 10px;
}
.select-title {
  margin: 5px;
  background: rgb(168, 168, 168);
  border-radius: 10px;
  padding: 1px 5px;
  font-size: 14px;
  cursor: pointer;
  color: #fff;
}
</style>