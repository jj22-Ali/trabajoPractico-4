class Persona{
    #nombre;
    #edad;

    constructor(nombre, edad){

        this.#nombre = nombre;
        this.#edad = edad;

    }

    get nombre(){
        return this.#nombre;
    }
    set nombre(nuevoNombre){
        if(nuevoNombre.length > 3){
            this.#nombre = nuevoNombre;
        }else{
            console.log(`Ingrese un nombre con más de dos caracteres`)
        }
    }

    get edad(){
        return this.#edad;
    }
    set edad(nuevoEdad){
        if(nuevoedad > 2){
            this.#edad = nuevoEdad;
        }else{
            console.log(`Ingrese una edad de dos años`)
        }
    }

    saludar(){
        console.log(`${this.nombre} = ¡¡¡Buenos dias a todos!!!`)
    }
    despedirse(){
        console.log(`${this.nombre} = ¡¡¡Hasta luego!!!`)
    }
}

const individuo1 = new Persona('Lautaro',20)
const individuo2 = new Persona('María',32)
const individuo3 = new Persona('Martina', 23)


individuo1.saludar()
individuo1.despedirse()

individuo2.saludar()
individuo2.despedirse()

individuo3.saludar()
individuo3.despedirse()