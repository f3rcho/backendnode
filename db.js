const db = require('mongoose')

db.Promise = global.Promise
//mongodb+srv://db_user_backend_node:db_user_backend_@cluster0-icc7n.mongodb.net/backendnode_db?retryWrites=true&w=majority

async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log(' [db] Conectada con exito ')
    }).catch( error => console.error(error))
}

module.exports = connect;