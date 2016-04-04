(function () {
    'use strict';

    angular.module('products', ['util'])
        .service('productsService', ['$q', 'util', ProductsService]);

    function ProductsService($q, util) {
        return {
            getAllProducts: function (productCategory) {

                console.log('here');

                var products = APIService.getEntityFromServer('Product', {
                    productCategory: productCategory
                });


                return products;
            },
            getAllProductsById(productId) {

            },
            searchProducts: function (searchKey) {

            }
        };
    }
})();