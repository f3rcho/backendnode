const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router() //nos permite separar cabeceras, metodos, url

var app = express()
app.use(bodyParser.json()) // agregamos json para que acepte las peticiones de ese tipo, asi como urlencoded
app.use(bodyParser.urlencoded({extended: false}))
app.use(router)

router.get('/message', function(req, res) {
    console.log(req.body)
    console.log(req.query)
    res.send('Lista de mesajes ' + req.body.text + ' añadido correctamente')
})

router.post('/message', function(req, res) {
    res.send('Mensaje añadido')
})

router.delete('/message', function(req, res) {
    res.send('Mensaje eliminado')
})

app.listen(3000)
console.log('La app esta escuchando en http://localhost:3000')