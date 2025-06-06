import * as THREE from 'three';
import "./style.css"
import {QuitGameButton} from "./components/Button/Button.js"

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.set( 0, 0, 10 );
camera.lookAt( 0, 0, 0 );

const mat = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

const geo = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( geo, mat );
scene.add( line );

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

function animate() {
cube.rotation.x += 0.01;
cube.rotation.y += 0.01;
  renderer.render( scene, camera );
}


renderer.setAnimationLoop( animate );

const quitButton = new QuitGameButton(document.body)
quitButton.render()
