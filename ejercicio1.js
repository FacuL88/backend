function mostrarLista(lista) {
    if (lista.length == 0) {
        console.log('La lista esta vacia');
        return;
    }

    console.log(lista);
}

mostrarLista([2, 8]);

function crearMultiplicador(num) {
    return function (num2) {
        console.log(num * num2);
    }
}

const duplicador = crearMultiplicador(2)
const triplicador = crearMultiplicador(3)

duplicador(6)
triplicador(6)