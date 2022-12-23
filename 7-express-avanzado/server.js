const express = require('express')

const app = express()

const frase = 'hola como estas'

// gets
app.get('/api/frase', (req, res) => {
    res.json({frase: frase})
})

app.get('/api/letras/:num', (req, res) => {
    const num = req.params.num

    if (isNaN(num)) {
        return res.json( {error: 'el parametro ingresado no es un numero'} )
    }
    if (num < 1 || num > frase.length){
        return res.json( {error: 'el parametro ingresado esta fuera de rango'} )
    }

    res.send(frase[num - 1])
})





const PORT = 8080
const server = app.listen(PORT, () => {
    console.log('Servior escuchando en el: ' + PORT);
})