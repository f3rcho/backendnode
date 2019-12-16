const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://db_user_backend_node:db_user_backend_@cluster0-icc7n.mongodb.net/backendnode_db?retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',    
    filesRoute: process.env.FILES_ROUTE || 'files',
};

module.exports = config;