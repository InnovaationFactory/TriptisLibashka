(function () {
    'use strict'

    angular.module('products')
        .service('productsService', ['$q', '$http', 'APIService', '$timeout', ProductsService]);

    function ProductsService($q, $http, APIService, $timeout) {
        return {
            getAllProducts: function (productCategory) {
                var deferred = $q.defer();

                var request = $http({
                    method: "get",
                    url: GLOBALCONFIG.ServiceManager.getUrls('getProductDetails')
                });

                request.success(function (data) {
                    deferred.resolve(data);
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
            },
            getAllNewProducts: function () {
                var deferred = $q.defer();
                //                var request = $http({
                //                    method: "get",
                //                    url: GLOBALCONFIG.ServiceManager.getUrls('getProductCategories')
                //                });
                //
                //                request.success(function (response) {
                //                    deferred.resolve(response.data);
                //                });

                $timeout(function () {
                    var newProducts = [{
                        imageUrl: "assets/img/banner.jpg",
                        name: "Fasionable Bangles",
                        currency: "£",
                        price: "61.19",
                        oldPrice: "120.20",
                        comment: "Flat 50% Discount",
                        rating: 5
                    }, {
                        imageUrl: "assets/img/bangle.png",
                        name: "Trendy Bangles",
                        currency: "£",
                        price: "61.19",
                        oldPrice: "120.20",
                        comment: "Flat 50% Discount",
                        rating: 5
                    }, {
                        imageUrl: "assets/img/necklace.png",
                        name: "Latest Necklaces",
                        currency: "£",
                        price: "21.09",
                        rating: 5
                    }, {
                        imageUrl: "assets/img/earring.png",
                        name: "Exclusive Earings",
                        currency: "£",
                        price: "100.47",
                        rating: 5
                    }];
                    deferred.resolve(newProducts);
                }, 300)
                return deferred;
            }
        };
    }
})();