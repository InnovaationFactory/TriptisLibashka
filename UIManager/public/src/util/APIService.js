(function () {
    'use strict';

    angular.module('util', []);

    angular.module('util')
        .service('APIService', ['$q', APIService]);

    function APIService() {
        return {
            getEntityFromServer: function (entityType, params) {
                switch (entityType) {
                case "Product":
                    return getProductsFromServer(params.productCategory);
                default:
                    return null;
                }
            }
        }


        function getProductsFromServer(productCategory) {

            return [{
                _id: 101,
                Name: 'Item1',
                Category: productCategory,
                ImageUrl: '',
                IsActive: true,
                CreatedDate: '',
                CreatedBy: '',
                ModifiedDate: '',
                ModifiedBy: ''
                }];
        }
    }
})();