(function () {
    'use strict'
    angular.module('productcategories').controller('ProductCategoriesController', ['productcategoriesService', '$routeParams', '$mdSidenav', '$mdBottomSheet', '$log', '$q', ProductCategoriesController]);


    function ProductCategoriesController(productcategoriesService, $routeParams, $mdSidenav, $mdBottomSheet, $log, $q) {
        var self = this;

        self.productCategories = null;
        self.productCategory = $routeParams.categoryID;

        if ($routeParams.categoryID) {
            productcategoriesService.getProductCategoryByID($routeParams.categoryID).promise.then(function (data) {
                var categories = data;

                categories.forEach(function (item, index, arr) {
                    if (item.Key === $routeParams.categoryID.toString()) {
                        self.productCategories = item.Categories;
                    } else {
                        if (item.Categories) {
                            item.Categories.forEach(function (item1, index1, arr1) {
                                if (item1.Key === $routeParams.categoryID.toString()) {
                                    self.productCategories = item1.Categories;
                                }
                            });
                        }
                    }
                });
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