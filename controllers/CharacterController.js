import loopMachine from "../basics/LoopMachine";

class CharacterController{

    constructor(){
        this.controller = {};
        this.character  = null;
        this.state      = {}; // Base de Datos
    }

    addController( controller ){
        this.controller[ controller.constructor.name ] = controller
    }
    removeController( controller ){
        delete this.controller[ controller.constructor.name]; 
    }

    addCharacter( character ){
        this.character = character;
    }

    start(){
        Object.keys( this.controller ).forEach( key =>{
            this.controller[key].init(false)
        });
    }

    tick = () =>{
        Object.keys( this.controller ).forEach( key => {
            this.controller[key].tick()
        }); 
    }
}

const characterController = new CharacterController();
export default characterController;