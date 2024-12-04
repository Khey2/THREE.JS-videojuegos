import scene from "./basics/Scene";
import camera from "./basics/Camera";
import renderer from "./basics/Renderer";
import cube from "./basics/Shapes/Cube";
import ligth from "./basics/ligth";
import resize from "./basics/resize";
import plane from "./basics/Shapes/Plane";
import loopMachine from "./basics/LoopMachine";
import keyListener from "./basics/KeyListener";
import keyCode from "./basics/KeyCode";


cube.name = "cube";

scene.add( cube );
scene.add( ligth );
scene.add( plane );

camera.position.set( 2,2,2 );
camera.lookAt( cube.position );

renderer.render ( scene, camera ); // Take 1 picture

loopMachine.addCallback( ()=> {
    if( keyListener.isPressed( keyCode.ENTER  ) ) cube.rotation.y  += 0.02;
	renderer.render( scene, camera );
});

//animation
// function animate() {
    
// }
// renderer.setAnimationLoop( animate );


resize.start( renderer );
loopMachine.start(); //ANIMACION SE PRENDE
keyListener.start();
