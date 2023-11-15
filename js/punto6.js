class Libro{
    
    #isbn;
    #titulo;
    #autor;
    #numeroDePaginas;

    constructor(isbnParam, tituloParm, autorParam, cantidadPaginasParm){

        this.isbn = isbnParam;
        this.titulo = tituloParm;
        this.autor = autorParam;
        this.numeroDePaginas = cantidadPaginasParm;

    }

    get isbn(){
        return this.#isbn;
    }
    set isbn(nuevoIsbn){
        this.#isbn = nuevoIsbn;
    }

    get titulo(){
        return this.#titulo;
    }
    set titulo(nuevoTitulo){
        this.#titulo = nuevoTitulo;
    }

    get autor(){
        return this.#autor;
    }
    set autor(nuevoAutor){
        this.#autor = nuevoAutor;
    }

    get numeroDePaginas(){
        return this.#numeroDePaginas;
    }
    set numeroDePaginas(nuevaCantidadPaginas){
        this.#numeroDePaginas = nuevaCantidadPaginas;
    }

    mostrarLibro(){
        document.write(`<p>El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numeroDePaginas} paginas </p>`)
    }

}

const libro1 = new Libro('978-84-9759-220-8', '100 años de soledad', 'Gabriel García Márquez', 492)
console.log(libro1)
libro1.mostrarLibro()

const libro2 = new Libro('978-84-7888-720-0', 'El Principito', 'Antoine De Saint-exupéry', 120)
console.log(libro2)
libro2.mostrarLibro()

if(libro1.numeroDePaginas > libro2.numeroDePaginas){
    document.write(`<p>El libro ${libro1.titulo} tiene más paginas que el libro ${libro2.titulo}</p>`)
}else{
    document.write(`<p>El libro ${libro2.titulo} tiene más paginas que el libro ${libro1.titulo}</p>`)
}
