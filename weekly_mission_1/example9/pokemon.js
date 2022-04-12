//Crea la clase.
class Pokemon{

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
//Exporta la clase para que pueda ser importada en el archivo main.js.
module.exports = Pokemon