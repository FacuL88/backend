const fs = require('fs');

class Contenedor {
    constructor(nombre){
        this.nombre = nombre;
    }
    
    async save(obj){
        try {
            await fs.promises.writeFile(`${this.nombre}.txt`, JSON.stringify(obj))            
        } catch (error) {
            console.log(error);
        }        
    }
}

const contenido = new Contenedor('productos')


let obj = [
    {id:1, title:'celular', price:3540},
    {id:2, title:'notebook', price:10540},
    {id:3, title:'televisor', price:13540}
]

console.log(contenido.save(obj));