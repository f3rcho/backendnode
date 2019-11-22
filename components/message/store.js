const db = require('mongoose')


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
    console.log(myMessage + '2')
}

async function getMessages() {
    const messages = await model.find()
    return messages  
}

module.exports = {
    add: addMessage,
    list: getMessages
    //get
    //update
    //delete
}