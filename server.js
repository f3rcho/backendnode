const express = require('express')
const router = express.Router() //nos permite separar cabeceras, metodos, url

var app = express()

app.use(router)

router.get('/message', function(req, res) {
    res.send('Lista de mesajes')
})

router.post('/message', function(req, res) {
    res.send('Mensaje añadido')
})

router.delete('/message', function(req, res) {
    res.send('Mensaje eliminado')
})

// app.use('/', function(req, res) {
//     res.send('Hola')
// })

app.listen(3000)
console.log('La app esta escuchando en http://localhost:3000')