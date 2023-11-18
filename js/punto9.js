class Animal{
    #nombre;
    #edad;
    
    constructor(nombre, edad){

        this.#nombre = nombre;
        this.#edad= edad;

    }

    get nombre(){
        return this.#nombre;
    }
    set nombre(nuevoNombre){
        if(nuevoNombre.length > 3){
            this.#nombre = nuevoNombre;
        }else{
            console.log(`Ingrese un nombre de un animal con mas de 3 caracteres`)
        }
    }

    get edad(){
        return this.#edad;
    }
    set edad(nuevoEdad){
        if(nuevoEdad < 14){
            this.#edad = nuevoEdad;
        }else{
            console.log('Un animal promedio vive hasta los 13 años')
        }
    }

}
class Perro extends Animal{

    constructor(nombre, edad){
        super(nombre, edad)
    }

    emitirSonido(){
        console.log('Guau guau guau guau')
    }
}
class Gato extends Animal{ 
    constructor(nombre, edad){
        super(nombre, edad)
    }

    emitirSonido(){
        console.log('Miau miau miau')
    }
}

const animal1 = new Perro('Firulais')
animal1.edad = 12;
console.log(animal1)
animal1.emitirSonido();

const animal2 = new Gato('michifu', 9)
console.log(animal2)
animal2.emitirSonido();

