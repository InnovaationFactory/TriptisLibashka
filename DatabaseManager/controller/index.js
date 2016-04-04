(function (controller) {
    controller.init = function (app) {
        var user = require('./user');
        app.get('/api/users/:username?', user.getUserDetails);
        app.post('/api/users', user.addUser);

        var product = require('./product');
        app.get('/api/products/:productId?', product.getProductDetails);
        app.post('/api/products', user.addProducts);

    };
})(module.exports);