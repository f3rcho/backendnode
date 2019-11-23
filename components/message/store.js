const db = require('mongoose')
const Model = require('./model')

db.Promise = global.Promise
db.connect('mongodb+srv://db_user_backend_node:db_user_backend_@cluster0-icc7n.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(' [db] Conectada con exito')
}).catch( error => console.error(error))

function addMessage(message) {
    // list.push(message)
    const myMessage = new Model(message)
    myMessage.save()
    
}

async function getMessages() {
    const messages = await Model.find()
    return messages  
}

async function updateText(id, message) {
    const foundMessage = await Model.findOne({
        _id: id
    })
    foundMessage.message = message
    const newMessage = await foundMessage.save()
    return newMessage
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    //get
    //update
    //delete
}