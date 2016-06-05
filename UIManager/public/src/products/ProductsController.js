(function () {

	angular
		.module('products')
		.controller('ProductsController', ['productsService', '$rootScope', 'productcategoriesService', '$routeParams', '$mdSidenav', '$mdBottomSheet', '$log', '$q', ProductsController]);


	function ProductsController(productsService, $rootScope, productcategoriesService, $routeParams, $mdSidenav, $mdBottomSheet, $log, $q) {
		var self = this;

		self.currentProduct = '';
		self.products = null;
		self.productNotAvailable = true;
		self.productsInDisplay = null;

		self.addProductToCart = function (product) {
			product.quantity = 1;
			$rootScope.$emit('itemAddedToCart', product);
		}


		if ($routeParams.categoryID) {
			productsService.getProductsByCategory($routeParams.categoryID).promise.then(function (data) {
				self.products = data;

				self.productsInDisplay = data.filter(function (o) {
					if (checkValueForFilters(o.Category)) {
						return o;
					}
				});


				if (self.productsInDisplay.length > 0) {
					self.productNotAvailable = false;
				}

				$rootScope.$emit('productListLoaded', self.products);
			})
		} else {
			productsService.getAllProducts().promise.then(function (data) {
				self.products = data;
				self.productsInDisplay = data;
				$rootScope.$emit('productListLoaded', self.products);
			});
		}


		function checkValueForFilters(category) {
			var filters = $routeParams.categoryID.split("_");
			var found = true;

			filters.forEach(function (item, index, arr) {
				if (category.indexOf(item) === -1) {
					found = false;
					return;
				}
			})

			return found;
		}

		function checkValueForFiltersExclusive(category, filter) {
			var filters = filter.split("_");
			var found = false;

			filters.forEach(function (item, index, arr) {
				if (category.indexOf(item) !== -1) {
					found = true;
					return;
				}
			})

			return found;
		}


		$rootScope.$on('productListFiltered', function (event, filter) {
			if (filter.type === "category") {
				self.productsInDisplay = self.products.filter(function (o) {
					if (checkValueForFiltersExclusive(o.Category, filter.value.join("_"))) {
						return o;
					}
				});
			} else if (filter.type === "pricerange") {

				var priceArray = filter.value.split(";");

				self.productsInDisplay = self.products.filter(function (o) {
					if (o.price >= priceArray[0] && o.price <= priceArray[1]) {
						return o;
					}
				});
			}
		});

	}
})();