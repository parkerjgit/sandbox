import React from 'react';
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {fetchJsFromCDN} from '../utils.js'

// see
// https://codepen.io/WebSeed/pen/ZmXxKz
// https://blog.bitsrc.io/starting-with-react-16-and-three-js-in-5-minutes-3079b8829817
export const Test = () => {

  const { useRef, useEffect } = React;
  const canvas = useRef(null);
  const controls = useRef(null);

  useEffect(() => {
    let fetchPromise = fetch('../surface1.3dm');
    console.log('fetchPromise: ', fetchPromise)
    // let fetchPromise = fetch('https://files.mcneel.com/rhino3dm/models/this.RHINOLOGO.3dm');

    var rhinoProm = fetchJsFromCDN(
      "https://cdn.jsdelivr.net/npm/rhino3dm@0.12.0/rhino3dm.min.js",
      ["rhino3dm"]
    );
    var computeProm = fetchJsFromCDN(
      "https://files.mcneel.com/rhino3dm/js/latest/compute.rhino3d.js",
      ["RhinoCompute"]
    );

    rhinoProm.then(rhino3dm => {
      rhino3dm().then(async m => {
        console.log('Loaded rhino3dm.');
        let rhino = m;

        let res = await fetchPromise;
        let buffer = await res.arrayBuffer();
        let arr = new Uint8Array(buffer);
        let doc = rhino.File3dm.fromByteArray(arr);

        THREE.Object3D.DefaultUp = new THREE.Vector3(0,0,1)
        init();
        let material = new THREE.MeshNormalMaterial();

        let objects = doc.objects();
        for (let i = 0; i < objects.count; i++) {
          let mesh = objects.get(i).geometry();
          if(mesh instanceof rhino.Mesh) {
            // convert all meshes in 3dm model into threejs objects
            let threeMesh = meshToThreejs(mesh, material);
            scene.add(threeMesh);
          }
        }

      })
    })

    // BOILERPLATE //
    var scene, camera, renderer;

    function init(){
      console.log('init!')
      scene = new THREE.Scene();
      scene.background = new THREE.Color(5,1,1);
      camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 1, 1000 );
      camera.position.set(26,-40,5)

      renderer = new THREE.WebGLRenderer({antialias: true});
      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( window.innerWidth, window.innerHeight );
      // var canvas = document.getElementById("canvas");
      console.log('canvas.current', canvas.current);
      canvas.current.appendChild( renderer.domElement );

      controls.current = new OrbitControls( camera, renderer.domElement  );

      window.addEventListener( 'resize', onWindowResize, false );
      animate();
    }

    var animate = function () {
      requestAnimationFrame( animate );
      controls.current.update();
      renderer.render( scene, camera );
    };

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
      animate();
    }

    function meshToThreejs(mesh, material) {
      let loader = new THREE.BufferGeometryLoader();
      var geometry = loader.parse(mesh.toThreejsJSON());
      return new THREE.Mesh(geometry, material);
    }
  },[])

  return (
    <div ref={canvas} />
  )
}