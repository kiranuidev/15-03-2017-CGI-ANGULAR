angular.module("product")
    .service("productSvc", ["$q", "$http", function ($q, $http) {


        this.getProductsFromApi = function () {
            var dfd = $q.defer();
            $http.get("api/products.json")
                .then(function (response) {
                    dfd.resolve(response.data.products);
                })
                .catch(function (errorResponse) {
                    console.log(errorResponse);
                    dfd.reject(errorResponse);
                });
            return dfd.promise;
        };
    }]);


angular.module("product")
    .factory("productFac", ["$q", "$http", function ($q, $http) {
        return {
            getProductsFromApi: function () {
                var dfd = $q.defer();
                $http.get("api/products.json")
                    .then(function (response) {
                        dfd.resolve(response.data.products);
                    })
                    .catch(function (errorResponse) {
                        console.log(errorResponse);
                        dfd.reject(errorResponse);
                    });
                return dfd.promise;
            }
        }
    }]);
