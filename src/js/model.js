import * as BABYLON from 'babylonjs'
import "babylonjs-loaders";
export function createCamera(scene, canvas) {
    // 参数：名称、alpha、beta、半径、目标位置、场景
    // ArcRotateCamera(弧形旋转相机)
    const camera = new BABYLON.ArcRotateCamera("Camera",0,0,50,
    	new BABYLON.Vector3(0, 0.5, 0),scene);
    camera.attachControl(canvas, true);
    // beta最大最小值限制
    // camera.lowerBetaLimit = 0;
    camera.upperBetaLimit = 1.5;
    // 相机缩放大小限制
    camera.lowerRadiusLimit = 8;
    camera.upperRadiusLimit = 15;
    // 相机位置
    camera.setPosition(new BABYLON.Vector3(40, 50, 70));
    // 相机自动旋转
    // camera.useFramingBehavior = true;
    //变焦速度
    // camera.wheelPrecision = 20; //电脑滚轮速度，越小灵敏度越高
    // camera.pinchPrecision = 20; //手机放大缩小速度，越小灵敏度越高
}
// 设置场景HDR材质
export function createHDR(scene) {
    let hdrTexture = new BABYLON.HDRCubeTexture("scene.hdr", scene, 512);
    let hdrSkybox = BABYLON.Mesh.CreateBox("hdrSkyBox", 1000.0, scene);
    let hdrSkyboxMaterial = new BABYLON.PBRMaterial("skyBox", scene);
    hdrSkyboxMaterial.backFaceCulling = false;
    hdrSkyboxMaterial.reflectionTexture = hdrTexture.clone();
    hdrSkyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    hdrSkybox.material = hdrSkyboxMaterial;
    scene.environmentTexture = hdrTexture;
}

// 设置场景DDS材质
export function createDDS(scene) {
    let hdrTexture = new BABYLON.CubeTexture.CreateFromPrefilteredData(
        "environment.dds",scene);
    hdrTexture.gammaSpace = false;
    scene.environmentTexture = hdrTexture;
}

// 设置全景图像
export function photo(scene) {
    let dome = new BABYLON.PhotoDome("testdome","./img/sidexside.jpg",
        {resolution: 32,size: 2000},scene);
    dome.imageMode = BABYLON.PhotoDome.MODE_SIDEBYSIDE;
}

// 设置全景视频
export function video(scene) {
    new BABYLON.VideoDome(
        "videoDome",["./video/2.mp4"],
        {resolution: 32, clickToPlay: true},scene
    );
}

// 创建平行光
export function createDirectionalLight(scene) {
    // 参数：名称、目标位置、场景
    const light = new BABYLON.DirectionalLight("direct",
    	new BABYLON.Vector3(10, -10, 10),scene);
    light.position = new BABYLON.Vector3(20,20,20)
}
// 创建点光灯
// 参数：名称、目标位置、场景
export function createPointLight(scene) {
  	const light = new BABYLON.PointLight("dir01",new BABYLON.Vector3(0, 0, -5),scene);
  	light.position = new BABYLON.Vector3(0, 15, 0);
    light.intensity = 6;// 灯光亮度
  	light.setEnabled(false);// 灯光开关
    light.range = 100;// 灯光范围
}

// 创建半球灯光
export function createHemisphericLight(scene) {
    const light = new BABYLON.HemisphericLight("hemiLight",new BABYLON.Vector3(0, 0, -5),scene);
    light.diffuse = new BABYLON.Color3(1, 0, 0);
	light.specular = new BABYLON.Color3(0, 1, 0);
	light.groundColor = new BABYLON.Color3(0, 1, 0);
}

// 创建聚光灯
// 参数：名称、位置、方向、角度、指数
export function createSpotLight(scene) {
    const light = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(-1, 1, -1), new BABYLON.Vector3(0, -1, 0), Math.PI / 2, 10, scene);
	light.diffuse = new BABYLON.Color3(1, 0, 0);
	light.specular = new BABYLON.Color3(0, 1, 0);
}

// 加载模型
export function loadGltf(scene, path) {
    return new Promise((resolve, reject) => {
        let meshList = []
        BABYLON.SceneLoader.ImportMesh("", path, "", scene, function (meshes) {
            meshList = meshes
            resolve(meshList)
        })
    })
}

// 动作
export function actionManger(scene, meshList) {
    meshList.forEach(mesh => {
        mesh['actionManager'] = new BABYLON.ActionManager(scene);
        mesh.actionManager.registerAction(
            new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnDoublePickTrigger, 
            mesh, "scaling", new BABYLON.Vector3(1, 1, 1), 150));
        mesh.actionManager.registerAction(
            new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnLeftPickTrigger,
            mesh, "scaling", new BABYLON.Vector3(1.05, 1.05, 1.05), 150));
    })
}