(function (user) {
    var data = require('../data'),
        tableName = 'product';

    user.getProductDetails = function (req, res) {
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
        });
    };
    user.addProduct = function (req, res) {
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

})(module.exports);