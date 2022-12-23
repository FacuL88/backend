//importo el modulo express
const express = require('express')

// Inicializar servidor
const app = express()

//.get() -> obetener informacion / recibe dos paramatros (ruta, callback) 
// .post() -> creo una publicacion
// .put() -> editar info, actualiza una info por completo 
// .patch -> modifica un pedazo de la info
// .delete() -> eliminar alguna informacion
 
// .get() -> obtener informacion / peticion
app.get('/', (req, res) => {
  res.send('hola mundo')
})

// asigno una variable con el valor del puerto
const PORT = 8080;

app.listen(PORT, () => {
  console.log('Escuchando en el: ' + PORT);
})
