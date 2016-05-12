module.exports = {
        'port': process.env.DATABASE_MANAGER_PORT || 1338,
        'mongoose': {
            'dbtype': 'mongodb://',
            'baseuri': '127.0.0.1',
            'port': '27017',
            'database': 'TriptisDataStore',
            'auto_reconnect': 'true',
            'conn_timeout': 10000
                //'username': 'triptisdbuser',
                //'password': 'Tr!9tisDBu$3r'
        },
        Categories: [{
                Clothes: {
                    Ethenic: "",
                    "Indo-Western": "",
                    Tops: "",
                    "Unstiched Suits": "",
                    Kaftans: ""
                }
            }, {
                Jewllery: {
                    Bangels: "",
                    Earings: "",
                    Necklace: "",
                    Pendents: "",
                    Bracelets: ""
                }
            }
        ],
        'dataLimit': 100
    }
    //mongod --dbpath D:\mongo\ data