(function () {
    'use strict'

    angular.module('products')
        .service('productsService', ['$q', '$http', 'APIService', ProductsService]);

    function ProductsService($q, $http, APIService) {
        return {
            getAllProducts: function (productCategory) {
                var deferred = $q.defer();

                var request = $http({
                    method: "get",
                    url: GLOBALCONFIG.ServiceManager.getUrls('getProductDetails')
                });

                request.success(function (response) {
                    deferred.resolve(response.data);
                });

                return deferred;

            },
            getAllProductsById(productId) {

            },
            searchProducts: function (searchKey) {

            },


            getAllProductCategories: function () {
                var deferred = $q.defer();

                var request = $http({
                    method: "get",
                    url: GLOBALCONFIG.ServiceManager.getUrls('getProductCategories')
                });

                request.success(function (response) {
                    deferred.resolve(response.data);
                });

                return deferred;
            }
        };
    }
})();