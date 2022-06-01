<template>
  <div>
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
      meshList: []
    };
  },
  mounted() {
    this.render();
  },
  methods: {
    createScene() {
      let scene = new BABYLON.Scene(this.engine);
      createCamera(scene, this.canvas);
      loadGltf(scene, 'model/car.gltf').then(res => {
        this.meshList = res
        console.log(res) 
        let pbr = new BABYLON.PBRMaterial("pbr", scene)
        pbr.albedoColor = new BABYLON.Color3(1, 1, 1);
        pbr.metallic = 0.1;
        pbr.roughness = 0.1;
        pbr.subSurface.isRefractionEnabled = true;
        pbr.subSurface.indexOfRefraction = 1.5;
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
</style>
