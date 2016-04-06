(function (product) {
    var data = require('../data'),
        tableName = 'product';

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

    product.getProductDetails = function (req, res) {
        var request = {};
        request.table = tableName;
        request.query = {
            IsActive: true
        };
        var productId = req.params.productId;
        if (productId) {
            request.query = {
                $and: [{
                    "_id": productId
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
    product.addProducts = function (req, res) {
        debugger;
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
    product.deleteProducts = function (req, res) {
        var request = {};
        request.table = tableName;
        request.model = {
            IsActive: false
        };
        var productId = req.params.productId;
        request.query = {
            "_id": productId
        };

        updateTable(request, res);
    };
    product.updateProducts = function (req, res) {
        var request = {
            table: tableName,
            model: req.body,
            query: {
                "_id": req.params.productId
            }
        };
        updateTable(request, res);
    }

})(module.exports);