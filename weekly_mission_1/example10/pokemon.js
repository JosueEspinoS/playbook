export default class Pokemon{

    //Crea un constructor que permita recibir un nombre.
    constructor(name){
        this.name = name
    }

    //Crea la función sayHello().
    sayHello(){
        console.log(`mi pokemon ${this.name} te saluda`)
    }
    
    //Crea la función sayMessage().
    sayMessage (message) {
        console.log(`Mi pokemon ${this.name} dice: ${this,message}`)
    }
    
}