import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { Scene } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-show-pump',
  templateUrl: './show-pump.component.html',
  styleUrls: ['./show-pump.component.scss']
})
export class ShowPumpComponent {

  sceneWidth = window.innerWidth;
  sceneHeight = window.innerHeight;

 ngOnInit() {
    const scene = this.initScene();
    
    const camera = new THREE.PerspectiveCamera( 75, this.sceneWidth / this.sceneHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( this.sceneWidth, this.sceneHeight);
    document.body.appendChild( renderer.domElement );

    /** add (mouse) controlls */ 
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = true;

    /** add lights */
    const keyLight = new THREE.DirectionalLight( 0xffffff, 4.0 );
    keyLight.position.set(-100, 0, 100);

    const fillLight = new THREE.DirectionalLight( 0xffffff, 1.75 );
    fillLight.position.set(100, 0, 100);

    const backLight = new THREE.DirectionalLight( 0xffffff, 4.0 );
    backLight.position.set(100, 0, -100).normalize();

    const topLight = new THREE.DirectionalLight( 0xffffff, 1.75 );
    topLight.position.set(0, 100, 0);

    scene.add(keyLight);
    scene.add(fillLight);
    scene.add(backLight);
    scene.add(topLight);

    /** load and add Material to object */
    const mtlLoader = new MTLLoader();
    mtlLoader.setResourcePath('assets/models/');
    mtlLoader.setPath('assets/models/');
    mtlLoader.load('Pump_20028334.mtl', materials => {
      materials.preload();

      /** add object as object (not as geometry) */
      const objLoader = new OBJLoader();

      /** add material to object */
      objLoader.setMaterials(materials);

      objLoader.setPath('assets/models/');
      objLoader.load('Pump_20028334.obj', object => {
        //object.position.y -= 60;
        scene.add(object)
      })
    });


    //scene.add( cube );
    camera.position.z = 50;

    /** START: resize window */
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    
        renderer.setSize( window.innerWidth, window.innerHeight );
    
    }
    window.addEventListener( 'resize', onWindowResize);
    /** END: resize window */

    function animate() {
      requestAnimationFrame( animate );

      /** (auto-)rotation of object */ 
      //cube.rotation.x += 0.01;
      //cube.rotation.y += 0.01;

      controls.update;
      renderer.render( scene, camera );
    }

    animate();
 }
  onWindowResize(camera:THREE.PerspectiveCamera, renderer:THREE.WebGLRenderer ) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    
        renderer.setSize( window.innerWidth, window.innerHeight );
  }
  initScene() : Scene {
    const scene = new Scene();
    scene.background = new THREE.Color(0xcfede7)
    return scene;
  }
}
