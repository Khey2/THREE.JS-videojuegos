

class Resize {
    constructor( camara ){
        this.renderer = null;
        this.camara = camara;
    }

    start( renderer){
        this.renderer = renderer;
        window.addEventListener('resize', this.resize.bind(this))
    }
    stop(){
        window.removeEventListener('resize', this.resize.bind(this) )
    }

    resize(){
        this.camara.aspect = window.innerWidth / window.innerHeight;
        this.camara.updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
    }
}



export default Resize;