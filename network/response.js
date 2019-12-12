const chalk = require('chalk')

exports.success = function (req, res, message, status) {
    res.status(status || 200).send({
        error: '',
        body: message, 
        
    })
}

// Tambien podemos agregar colores al mensaje de error instalando chalk. npm i chalk
// const chalk = require('chalk)
// Por ejemplo console.log(chalk.red('[response error]: ' + details)))
exports.error = function (req, res, message, status, details) {
    console.error(chalk.redBright('[response error]: ' + details));

    res.status(status || 200).send({
        error: message, 
        body: '',
        
    })
}
