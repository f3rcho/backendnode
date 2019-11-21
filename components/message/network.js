const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
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

    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201)
        })
        .catch(() => {
            response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador') 
        })
})

router.delete('/message', function(req, res) {
    res.status(201).send({error: '', body: 'Creado correctamente'}) // podemos cualquier cosa, arrayas, objetos
})

module.exports = router