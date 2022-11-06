const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('hola Facundo Laugle')
})

app.get('/inicio', (req, res) => {
    res.send('hola Daniel Laugle')
})

let visitas = 0
app.get('/visitas', (req, res) => {
    visitas++
    res.send('el numero de visitas es: ' + visitas)
})

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log('servidor escuchando en el 8080');
})

server.on('error', () => console.log('hubo un error'))