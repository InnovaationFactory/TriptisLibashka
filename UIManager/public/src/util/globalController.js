(function () {
    'use strict';
    angular.module('util', ['ngRoute', 'ngMaterial']);

    angular
        .module('util')
        .controller('globalController', ['$rootScope', '$routeParams', '$mdSidenav', '$mdBottomSheet', '$log', '$q', '$scope', '$window', 'facebookService', globalController])
        .factory('facebookService', ['$q', facebookLoginService]);

    function globalController($rootScope, $routeParams, $mdSidenav, $mdBottomSheet, $log, $q, $scope, $window, facebookService) {
        var self = this;
        self.user = {
            Name: "Guest"
        };

        var setUser = function (userDetail) {
            debugger;
            self.user = {
                Name: userDetail.name,
                isAuthenticated: true
            };
        };

        $window.fbAsyncInit = function () {
            FB.init({
                appId: '681826728631616',
                status: true,
                cookie: true,
                xfbml: true,
                version: 'v2.4'
            });
        };

        var checkLoginStatus = function () {
            facebookService.getLoginStatus(function (response) {
                if (response.status != "connected") {
                    return alert("Unable to login to facebook, Please check your credentials");
                }
                facebookService.getMyDetails(function (err, user) {
                    if (err) {
                        return alert("Unable to login to facebook, Please try again later");
                    }
                    setUser(user);
                });
            });
        }

        //facebookService.getMyDetails(function (err, user) {
        //    if (!err) {
        //        setUser(user);
        //    }
        //});

        $rootScope.$on('FBUserLoggedIn', function () {
            checkLoginStatus();
        });

        checkLoginStatus();
    }

    function facebookLoginService($q) {
        return {
            getMyDetails: function (callback) {
                FB.api('/me', {
                        fields: 'name,email,birthday,hometown,location'
                    },
                    function (response) {
                        if (!response || response.error) {
                            callback('Error occured', null);
                        } else {
                            callback(null, response);
                        }
                    });
            },
            getLoginStatus: function (callback) {
                FB.getLoginStatus(function (response) {
                    callback(response);
                });
            }
        }
    }

})();