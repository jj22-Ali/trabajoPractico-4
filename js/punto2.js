class CuentaBancaria{

    constructor(titularparam, saldoparam){
        this.titular =  titularparam;
        this.saldo = saldoparam;
    }

    ingresar(nuevoIngreso){
        this.saldo += nuevoIngreso;
    }

    extraer(nuevaExtrasion){
        this.saldo -= nuevaExtrasion;
    }

    informarCuenta(){

        document.write(`<h2>Estado de cuenta de ${this.titular}</h2>
        <ul>
            <li>Saldo: $${this.saldo}</li>
        </ul>
        `)


    }
}

const cuenta1 = new  CuentaBancaria('Javier', 0)
console.log(cuenta1)
cuenta1.informarCuenta()

cuenta1.ingresar(500)
cuenta1.informarCuenta()

cuenta1.extraer(200)
cuenta1.informarCuenta()
