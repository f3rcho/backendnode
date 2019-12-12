const store = require('./store')

function addUser(name) {
    if (!name) {    //comprobacion de propiedades
        return Promise.reject('Invalid name') // si no necesitamos hacer la promesa completa, devolvemos el rejec(una promesa rechazada) t de la clase nativa. 
    }
    const user = {  //Creacion del usuario
        name,
    }

    return store.add(user) //Guardamos el usuario
}

function listUsers() {
    return store.list();
}

module.exports = {
    addUser,
    listUsers,
}