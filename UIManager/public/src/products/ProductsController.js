(function () {

    angular
        .module('products')
        .controller('ProductsController', ['productsService', 'productcategoriesService', '$routeParams', '$mdSidenav', '$mdBottomSheet', '$log', '$q', ProductsController]);


    function ProductsController(productsService, productcategoriesService, $routeParams, $mdSidenav, $mdBottomSheet, $log, $q) {
        var self = this;

        self.currentProduct = '';
        self.products = null;
        //self.productCategories = null;


        if ($routeParams.categoryID) {
            productsService.getProductsByCategory($routeParams.categoryID).promise.then(function (data) {
                self.products = data;

                setMaxAndMinProductPrices();
            })
        } else {
            productsService.getAllProducts().promise.then(function (data) {
                self.products = data;
                setMaxAndMinProductPrices();
            });
        }


        function setMaxAndMinProductPrices() {
            var pricearray = self.products.map(function (o) {
                return o.price;
            })

            var max = Math.max.apply(Math, pricearray);
            productsService.maxPrice = Math.ceil(max);

            var min = Math.min.apply(Math, pricearray);
            productsService.minPrice = Math.floor(min);
        }
    }
})();