const fs = require('fs');

class Contenedor {
    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
    }

    save(obj){
        async function agregar() {
            try {
                await fs.promises.appendFile('./productos.txt', 'utf-8');
            } catch (error) {
                console.log(error);
            }
        }
        agregar()            
    }
}

let obj = [
    {id:1, title:'celular', price: 65424},
    {id:2, title:'celular', price: 65424},
    {id:3, title:'celular', price: 65424}
]

const contenedor = new Contenedor('productos.txt')

console.log(contenedor);