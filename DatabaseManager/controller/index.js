(function (controller) {
    controller.init = function (app) {
        var user = require('./user');
        var product = require('./product');
        var productCategory = require('./productCategory');

        app.get('/api/users/:username?', user.getUserDetails);
        app.post('/api/users', user.addUser);

        app.get('/api/products/:productId?', product.getProductDetails);
        app.post('/api/products', product.addProducts);
        app.delete('/api/products/:productId', product.deleteProducts);
        app.put('/api/products/:productId', product.updateProducts);

        app.get('/api/productCategories/:productCategoryId?', productCategory.getProductCategoryDetails);
        app.post('/api/productCategories', productCategory.addProductCategory);
        app.delete('/api/productCategories/:productCategoryId', productCategory.deleteProductCategory);
        app.put('/api/productCategories/:productCategoryId', productCategory.updateProductCategory);

    };
})(module.exports);