(function () {
    'use strict'

    angular.module('ProductCategories')
        .service('ProductCategoryService', ['$q', '$http', 'APIService', ProductCategoryService]);

    function ProductCategoryService($q, $http, APIService) {
        return {
            getAllProductCategories: function () {
                var deferred = $q.defer();

                var request = $http({
                    method: "get",
                    url: GLOBALCONFIG.ServiceManager.getUrls('getProductCategories')
                });

                request.success(function (response) {
                    deferred.resolve(response.data);
                });

                return deferred;
            }
        };
    }
})();