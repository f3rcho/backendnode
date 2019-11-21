const express = require('express')
const response = require('../../network/response')

const router = express.Router() //nos permite separar cabeceras, metodos, url


router.get('/', function(req, res) {
    console.log(req.headers)
    //definiendo una cabecera personalizada
    res.header({
        "custom-header": "Nuestro valor predeterminado"
    })
    response.success(req, res, 'Lista de mensajes')
})
router.post('/', function(req, res) {
    console.log(req.body)
    console.log(req.query)
    if (req.query.error == 'ok') {
        response.error(req, res, 'Error inesperado', 500, 'Es solo una simulacion de los errores') // tambien podemos usar los template strings
    } else {
        response.success(req, res, 'Creado correctamente')
     // res.send('Mensaje ' + req.body.text + ' añadido')
    }
})

router.delete('/message', function(req, res) {
    res.status(201).send({error: '', body: 'Creado correctamente'}) // podemos cualquier cosa, arrayas, objetos
})

module.exports = router