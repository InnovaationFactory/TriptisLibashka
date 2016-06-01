(function () {
    'use strict';
    angular.module('cart', ['ngRoute', 'ngMaterial', 'util']);

    angular
        .module('cart')
        .controller('cartController', ['$routeParams', '$mdSidenav', '$mdBottomSheet', '$log', '$q', cartController]);

    function cartController($routeParams, $mdSidenav, $mdBottomSheet, $log, $q, $scope) {
        var self = this;

        self.cartItems = [{
            img: 'assets/img/clothing.png',
            name: "Hand bag",
            quantity: '20',
            price: '52.6',
            currency: '£'
        }, {
            img: 'assets/img/clothing.png',
            name: "Hand bag1",
            quantity: '20',
            price: '52.6',
            currency: '£'
        }, {
            img: 'assets/img/clothing.png',
            name: "Hand bag2",
            quantity: '20',
            price: '52.6',
            currency: '£'
        }, {
            img: 'assets/img/clothing.png',
            name: "Hand bag3",
            quantity: '20',
            price: '52.6',
            currency: '£'
        }];

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

//        $scope.on('itemAddedToCart', function (item) {
            //            self.cartItems.push(item);
            //        });
    }
})();