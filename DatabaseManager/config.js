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
        NewProducts: [{
            ImageUrl: "assets/img/banner.jpg",
            Name: "Fasionable Bangles",
            currency: "£",
            price: "61.19",
            oldPrice: "120.20",
            comment: "Flat 50% Discount",
            Category: "Women Jewllery Bangels"
                    }, {
            ImageUrl: "assets/img/Trending.jpg",
            Name: "Trending Now",
            currency: "£",
            price: "861.19",
            Category: "Women Jewllery Bangels"
                    }, {
            ImageUrl: "assets/img/rings.jpg",
            Name: "Royal Rings",
            currency: "£",
            price: "99",
            Category: "Women Jewllery Earings"
                    }, {
            ImageUrl: "assets/img/Latest.jpg",
            Name: "Cant Miss this",
            currency: "£",
            price: "299",
            Category: "Women Jewllery Bangels"
                    }, {
            ImageUrl: "assets/img/bangle.png",
            Name: "Trendy Bangles",
            currency: "£",
            price: "61.19",
            oldPrice: "120.20",
            comment: "Flat 50% Discount",
            Category: "Women Jewllery Bangels"
                    }, {
            ImageUrl: "assets/img/necklace.png",
            Name: "Latest Necklaces",
            currency: "£",
            price: "21.09",
            Category: "Women Jewllery Necklace"
                    }, {
            ImageUrl: "assets/img/earring.png",
            Name: "Exclusive Earings",
            currency: "£",
            price: "100.47",
            Category: "Women Jewllery Earings"
                    }, {
            ImageUrl: "assets/img/western.jpg",
            Name: "Natural beige colour tunic,with beautiful hand embroidery on neck & sleeve cuts ,perfect for a cocktail or dinner night.",
            currency: "£",
            price: "100.47",
            Category: "Women Clothes Indo-Western"
                    }],
        Categories: [{
                Men: {
                    Clothes: ["Ethenic", "Indo-Western", "Unstiched-Suits", "Kaftans"]
                }
        },
            {
                Women: {
                    Clothes: ["Ethenic", "Indo-Western", "Tops", "Kaftans"],
                    Jewllery: ["Bangels", "Earings", "Necklace", "Pendents", "Bracelets"]
                }
        }],
        'dataLimit': 100
    }
    //mongod --dbpath D:\mongo\ data