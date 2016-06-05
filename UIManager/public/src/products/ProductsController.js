(function () {

    angular
        .module('products')
        .controller('ProductsController', ['productsService', '$rootScope', 'productcategoriesService', '$routeParams', '$mdSidenav', '$mdBottomSheet', '$log', '$q', ProductsController]);


    function ProductsController(productsService, $rootScope, productcategoriesService, $routeParams, $mdSidenav, $mdBottomSheet, $log, $q) {
        var self = this;

        self.currentProduct = '';
        self.products = null;
        self.productNotAvailable = true;

        self.addProductToCart = function (product) {
            product.quantity = 1;
            $rootScope.$emit('itemAddedToCart', product);
        }


        if ($routeParams.categoryID) {
            productsService.getProductsByCategory($routeParams.categoryID).promise.then(function (data) {
                self.products = [];
                self.products = data.filter(function (o) {
                    if (checkValueForFilters(o.Category)) {
                        return o;
                    }
                });


                if (self.products.length > 0) {
                    self.productNotAvailable = false;
                }

                $rootScope.$emit('productListLoaded', self.products);
            })
        } else {
            productsService.getAllProducts().promise.then(function (data) {
                self.products = data;
                $rootScope.$emit('productListLoaded', self.products);
            });
        }


        function checkValueForFilters(category) {
            var filters = $routeParams.categoryID.split("_");
            var found = true;

            filters.forEach(function (item, index, arr) {
                if (category.indexOf(item) === -1) {
                    found = false;
                    return;
                }
            })

            return found;
        }
    }
})();