
let auto = {
    color: 'rojo',
    marca: 'fiat',
    modelo: 2008,

    encender : function(){

        document.write(`<p>Auto encendido</p>`)
    },

    apagar: function(){
        document.write(`<p>El auto se apagó</p>`)
    }
};

console.log(auto)

document.write(`<h2>Caracteristicas del auto</h2>
<ul>
    <li>Color= ${auto.color}</li>
    <li>Marca = ${auto.marca}</li>
    <li>Modelo = ${auto.modelo}</li>
</ul>
`)

auto.encender()
auto.apagar()



