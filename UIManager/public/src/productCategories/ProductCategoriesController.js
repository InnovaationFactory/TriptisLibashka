(function () {
    angular
        .module('ProductCategories')
        .controller('ProductCategoriesController', ['ProductCategoryService', '$mdSidenav', '$mdBottomSheet', '$log', '$q', ProductCategoriesController]);


    function ProductCategoriesController(ProductCategoryService, $mdSidenav, $mdBottomSheet, $log, $q) {
        var self = this;

        self.productCategories = null;

        ProductCategoryService.getAllProductCategories().promise.then(function (data) {
            self.productCategories = data;
        });
    }
})();