angular.module("product")
    .controller("productCtrl", ["productSvc", "$rootScope",
        function(productSvc, $rootScope) {
            var vm = this;
            vm.priceOrder = "Price";
            vm.pagination = {
                totalItems: 0,
                currentPage: 1
            };
            vm.pageChanged = function() {
                var startIndex = (vm.pagination.currentPage - 1) * 10;
                var endIndex = vm.pagination.currentPage * 10;
                vm.paginatedProducts = vm.totalProducts.slice(startIndex, endIndex);
                console.log(vm.pagination.currentPage);
            };
            vm.sortByPrice = function() {
                if (vm.priceOrder == "Price") {
                    vm.priceOrder = "-Price";
                } else {
                    vm.priceOrder = "Price";
                }
            };

            productSvc.getProductsFromApi()
                .then(function(response) {
                    console.log(response);
                    vm.totalProducts = response;
                    vm.pagination.totalItems = vm.totalProducts.length;
                    vm.pageChanged();
                })
                .catch(function(errorResponse) {
                    console.log(errorResponse);
                });

            vm.addToCart = function(item) {
                $rootScope.$broadcast("ADD-ITEM", { data: item });
            };
        }
    ]);