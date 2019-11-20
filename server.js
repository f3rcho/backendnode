const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router() //nos permite separar cabeceras, metodos, url

const response = require('./network/response')


var app = express()
app.use(bodyParser.json()) // agregamos json para que acepte las peticiones de ese tipo, asi como urlencoded
app.use(bodyParser.urlencoded({extended: false}))
app.use(router)

router.get('/message', function(req, res) {
    console.log(req.headers)
    //definiendo una cabecera personalizada
    res.header({
        "custom-header": "Nuestro valor predeterminado"
    })
    response.success(req, res, 'Lista de mensajes')
})
router.post('/message', function(req, res) {
    console.log(req.body)
    console.log(req.query)
    if (req.query.error == 'ok') {
        response.error(req, res, 'Error simulado', 400)
    } else {
        response.success(req, res, 'Creado correctamente')
     // res.send('Mensaje ' + req.body.text + ' añadido')
    }
})

router.delete('/message', function(req, res) {
    res.status(201).send({error: '', body: 'Creado correctamente'}) // podemos cualquier cosa, arrayas, objetos
})

app.listen(3000) 
    console.log('La app esta escuchando en http://localhost:3000')