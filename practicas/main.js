const numerosSalidos = {}

function numAleatorio() {
    return parseInt(Math.random() * 20) + 1
}

for (let index = 0; index <= 10000; index++) {
    const element = numAleatorio();
    if (!numerosSalidos[element]) {
        numerosSalidos[element] = 0
    }
    
    numerosSalidos[element]++
}

console.log(numerosSalidos);


const productos = [
    {id:1, nombre:'escuadra', precio:215863},
    {id:1, nombre:'escuadra', precio:215863},
    {id:1, nombre:'escuadra', precio:215863},
    {id:1, nombre:'escuadra', precio:215863}
]

function getNombres(prods) {
    const nombres = []
    for (const producto of prods) {
        nombres.push(producto.nombre)
    }

    return nombres.join(',')
}

console.log(getNombres(productos));


function getPrecioPromedio(prods) {
    if (prods.length == 0) {
        return 0
    }
    return getPrecioTotal(prods) / prods.length
}

console.log(getPrecioPromedio(productos));