const express = require('express')

const app = express()

// VERBOS

app.get('/api/sumar/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params
    res.send( {suma: Number(num1) + Number(num2)})
})

app.get('/api/sumar', (req, res) => {
    const {num1, num2} = req.query
    res.send( {suma: Number(num1) + Number(num2)})
})

app.get('/api/operacion', (req, res) => {
    const operacion = req.params.operacion
    res.send( { operacion: eval({operacion})} )
})



const PORT = 8080
const server = app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto: ' + PORT);
})