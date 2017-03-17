angular.module("register")
    .controller("registerCtrl", ["registerSvc", "$state", "$scope", function (registerSvc, $state, $scope) {
        var vm = this;
        $scope.title = "Register";
        vm.user = {};
        vm.register = function () {
            console.log(vm.user);
            $state.go("products", {
                data: vm.user
            });
        };
        //vm.countries = registerSvc.getCountries();
        registerSvc.getCountriesFromApi()
            .then(function (response) {
                vm.countries = response;
            })
            .catch(function (errorResponse) {
                console.log(errorResponse);
            });

        $scope.$watch("title", function (newVal, oldVal) {
            console.log(newVal);
            console.log(oldVal);
        });
    }]);
