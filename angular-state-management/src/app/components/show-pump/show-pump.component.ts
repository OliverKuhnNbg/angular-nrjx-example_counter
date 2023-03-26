import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as THREE from "three";
import { Scene } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-show-pump',
  templateUrl: './show-pump.component.html',
  styleUrls: ['./show-pump.component.scss']
})
export class ShowPumpComponent {

 ngOnInit() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    function init(obj:any){
      console.log(obj)
      const geometry = obj.children[0].geometry; //new THREE.BoxGeometry( 2, 2, 2 );
      const material = new THREE.MeshBasicMaterial( { color: 0x00ff80 } );
      const cube = new THREE.Mesh( geometry, material );

      /** add (mouse) controlls */ 
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.enableZoom = true;


      scene.add( cube );

      camera.position.z = 200;

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
    
    /**load .obj */
    const loader = new OBJLoader();
    loader.load('assets/models/r2-d2.obj', obj => {init(obj)})
 }
}
