(function () {
    'use strict';
    angular.module('util', ['ngRoute', 'ngMaterial']);

    angular
        .module('util')
        .controller('globalController', ['$rootScope', '$routeParams', '$mdSidenav', '$mdBottomSheet', '$log', '$q', '$scope', globalController]);

    function globalController($rootScope, $routeParams, $mdSidenav, $mdBottomSheet, $log, $q, $scope) {
        var self = this;
    }

})();