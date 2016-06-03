(function () {

    angular
        .module('products')
        .controller('ProductsController', ['productsService', '$rootScope', 'productcategoriesService', '$routeParams', '$mdSidenav', '$mdBottomSheet', '$log', '$q', ProductsController]);


    function ProductsController(productsService, $rootScope, productcategoriesService, $routeParams, $mdSidenav, $mdBottomSheet, $log, $q) {
        var self = this;

        self.currentProduct = '';
        self.products = null;
        //self.productCategories = null;

        self.addProductToCart = function (product) {
            product.quantity = 1;
            $rootScope.$emit('itemAddedToCart', product);
        }


        if ($routeParams.categoryID) {
            productsService.getProductsByCategory($routeParams.categoryID).promise.then(function (data) {
                self.products = data;
            })
        } else {
            productsService.getAllProducts().promise.then(function (data) {
                self.products = data;
            });
        }
    }
})();