(function (controller) {
    controller.init = function (app) {
        var defaultConfigSetup = require('./defaultConfigSetup'),
            user = require('./user'),
            product = require('./product'),
            productCategory = require('./productCategory');

        defaultConfigSetup.insertDefaultCategories();

        app.get('/api/users/:username?', user.getUserDetails);
        app.post('/api/users', user.addUser);

        app.get('/api/products/:productId?', product.getProductDetails);
        app.post('/api/products', product.addProducts);
        app.delete('/api/products/:productId', product.deleteProducts);
        app.put('/api/products/:productId', product.updateProducts);

        app.get('/api/productsByCategory/:categoryID', product.getProductsByCategory);

        app.get('/api/productCategories/:productCategoryId', productCategory.getProductCategoryDetails);
        app.post('/api/productCategories', productCategory.addProductCategory);
        app.get('/api/productCategories', productCategory.getProductCategoryFromConfig);
        app.delete('/api/productCategories/:productCategoryId', productCategory.deleteProductCategory);
        app.put('/api/productCategories/:productCategoryId', productCategory.updateProductCategory);



    };
})(module.exports);