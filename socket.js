// inicializar nuestro socketio, generar una instancia y de poderla compartir

const socketIO = require('socket.io');
const socket = {}; //aqui guardamos toda la informacion

function connect(server) { //funcion para conectarse
    socket.io = socketIO(server) // de aqui pasa para el objeto
}

module.exports = {
    connect,
    socket,
};