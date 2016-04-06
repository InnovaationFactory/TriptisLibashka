(function () {
    'use strict';

    angular.module('util', []);

    angular.module('util')
        .service('APIService', ['$q', APIService]);

    function APIService($q) {}

})();