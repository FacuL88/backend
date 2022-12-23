const express = require('express')

const app = express()

let visitas = 0

app.get('/', (req,res) => {
    res.send('hola mundo')
})

app.get('/visitas', (req, res) => {
    res.send('La cantidad de visitas es: ' + ++visitas)
})

app.get('/fyh', (req, res) => {
    res.send({ fyh: new Date().toLocaleString() })
})


const server = app.listen('8080', () => {
    console.log('Escuchando en el 8080');
})