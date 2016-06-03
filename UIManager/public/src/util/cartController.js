(function () {
    'use strict';
    angular.module('cart', ['ngRoute', 'ngMaterial', 'util']);

    angular
        .module('cart')
        .controller('cartController', ['$rootScope', '$routeParams', '$mdSidenav', '$mdBottomSheet', '$log', '$q', '$scope', cartController]);

    function cartController($rootScope, $routeParams, $mdSidenav, $mdBottomSheet, $log, $q, $scope) {
        var self = this;

        self.cartItems = [];

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
        }

        $rootScope.$on('itemAddedToCart', function (event, item) {
            debugger;
            self.cartItems.push(item);
        });
    }
})();

//{
//            ImageUrl: 'assets/img/clothing.png',
//            Name: "Hand bag",
//            quantity: '2',
//            price: '52.6',
//            currency: '£'
//        }, {
//            ImageUrl: 'assets/img/clothing.png',
//            Name: "Hand bag1",
//            quantity: '5',
//            price: '52.6',
//            currency: '£'
//        }, {
//            ImageUrl: 'assets/img/clothing.png',
//            Name: "Hand bag2",
//            quantity: '1',
//            price: '52.6',
//            currency: '£'
//        }, {
//            ImageUrl: 'assets/img/clothing.png',
//            Name: "Hand bag3",
//            quantity: '3',
//            price: '52.6',
//            currency: '£'
//        }