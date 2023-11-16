class Rectangulo{

    constructor(altoparam, anchoparam){
        this.alto = altoparam;
        this.ancho = anchoparam;
    }

    calcularPertimetro(){
        return (2 * this.alto) + (2 * this.ancho);
    }

    CalcularareaRectangulo(){
        
        return this.alto * this.ancho
    }



}

const rectanguloPequeño = new Rectangulo(4, 6)
console.log(rectanguloPequeño)
console.log(`Perimetro: ${rectanguloPequeño.calcularPertimetro()}`)
console.log(`Area: ${rectanguloPequeño.CalcularareaRectangulo()}`)

const rectanguloMediano = new Rectangulo(8, 12)
console.log(rectanguloMediano)
console.log(`Perimetro: ${rectanguloMediano.calcularPertimetro()}`)
console.log(`Area: ${rectanguloMediano.CalcularareaRectangulo()}`)

