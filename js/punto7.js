class Agenda_Telefonica{

    constructor(){
        this.nombre;
        this.telefono;
        this.contactos = [];
    }

    anadirContacto(){

        if(this.contactos.length - 1 < 10){
            this.contactos.push(`Nombre: ${this.nombre}- Telefono: ${this.telefono}`) 
            return console.log(`Contacto añadido: ${this.nombre}- ${this.telefono}`)
        }else{
            console.log('No puede añadir mas contactos')
        }

    }

    mostrarContactos(){

        document.write(`<h2>Lista de Contactos</h2>
        <ol>`);
        for(let i = 0; i <this.contactos.length; i++){
            document.write(`<li>${this.contactos[i]}</li>`)
        }
        document.write(`</ol>`)
    }

    existeContacto(probar){
        if(probar === this.nombre){
            return true
        }else{
            return false
        }
    }
}

    const menu = ('Agenda Telefonica\n 1.añadir contacto \n 2.Mostrar contacos \n 3.¿Existe el contacto? \n 0.Salir de agenda');
    const contacto = new Agenda_Telefonica();
        let c = true

    while(c){

        let opcion = parseInt(prompt(menu))

        
        switch (true) {
            case opcion === 1:

                contacto.nombre = prompt('Ingrese un nombre: ')
                contacto.telefono =  parseInt(prompt('Ingrese el telefono: '))

                contacto.anadirContacto();

                break;
            case opcion === 2:
                contacto.mostrarContactos();
                c = false;
                break;
            case opcion === 3:
                const existe = prompt('Ponga el nombre del contacto para corroborar la existencia: ');
                if(contacto.existeContacto(existe)){
                    alert('El contacto existe')
                }else{
                    alert('El contacto no existe')
                }
                break;
            case opcion === 0:
                c = false;
                break;
            default:
                break;
        }


    }


