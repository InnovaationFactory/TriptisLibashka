(function () {

    angular
        .module('products')
        .controller('ProductsController', ['productsService', '$mdSidenav', '$mdBottomSheet', '$log', '$q', ProductsController]);


    function ProductsController(productsService, $mdSidenav, $mdBottomSheet, $log, $q) {
        var self = this;

        self.currentProduct = '';
        self.products = null;
        self.productCategories = null;

        productsService.getAllProducts().promise.then(function (data) {
            self.products = data;
        });


        productsService.getAllProductCategories().promise.then(function (data) {
            self.productCategories = data;
        });
    }
})();