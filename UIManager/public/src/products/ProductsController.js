(function () {
    angular
        .module('products')
        .controller('ProductsController', ['productsService', '$mdSidenav', '$mdBottomSheet', '$log', '$q', ProductsController]);


    function ProductsController(productsService) {
        var self = this;

        self.currentProduct = '';
        self.products = productService.getAllProducts();

    }
})();