var config = require('../config'),
    mongoose = require('mongoose'),
    join = require('path').join,
    fs = require('fs');


var opts = {
    server: {
        auto_reconnect: config.mongoose.auto_reconnect,
        socketOptions: {
            connectTimeoutMS: config.mongoose.conn_timeout
        },
        ssl: true,
        sslCert: fs.readFileSync(join(__dirname, '../mongoCertificates/mongodb-cert.crt')),
        sslKey: fs.readFileSync(join(__dirname, '../mongoCertificates/mongodb-cert.key')),
        sslValidate: false,
    },
    user: config.mongoose.username,
    pass: config.mongoose.password
};

var uri = config.mongoose.dbtype + config.mongoose.baseuri + ':' + config.mongoose.port + '/' + config.mongoose.database;
mongoose.connect(uri, opts);

var model = {
    collection: {
        pipeschema: require('./pipeschema'),
        log: require('./auditlog'),
        errorlog: require('./errorlog'),
        userActionLog: require('./userActionLogger'),
        scriptlog: require('./scriptlog'),
        userActionLog: require('./userActionLogger'),
        script: require('./scriptstore'),
        restmodeschema: require('./restmodeschema'),
        broadcastmodeschema: require('./broadcastmodeschema'),
        role: require('./role'),
        user: require('./user'),
        application: require('./application'),
        iotmodeschema: require('./iotmodeschema'),
        requestappmappingschema: require('./requestappmapping')
    }
};
exports.schemas = model;