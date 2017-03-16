angular.module("register")
    .controller("registerCtrl", ["registerSvc", function(registerSvc) {
        var vm = this;
        vm.title = "Register";
        vm.user = {};
        vm.register = function() {
            console.log(vm.user);
        };
        vm.countries = registerSvc.getCountries();
    }]);