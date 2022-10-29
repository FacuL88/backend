const fs = require('fs');

class Contenedor {
    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
    }

    save(objeto){
        fs.promises.appendFile('./productos.txt', objeto);
        console.log(objeto);            
    }
}


let objeto = [
    {id:1, title: 'celular', price: 64000},
    {id:2, title: 'notebook', price: 64000},
    {id:3, title: 'smartTV', price: 64000},
]