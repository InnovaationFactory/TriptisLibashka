module.exports = {
    'port': process.env.DATABASE_MANAGER_PORT || 1338,
    'mongoose': {
        'dbtype': 'mongodb://',
        'baseuri': '127.0.0.1',
        'port': '27017',
        'database': 'TriptisDataStore',
        'auto_reconnect': 'true',
        'conn_timeout': 10000,
        'username': 'triptisdbuser',
        'password': 'Tr!9tisDBu$3r'
    },
    'dataLimit': 100
}