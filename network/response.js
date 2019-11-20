exports.success = function (req, res, message, status) {
    res.status(status || 200).send({
        error: false,
        codigo: 200,
        message: message, 
        body: req.body,
        method: req.method // estos metodos los agregue de ejemplo pero no son parte de la clase dada!!
    })
}

exports.error = function (req, res, message, status) {
    res.status(status || 200).send({
        error: message,
        codigo: 200,
        message: true, 
        body: req.body,
        method: req.method
    })
}
