class Agenda_Telefonica{

    constructor(){
        this.nombre;
        this.telefono;
        this.contactos = [];
    }

    anadirContacto(){

        if(this.contactos.length - 1 < 10){
            this.contactos.push(`Nombre: ${this.nombre}, Telefono: ${this.telefono}`) 
            return console.log(`Contacto añadido: ${this.nombre}, ${this.telefono}`)
        }else{
            console.log('No puede añadir mas contactos')
        }

    }

    mostrarContactos(){

        for(let i = 0; i < this.contactos.length; i++){
            document.write(`<li>${this.contactos[i]}</li>`)
        }
        
    }

}


do{
    alert(`<h2>Agenda de Contactos</h2>
    <ol>
        <li>Añadir Contacto</li>
        <li>Buscar Contacto</li>
        <li>Mostrar lista de contactos</li>
        <li></li>
    </ol>`)

    
    switch(true){

    }

}while(confirm('quiere seguir en la al app de agenda?'))

const contacto = new Agenda_Telefonica();

contacto.nombre = prompt('Ingrese un nombre: ')
contacto.telefono =  parseInt(prompt('Ingrese el telefono: '))

contacto.anadirContacto();
