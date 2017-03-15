angular.module("register", []);
angular.module("register")
    .config([function () {
        console.log("Config:Register module");
}]);

angular.module("register")
    .run([function () {
        console.log("Run:Register module");
}]);
