const express = require('express');
const app = express();
const server = require('http').Server(app); //inicialice el servidor y express. importandolo y conf con el server

const config = require('./config');

const  cors = require('cors')
const bodyParser = require('body-parser')
const socket = require('./socket')
const db = require('./db')
const router = require('./network/routes')

db(config.dbUrl);

app.use(cors());

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended: false}))

socket.connect(server);

router(app);

app.use(config.publicRoute, express.static('public'));

server.listen(config.port, function() { //nos aseguramos que se esta escuchando
    console.log('La app esta escuchando en '+ config.host +':3000');
}) 