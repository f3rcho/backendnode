const express = require('express')
const bodyParser = require('body-parser')

const db = require('./db')

const router = require('./network/routes')

db('mongodb+srv://db_user_backend_node:db_user_backend_@cluster0-icc7n.mongodb.net/backendnode_db?retryWrites=true&w=majority')
var app = express()
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended: false}))


router(app)



app.use('/app', express.static('public'))

app.listen(3000) 
    console.log('La app esta escuchando en http://localhost:3000')