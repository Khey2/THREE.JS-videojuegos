
//Esta clase la dio el profesor
/*
    BASICASMENTE

    la funcion addCallback acepta un callback como argumento y addCallback evalua 
    si el array this.callback ya tiene un elemento dentro igual (evita duplicados)
    (es un array) , caso contrario permite el push 
*/

class LoopMachine{
    constructor(){
        this.flag = false;
        this.callback = [];
    }

    addCallback( callback ){
        let index = this.callback.indexOf( callback );
        if ( index > -1 ) return
        this.callback.push( callback );
    }


    removeCallback( callback ){
        let index = this.callback.indexOf(callback);
        if( index > -1 ) this.callback.splice(index, 1);
    }

    /**
     * 
     * evalua si una flag es false entonces hace return, y si es 
     * true entonces ITERA cada callback y lo ejecuta 
     * (por eso la sintaxis cb() , y repite esos callbacks en forma de loop
     */
    run = () => {
        if (!this.flag) return;
        this.callback.forEach( cb => cb() );
        window.requestAnimationFrame( this.run )
    }

    // empieza la animacion
    start(){
        if( this.flag ) return
        this.flag = true;
        this.run();
    }

    // PARA la animacion
    stop(){
        this.flag = false;
    }

}

const loopMachine = new LoopMachine();

export default loopMachine;

export { LoopMachine }