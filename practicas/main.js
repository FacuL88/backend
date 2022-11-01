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