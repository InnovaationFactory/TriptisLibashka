(function () {
	'use strict'
	angular.module('products').controller('ProductsFilterController', ['productcategoriesService', 'productsService', '$routeParams', '$mdSidenav', '$mdBottomSheet', '$log', '$q', '$scope', '$rootScope', ProductsFilterController]);


	function ProductsFilterController(productcategoriesService, productsService, $routeParams, $mdSidenav, $mdBottomSheet, $log, $q, $scope, $rootScope) {
		var self = this;

		self.productCategories = null;
		self.products = null;
		// self.productCategory = $routeParams.categoryID;

		if ($routeParams.categoryID) {
			productcategoriesService.getProductCategoryByID($routeParams.categoryID).promise.then(function (data) {
				var categories = data;
				var categoryFilter = $routeParams.categoryID;

				if (categoryFilter.indexOf("_") !== -1) {
					categoryFilter = categoryFilter.substring(categoryFilter.lastIndexOf("_") + 1)
				}


				categories.forEach(function (item, index, arr) {
					if (item.Key === categoryFilter.toString()) {
						self.productCategories = item.Categories;
					} else {
						if (item.Categories) {
							item.Categories.forEach(function (item1, index1, arr1) {
								if (item1.Key === categoryFilter.toString()) {
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

		self.priceRange = {
			options: {
				from: 0,
				to: null,
				step: 10
			},
			value: "null;null"
		};

		$rootScope.$on('productListLoaded', function (event, products) {

			if (products.length > 0) {
				var pricearray = products.map(function (o) {
					return o.price;
				})

				var max = Math.ceil(Math.max.apply(Math, pricearray));
				var min = Math.floor(Math.min.apply(Math, pricearray));

				self.priceRange.options.from = min;
				self.priceRange.options.to = max;
				self.priceRange.value = ("" + min + ";" + max + "");
			}
		});
	}

})();