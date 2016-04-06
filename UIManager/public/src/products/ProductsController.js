(function () {
    angular
        .module('products')
        .controller('ProductsController', ['productsService', '$mdSidenav', '$mdBottomSheet', '$log', '$q', ProductsController]);


    function ProductsController(productsService, $mdSidenav, $mdBottomSheet, $log, $q) {
        var self = this;

        self.currentProduct = '';
        self.products = productsService.getAllProducts();

    }
})();