
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";




const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

// Load a 3D model
const loader = new GLTFLoader();
loader.load(
  './models/earth/scene.gltf',
  (gltf) => {
    const model = gltf.scene;

    // Set an initial scale for the model
    const initialScale = 0.15;
    model.scale.set(initialScale, initialScale, initialScale);
    scene.add(model);

    adjustModelScale();

    // Rotate the model
    function rotateModel() {
      model.rotation.y += 0.005; // Adjust rotation speed
    }

    // Function to adjust model scale based on window size
    function adjustModelScale() {
    const scaleFactor = Math.min(window.innerWidth, window.innerHeight) / 1000;
    model.scale.set(initialScale * scaleFactor, initialScale * scaleFactor, initialScale * scaleFactor);
    }

    // Update render loop
    function animate() {
      requestAnimationFrame(animate);
      rotateModel();
      renderer.render(scene, camera);
    }
    animate();

    // Resize tthe camera angle and model size when the window is re-sized
    window.addEventListener('resize', () => {
    camera.aspect = (window.innerWidth) / (window.innerHeight);
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    adjustModelScale();
});

  },
  undefined,
  (error) => {
    console.error('An error occurred while loading the model', error);
  }
);

const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(1, 1, 1).normalize();
scene.add(light);




