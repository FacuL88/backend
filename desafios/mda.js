const fs = require('fs');

class Contenedor {
    constructor(nombre){
        this.nombre = nombre;
    }
    
    async save(obj){
        try {
            await fs.promises.writeFile(`${this.nombre}.txt`, 'utf-8')
        } catch (error) {
            console.log(error);
        }
    }
}

const contenido = new Contenedor('productos')

console.log(contenido.save());

/* let obj = [
    {id:1, title:'celular', price:3540},
    {id:2, title:'celular', price:3540},
    {id:3, title:'celular', price:3540}
] */