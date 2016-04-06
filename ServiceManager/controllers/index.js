(function (controller) {
    controller.init = function (app) {

        var config = app.get('config'),
            router = app.get(config.router.name),
            product = require('./product'),
            productCategory = require('./productCategory');


        router.route('/products')
            .post(product.addProducts)
            .get(product.getProductDetails);
        router.route('/products/:productId')
            .get(product.getProductDetails)
            .delete(product.deleteProducts)
            .put(product.updateProducts);

        router.route('/productCategories')
            .post(productCategory.addProductCategory)
            .get(productCategory.getProductCategoryDetails);
        router.route('/productCategories/:productCategoryId')
            .get(productCategory.getProductCategoryDetails)
            .delete(productCategory.deleteProductCategory)
            .put(productCategory.updateProductCategory);
    };
})(module.exports);