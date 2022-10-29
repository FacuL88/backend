const fs = require('fs');

let archivo = fs.readFileSync('texto.txt', 'utf-8');

fs.writeFileSync('texto.txt', 'hola mundo')

console.log(archivo);