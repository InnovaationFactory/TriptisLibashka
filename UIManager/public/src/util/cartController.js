(function () {
    'use strict';
    angular.module('cart', ['ngRoute', 'ngMaterial']);

    angular
        .module('cart')
        .controller('cartController', ['$rootScope', '$routeParams', '$mdSidenav', '$mdBottomSheet', '$log', '$q', '$scope', 'localStorage', cartController]);

    function cartController($rootScope, $routeParams, $mdSidenav, $mdBottomSheet, $log, $q, $scope, localStorage) {
        var self = this;
        var cartKey = 'cartItems';
        self.cartItems = localStorage.getData(cartKey) || [];
        debugger;
        self.getCartItemCount = function () {
            return self.cartItems.length;
        }

        self.getCost = function () {
            var cost = 0;
            var currency = '';
            self.cartItems.forEach(function (item) {
                cost += item.price * item.quantity;
                currency = item.currency;
            });
            return currency + " " + cost;
        }

        self.removeItem = function (index) {
            self.cartItems.splice(index, 1);
            localStorage.setData(cartKey, self.cartItems);
        }

        $rootScope.$on('itemAddedToCart', function (event, item) {
            self.cartItems.push(item);
            localStorage.setData(cartKey, self.cartItems);
        });
    }
})();