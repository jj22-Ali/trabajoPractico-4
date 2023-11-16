class Persona{

    constructor (nombreParam, edadParam, dniParam, sexoParam, pesoParam, alturaParam, añoNacimientoParam ){

        this.nombre = nombreParam;
        this.edad = edadParam;
        this.dni = dniParam;
        this.sexo = sexoParam;
        this.peso = pesoParam;
        this.altura = alturaParam;
        this.añoNacimiento = añoNacimientoParam;

    }

    monstrarGeneracion(){

        switch (true) {
            case this.añoNacimiento >= 1939 && this.añoNacimiento <= 1948:
                document.write(`Su generación es: Silent Generation`)
                break;
        
            case this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968:
                document.write(`Su genereacion es: Baby Boom`)
                break;
        
            case this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980:
                document.write(`Su generación es: Generación X`)
                break;
        
            case this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993:
                document.write(`Su generación es: Generación Y`)
                break;
        
            case this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010:
                document.write(`Su generación es: Generación Z`)
                break;
        
            default:
                document.write(`Usted no pertenece a ninguna generación`)
                break;
        }
    }

    mayoriaDeEdad(){
        if(this.edad >= 18){
            console.log(`${this.nombre} tiene ${this.edad} años, por lo tanto es mayor de edad.. Ahora que vaya a chambear`)
        }else{
            console.log(`${this.nombre} tiene ${this.edad} años, por lo tanto es menor de edad.. Esta chikito`)
        }
    }

    mostrarDatos(){
        document.write(`<h2>Datos de: ${this.nombre}</h2> 
        <ul>
            <li>Edad: ${this.edad}</li>
            <li>DNI: ${this.dni}</li>
            <li>Sexo: ${this.sexo}</li>
            <li>Peso: ${this.peso} kg</li>
            <li>Altura: ${this.altura}</li>
            <li>Año de nacimiento: ${this.añoNacimiento}</li>
           
        </ul>`)
        
    }

    generarDni(){
        this.dni = Math.floor(Math.random() * (100000000 - 9999999 + 1)) + 9999999;
    }
}

//constructor (nombreParam, edadParam, dniParam, sexoParam, pesoParam, alturaParam, añoNacimientoParam )

const sujeto1 = new Persona('juan', 25, 41345809, 'Hombre', 120, 180, 1998)
console.log(sujeto1)

sujeto1.mostrarDatos()

sujeto1.monstrarGeneracion()

sujeto1.mayoriaDeEdad()

sujeto1.generarDni();
sujeto1.mostrarDatos();