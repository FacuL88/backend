const express = require('express')

const app = express()

const frase = 'Hola facundito'

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/api/frase', (req, res) => {
  res.send({frase: frase})
})

app.get('/api/letras/:num', (req, res) => {
  const num = req.params.num

  if (isNaN(num)) {
    return res.json( {error: 'El parametro ingresado no es un numero'})
  }

  if (num < 1 || num > frase.length) {
    return req.json({error: 'El parametro ingresado esta fuera de rango'})
  }

  res.send(frase[num - 1])

})

app.get('/api/palabras/:num', (req, res) => {
  const num = req.params.num
  const palabras = frase.split(' ')

  if (isNaN(num)) {
    return res.json( {error: 'El parametro ingresado no es un numero'})
  }

  if (num < 1 || num > palabras.length) {
    return req.json({error: 'El parametro ingresado esta fuera de rango'})
  }

  res.send(palabras[num - 1])

})


const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log('Escuchando en el puerto: ' + PORT);
})