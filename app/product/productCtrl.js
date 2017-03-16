angular.module("product")
    .controller("productCtrl", ["productSvc", function(productSvc) {
        var vm = this;
        productSvc.getProductsFromApi()
            .then(function(response) {
                console.log(response);
                vm.products = response;
            })
            .catch(function(errorResponse) {
                console.log(errorResponse);
            });
    }]);