(function (productCategory) {

    var requestifier = require('../helpers/requestifier'),
        cipher = require('../helpers/cipher'),
        config = require('../configuration'),
        stringFormatter = require('../helpers/stringFormatter');

    productCategory.getProductCategoryDetails = function (req, res) {
        var requestifyObj = {
            'url': config.DBManager.getUrls('getProductCategories', req.params.productCategorytId),
        };

        debugger;

        requestifier.get(requestifyObj, function (err, productResponse) {
            res.json(err || productResponse);
        });
    };

    productCategory.addProductCategory = function (req, res) {};
    productCategory.deleteProductCategory = function (req, res) {};
    productCategory.updateProductCategory = function (req, res) {}

})(module.exports);