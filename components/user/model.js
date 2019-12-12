const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
    name: String, // definir toda la informacion que querramos. Archivos, imagenes, nombres...etc.
})

const model = mongoose.model('User', mySchema)
module.exports = model