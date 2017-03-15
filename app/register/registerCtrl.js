angular.module("register")
    .controller("registerCtrl", [function () {
        var vm = this;
        vm.title = "Register";
        vm.user = {};
        vm.register = function () {
            console.log(vm.user);
        };
        vm.countries = [{
                name: "India",
                code: "IN"
            },
            {
                name: "Canada",
                code: "CA"
            }];
}]);
