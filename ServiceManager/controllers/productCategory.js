(function (productCategory) {

    var requestifier = require('../helpers/requestifier'),
        cipher = require('../helpers/cipher'),
        config = require('../configuration'),
        stringFormatter = require('../helpers/stringFormatter');

    productCategory.getProductCategoryDetails = function (req, res) {
        var requestifyObj = {
            'url': config.DBManager.getUrls('productCategories', req.params.productCategorytId),
        };
        requestifier.get(requestifyObj, function (err, productResponse) {
            responseSender.send(err, productResponse, res);
        });
    };

    productCategory.addProductCategory = function (req, res) {
        var requestifyObj = {
            url: config.DBManager.getUrls('productCategories'),
            data: req.body,
            options: {
                headers: {
                    contentType: 'application/json'
                }
            }
        };
        requestifier.post(requestifyObj, function (err, productResponse) {
            responseSender.send(err, productResponse, res);
        });
    };
    productCategory.deleteProductCategory = function (req, res) {
        var requestifyObj = {
            'url': config.DBManager.getUrls('productCategories', req.params.productId)
        };
        requestifier.delete(requestifyObj, function (err, productResponse) {
            responseSender.send(err, productResponse, res);
        });
    };
    productCategory.updateProductCategory = function (req, res) {
        var requestifyObj = {
            'url': config.DBManager.getUrls('productCategories', req.params.productId),
            data: req.body,
            options: {
                headers: {
                    contentType: 'application/json'
                }
            }
        };
        requestifier.put(requestifyObj, function (err, productResponse) {
            responseSender.send(err, productResponse, res);
        });
    }

})(module.exports);