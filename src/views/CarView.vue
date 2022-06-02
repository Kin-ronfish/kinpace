<template>
  <div>
    <!-- <div class="content"><button @click="change">切换</button></div> -->
    <canvas id="renderCanvas"></canvas>
  </div>
</template>

<script>
import * as BABYLON from "babylonjs";
import {createCamera,loadGltf,createDirectionalLight,createDDS} from '../js/model'
export default {
  data() {
    return {
      canvas: "",
      engine: "",
      meshList: [],
      path: 'model/car_3.gltf',
      count: 0
    };
  },
  mounted() {
    this.render();
  },
  watch: {
    count() {
      setTimeout(() => {
        this.render()
      },100)
    }
  },
  methods: {
    createScene() {
      let scene = new BABYLON.Scene(this.engine);
      createCamera(scene, this.canvas);
      loadGltf(scene, this.path).then(res => {
        this.meshList = res
        console.log(res) 
        let pbr = new BABYLON.PBRMaterial("pbr", scene)
        pbr.albedoColor = new BABYLON.Color3(1, 1, 1);
        // pbr.subSurface.isRefractionEnabled = true;
        // pbr.subSurface.indexOfRefraction = 1.5;
        if(this.path.indexOf('car_5')!=-1) {
          pbr.metallic = 0.05;
          pbr.roughness = 0.05;
          this.meshList.forEach(item => {
            if(item.name === 'bonnet_ok_primitive1' ||
              item.name === 'door_lf_ok_primitive4' ||
              item.name === 'chassi_primitive9' ||
              item.name === 'boot_ok_primitive2' ||
              item.name === 'door_rf_ok_primitive4' ||
              item.name === 'bump_fro01_primitive2' ||
              item.name === 'boot_ok_primitive5' ||
              item.name === 'extra2') {
              item.material = pbr
            }
          })
        }else if(this.path.indexOf('car_2')!=-1) {
          pbr.metallic = 0.05;
          pbr.roughness = 0.05;
          this.meshList.forEach(item => {
            if(item.name === 'hood_c' ||
            item.name === 'bumper_f40_primitive0' ||
            item.name === 'door_rig07' ||
            item.name === 'body_a01_primitive1' ||
            item.name === 'skirt_ri21_primitive0' ||
            item.name === 'body_a01_primitive0' ||
            item.name === 'door_lef02' ||
            item.name === 'fender_f01_primitive0' ||
            item.name === 'fender_f04_primitive0' ||
            item.name === 'bumper_r27_primitive1' ||
            item.name === 'trunk_c_primitive0' ||
            item.name === 'skirt_le13_primitive0') {
              item.material = pbr
            }
          })
        }else if(this.path.indexOf('car_3')!=-1) {
          pbr.metallic = 0.01;
          pbr.roughness = 0;
          this.meshList.forEach(item => {
            if(item.name === 'Component#33' ||
            item.name === 'Component#26') {
              item.material = pbr
            }
          })
        }else if(this.path.indexOf('car_4')!=-1) {
          pbr.metallic = 0.01;
          pbr.roughness = 0;
          this.meshList.forEach(item => {
            if(item.name === 'node15' ||
              item.name === 'node18' ||
              item.name === 'node10' ||
              item.name === 'node12' ||
              item.name === 'node14' ||
              item.name === 'node16' ||
              item.name === 'node11' ||
              item.name === 'node9') {
              item.material = pbr
            }
          })
        }else if(this.path.indexOf('car_1')!=-1) {
          pbr.metallic = 0.01;
          pbr.roughness = 0;
          this.meshList.forEach(item => {
            if(item.name === 'node15' ||
              item.name === 'node18' ||
              item.name === 'node10' ||
              item.name === 'node12' ||
              item.name === 'node14' ||
              item.name === 'node16' ||
              item.name === 'node11' ||
              item.name === 'node9') {
              item.material = pbr
            }
          })
        }
        // actionManger(scene, this.meshList)
      })
      createDDS(scene);
      // 场景射线拾取mesh
      scene.onPointerObservable.add((mesh) => {
        if(mesh.pickInfo.pickedMesh&&mesh.pickInfo.pickedMesh.name) {
          console.log(mesh.pickInfo.pickedMesh.name)
          // let material = new BABYLON.StandardMaterial('mat', scene)
          // material.diffuseColor = new BABYLON.Color3(0.42, 0.76, 0.45)
          // mesh.pickInfo.pickedMesh.material = material
        }
      })
      createDirectionalLight(scene);
      // ...内容主要在这里加入场景
      return scene;
    },
    render() {
      // 获取到renderCanvas这个要素
      this.canvas = document.getElementById("renderCanvas");
      this.engine = new BABYLON.Engine(this.canvas, true);
      let scene = this.createScene(); // 首先调用它并赋值给一个变量
      this.engine.runRenderLoop(function () {
        scene.render();
      });
      window.addEventListener("resize",  ()=> {
        this.engine.resize();
      });
    },
    change() {
      if(this.count===4) {
        count = 0
      }
      if(this.count === 0) {
        this.path = 'model/car_1.gltf'
      }else if(this.count === 1) {
        this.path = 'model/car_2.gltf'
      }else if(this.count === 2) {
        this.path = 'model/car_3.gltf'
      }else if(this.count === 3) {
        this.path = 'model/car_4.gltf'
      }
      this.count += 1
    }
  },
};
</script>

<style scoped>
#renderCanvas {
  width: 100%;
  height: 100%;
  touch-action: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  outline: none;
}
.content {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
