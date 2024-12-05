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
import characterController from "./controllers/CharacterController";
import keyController from "./controllers/KeysController";
import moveController from "./controllers/MoveController";


cube.name = "cube";

scene.add( cube );
scene.add( ligth );
scene.add( plane );

camera.position.set( 2,2,2 );

camera.lookAt( cube.position );

characterController.addCharacter( cube );
characterController.addController( keyController );
characterController.addController( moveController );

loopMachine.addCallback( ()=> {
    if( keyListener.isPressed( keyCode.ENTER  ) ) cube.rotation.y  += 0.02;
    if( keyListener.isPressed( keyCode.UP_ARROW  ) ) cube.position.y  += 0.02;
    if( keyListener.isPressed( keyCode.DOWN_ARROW) ) cube.position.y  -= 0.02;

	renderer.render( scene, camera );
});


resize.start( renderer );
loopMachine.start(); //ANIMACION SE PRENDE
keyListener.start(); // PRENDES EL SISTEMA DE KEYS LISTENER, "escuchador de teclas"
characterController.start();