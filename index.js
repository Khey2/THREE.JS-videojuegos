import scene from "./basics/Scene";
import camera from "./basics/Camera";
import renderer from "./basics/Renderer";
import cube from "./basics/Shapes/Cube";
import ligth from "./basics/ligth";
import resize from "./basics/resize";


cube.name = "cube";

scene.add( cube );
scene.add( ligth )

camera.position.set( 2,2,2 );
camera.lookAt( cube.position );

renderer.render ( scene, camera ); // Take 1 picture

//animation
function animate() {
    cube.rotation.y  += 0.02
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );


resize.start( renderer );
