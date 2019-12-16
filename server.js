const express = require('express');
const app = express();
const server = require('http').Server(app); //inicialice el servidor y express. importandolo y conf con el server

const bodyParser = require('body-parser')
const socket = require('./socket')
const db = require('./db')
const router = require('./network/routes')

db('mongodb+srv://db_user_backend_node:db_user_backend_@cluster0-icc7n.mongodb.net/backendnode_db?retryWrites=true&w=majority')
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended: false}))

socket.connect(server);

router(app);

app.use('/app', express.static('public'));

server.listen(3000, function() { //nos aseguramos que se esta escuchando
    console.log('La app esta escuchando en http://localhost:3000');
}) 