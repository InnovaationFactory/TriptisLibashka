(function () {
    'use strict'
    angular.module('productcategories').controller('ProductCategoriesController', ['productcategoriesService', '$routeParams', '$mdSidenav', '$mdBottomSheet', '$log', '$q', ProductCategoriesController]);


    function ProductCategoriesController(productcategoriesService, $routeParams, $mdSidenav, $mdBottomSheet, $log, $q) {
        var self = this;

        self.productCategories = null;
        self.productCategory = null;

        if ($routeParams.categoryID) {
            productcategoriesService.getProductCategoryByID($routeParams.categoryID).promise.then(function (data) {
                self.productCategory = data;
            });

        } else {
            productcategoriesService.getAllProductCategories().promise.then(function (data) {
                self.productCategories = data;
            });
        }

        self.options = {
            from: 100,
            to: 5000,
            step: 100,
            value: ""
        };

        self.value = "100;5000";
    }
})();