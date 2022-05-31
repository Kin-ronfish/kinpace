<template>
  <div>
    <canvas id="renderCanvas"></canvas>
  </div>
</template>

<script>
import * as BABYLON from "babylonjs";
import {createCamera,loadGltf,createDirectionalLight} from '../js/model'
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
        // actionManger(scene, this.meshList)
      })
      // 场景射线拾取mesh
      scene.onPointerObservable.add((mesh) => {
        if(mesh.pickInfo.pickedMesh&&mesh.pickInfo.pickedMesh.name) {
          console.log(mesh.pickInfo.pickedMesh.name)
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
