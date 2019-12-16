// const chalk = require('chalk')

const statusMessages = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error',
}

exports.success = function (req, res, message, status) {
    let statusCode = status;
    let statusMessage = message;

    if (!status) {
        status = 200;
    }

    if (!message) {
        statusMessage = statusMessages[status];
    }

    res.status(statusCode).send({
        error: '',
        body: statusMessage, 
        
    })
}

// Tambien podemos agregar colores al mensaje de error instalando chalk. npm i chalk
// const chalk = require('chalk)
// Por ejemplo console.log(chalk.red('[response error]: ' + details)))
exports.error = function (req, res, message, status, details) {
    console.error(('[response error]: ' + details));
    let statusCode = status;
    let statusMessage = message;

    if (!status) {
        status = 500;
    }

    if (!message) {
        statusMessage = statusMessages[status];
    }
    res.status(statusCode).send({
        error: statusMessage, 
        body: '',
        
    })
}
