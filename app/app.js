angular.module("cgikart", ["register"]);

angular.module("cgikart")
    .config([function () {
        console.log("Config:cgikart module");
}]);

angular.module("cgikart")
    .run([function () {
        console.log("Run:cgikart module");
}]);
