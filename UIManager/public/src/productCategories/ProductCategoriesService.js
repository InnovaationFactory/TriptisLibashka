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
            },
            getProductCategoryByID: function () {
                //read individual records to create subcategories. Is this the nosql way of doing this?

                var deferred = $q.defer();

                deferred.resolve({
                    ID: 100001,
                    Name: 'Jewellary',
                    Categories: [
                        {
                            ID: 100100,
                            Name: 'Bnagles'
                        },
                        {
                            ID: 100101,
                            Name: 'Earings'
                        }
                    ]
                });

                return deferred;
            }
        };
    }
})();