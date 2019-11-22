const store = require('./store')


function addMessage(user, message) {
    console.log(message + '1'+ user)
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[messageController] No hay usuario o mensaje')
            reject('Los datos son incorrectos')
            return false
        }
        
        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }
        console.log(fullMessage)
        store.add(fullMessage)
        
        resolve(fullMessage)
        
    })

}

function getMessages() {
    return new Promise((resolve, reject) => {
        resolve(store.list())
    })
}

module.exports = {
    addMessage,
    getMessages
}