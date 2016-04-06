(function () {
    'use strict';

    angular.module('products')
        .service('productsService', ['$q', 'APIService', ProductsService]);

    function ProductsService($q, APIService) {
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