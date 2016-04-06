(function (product) {
    var requestifier = require('../helpers/requestifier'),
        cipher = require('../helpers/cipher'),
        config = require('../configuration'),
        stringFormatter = require('../helpers/stringFormatter');

    var updateTable = function (request, res) {}

    product.getProductDetails = function (req, res) {
        var requestifyObj = {
            'url': config.DBManager.getUrls('getProductDetails', req.params.productId),
        };
        requestifier.get(requestifyObj, function (err, productResponse) {
            res.json(err || productResponse);
        });
    };
    product.addProducts = function (req, res) {};
    product.deleteProducts = function (req, res) {};
    product.updateProducts = function (req, res) {}

})(module.exports);