(function (productCategory) {
    var data = require('../data'),
        tableName = 'productCategory';

    var updateTable = function (request, res) {
        data.update(request, function (err, response) {
            var result = {
                isError: false,
                error: null,
                data: {}
            };
            if (err) {
                result.isError = true;
                result.error = err;
                result.data = null;
                return res.json(result);

            }
            result.data = response;
            res.json(result);
        });
    }

    productCategory.getProductCategoryDetails = function (req, res) {
        var request = {};
        request.table = tableName;
        request.query = {
            IsActive: true
        };
        var productCategoryId = req.params.productCategoryId;
        if (productCategoryId) {
            request.query = {
                $and: [{
                    "_id": productCategoryId
                    }, {
                    IsActive: true
                    }]

            };
        }
        data.read(request, function (err, response) {
            var result = {
                isError: false,
                error: null,
                data: {}
            };
            if (err) {
                result.isError = true;
                result.error = err;
                result.data = null;
                return res.json(result);

            }
            result.data = response;
            res.json(result);
        });
    };
    productCategory.addProductCategory = function (req, res) {
        var request = {
            table: tableName,
            model: req.body
        };

        data.create(request, function (err, response) {
            var result = {
                isError: false,
                error: null,
                data: response
            };
            if (err) {
                result.isError = true;
                result.error = err;
                result.data = null;
            }
            return res.json(result);
        });
    };
    productCategory.deleteProductCategory = function (req, res) {
        var request = {};
        request.table = tableName;
        request.model = {
            IsActive: false
        };
        request.query = {
            "_id": req.params.productCategoryId
        };
        updateTable(request, res);
    };
    productCategory.updateProductCategory = function (req, res) {
        var request = {
            table: tableName,
            model: req.body,
            query: {
                "_id": req.params.productCategoryId
            }
        };
        updateTable(request, res);
    }

})(module.exports);