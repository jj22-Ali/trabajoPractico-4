class Producto{

    constructor(idparam, nombreparam, precioparam){

        this.id = idparam;
        this.nombre = nombreparam;
        this.precio = precioparam;

    }

    imprimirDatos(){
        document.write(`Codigo: ${this.id} , Nombre: ${this.nombre} , Precio: $${this.precio}`)
    }


}

const producto1 = new Producto(5122, 'Alfajor', 250)
const producto2 = new Producto(1235, 'Gaseosa', 900)
const producto3 = new Producto(6543, 'Turron', 100)


const arrayProductos = [producto1, producto2, producto3]

for(let i = 0; i < arrayProductos.length; i++){

    arrayProductos[i].imprimirDatos();
    document.write(`<br>`)

}