const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router() //nos permite separar cabeceras, metodos, url

router.get('/', function (req, res) {
    controller.getMessages()
    .then((messageList) => {
        response.success(req, res, messageList, 200)
    })
    .catch(e => {
        response.error(req, res, 'Unexpected Error', 500, e)
    })
})
router.post('/', function (req, res) {

    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201)
            
        })
        .catch(() => {
            response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador') 
            
        })
})

router.patch('/:id', function (req, res) {

    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e)
        })
} )

router.delete('/message', function(req, res) {
    res.status(201).send({error: '', body: 'Eliminado correctamente'}) // podemos cualquier cosa, arrayas, objetos
})

module.exports = router