// importo modulo express
const express = require('express')
// inicio mi servidor 
const app = express()

const frase = 'hola como estas'

// gets

//1)
app.get('/api/frase', (req, res) => {
    res.json({frase: frase})
})

//2)

app.get('/api/letras/:num', (req, res) => {
    const num = req.params.num

    if (isNaN(num)) {
        return res.json( {error: 'el parametro ingresado no es un numero'})
    }
    if (num < 1 || num > frase.length){
        return res.json( {error: 'el parametro ingresado esta fuera de rango'})
    }

    res.send(frase[num - 1])
})

//3)

app.get('/api/palabras/:num', (req, res) => {
    const num = req.params.num

    if (isNaN(num)) {
        return res.json( {error: 'el parametro ingresado no es un numero'})
    }

    const palabras = frase.split(' ')
    if (num < 1 || num > palabras.length){
        return res.json( {error: 'el parametro ingresado esta fuera de rango'})
    }

    res.send(palabra[num - 1])
})



const PORT = 8080
const server = app.listen(PORT, () => {
    console.log('Servior escuchando en el: ' + PORT);
})