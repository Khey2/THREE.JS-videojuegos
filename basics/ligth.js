import * as THREE from 'three'


const ligth = new THREE.AmbientLight( 0x404040 );
const directionalLigth = new THREE.DirectionalLight( 0XFFFFFF, 1 );

directionalLigth.position.set( -10 , 10, 10 )

ligth.add( directionalLigth );

export default ligth;
