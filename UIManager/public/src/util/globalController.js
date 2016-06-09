(function () {
    'use strict';
    angular.module('util', ['ngRoute', 'ngMaterial']);

    angular
        .module('util')
        .controller('globalController', ['$rootScope', '$routeParams', '$mdSidenav', '$mdBottomSheet', '$log', '$q', '$scope', '$window', globalController])
        .factory('facebookService', ['$q', facebookLoginService]);

    function globalController($rootScope, $routeParams, $mdSidenav, $mdBottomSheet, $log, $q, $scope, $window) {
        var self = this;
        $window.fbAsyncInit = function () {
            FB.init({
                appId: '681826728631616',
                status: true,
                cookie: true,
                xfbml: true,
                version: 'v2.4'
            });
        };
    }


    function facebookLoginService($q) {
        return {
            getMyLastName: function () {
                var deferred = $q.defer();
                FB.api('/me', {
                    fields: 'last_name'
                }, function (response) {
                    if (!response || response.error) {
                        deferred.reject('Error occured');
                    } else {
                        deferred.resolve(response);
                    }
                });
                return deferred.promise;
            }
        }
    }

})();