(function () {
    angular
        .module('productcategories')
        .controller('productcategoriesController', ['productcategoriesService', '$mdSidenav', '$mdBottomSheet', '$log', '$q', productcategoriesController]);


    var productcategoriesController = function (productcategoriesService, $mdSidenav, $mdBottomSheet, $log, $q) {
        var self = this;

        self.productCategories = null;

        productcategoriesService.getAllProductCategories().promise.then(function (data) {
            self.productCategories = data;
        });
    }
})();