import * as THREE from 'three';

//Scena y Camara
const scene     = new THREE.Scene();
const camera    = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//renderer configuracion
const renderer  = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement ); //añades el renderer al body 

// Creando el cubo
const geometry = new THREE.BoxGeometry(1,1,1);
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
cube.name = "cube";

// Por defecto el cubo y la camara tiene la position en x:0 y:0 z:0 por eso se ve negro, debes
// "sacar" la camara de dentrod e la caja (esta aqui)
// por ende con z = 5, sacas la camara 5 metros HACIA ATRAS
// arg1 = x:5 (5metros a la derecha), y:5 (5 metros arriba), z:5 (5 metros atras).
camera.position.set( 2, 2, 2 );
camera.lookAt( cube.position ); //indica a la camara que vea a la posicion del cubo actual


//Añades a tu ESCENA el cubo
scene.add( cube );


//Creando una luz de tipo AMBIENT LIGHT
//es una luz que ilumina todo (de ambiente), es como si estuvieras en el
// espacio y ves minimo de coloracion de las cosas, similar a cuando vas de noche
// las estrellas iluminan un POCO el ambiente...
const ambientLight = new THREE.AmbientLight( 0x404040 );
scene.add( ambientLight );


function animate() {

    cube.rotation.y +=.02;
    //Indicando al renderizador que renderize la imagen , necesitas la scena y la camara
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );