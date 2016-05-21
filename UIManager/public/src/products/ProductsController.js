(function () {

    angular
        .module('products')
        .controller('ProductsController', ['productsService', '$routeParams', '$mdSidenav', '$mdBottomSheet', '$log', '$q', ProductsController]);


    function ProductsController(productsService, $routeParams, $mdSidenav, $mdBottomSheet, $log, $q) {
        var self = this;

        self.currentProduct = '';
        self.products = null;
        //self.productCategories = null;


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