(function () {
    'use strict'

    angular.module('productcategories')
        .service('productcategoriesService', ['$q', '$http', 'APIService', ProductCategoriesService]);

    function ProductCategoriesService($q, $http, APIService) {
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