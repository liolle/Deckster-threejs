import * as THREE from 'three';
import "./style.css"
import {QuitGameButton} from "./components/Button/Button.js"

// Setup scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth / window.innerHeight, 
  0.1, 
  1000
);

const renderer = new THREE.WebGLRenderer()

const geometry = new THREE.PlaneGeometry( 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry, material );
scene.add( plane );

//board.rotation.x = -Math.PI / 2; // Lay flat

/*
// Create a card
const card = new THREE.Mesh(
  new THREE.BoxGeometry(0.0635, 0.003, 0.0889),
  new THREE.MeshStandardMaterial({ 
    color: 0x505050
  })
);
card.position.set(0, 0.002, 0); // Slightly above board
scene.add(card);
*/
// Position camera
camera.position.set(1, 1, 2);
camera.lookAt(0, 0, 0);

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

function animate() {
  renderer.render( scene, camera );
}


renderer.setAnimationLoop( animate );

const quitButton = new QuitGameButton(document.body)
quitButton.addEventListener("click",()=>{
  console.log("quit")
})
quitButton.render()
