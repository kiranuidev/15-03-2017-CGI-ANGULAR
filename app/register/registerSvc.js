angular.module("register")
    .service("registerSvc", [function () {
        this.getCountries = function () {
            return [{
                    name: "India",
                    code: "IN"
            },
                {
                    name: "Canada",
                    code: "CA"
            }];
        };
}]);
