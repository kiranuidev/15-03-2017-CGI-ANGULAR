angular.module("cgikart", ["register"]);

angular.module("cgikart")
    .config([function () {
        console.log("Config:cgikart module");
}]);

angular.module("cgikart")
    .run([function () {
        console.log("Run:cgikart module");
}]);

angular.module("cgikart")
    .controller("mainCtrl", [function () {
        var vm = this;
        vm.brandName = "CGIMall";
        vm.templates = {};
        vm.templates.header = "app/templates/header.tpl.html";
        vm.templates.register = "app/templates/register.tpl.html";
        /*vm.navItems = ["Home", "Products", "Register", "Login"];*/
        vm.navItems = [
            {
                display: "Home",
                template: "app/templates/Home.tpl.html"
        },
            {
                display: "Products",
                template: "app/templates/product.tpl.html"
        },
            {
                display: "Register",
                template: "app/templates/register.tpl.html"
        }, {
                display: "Login",
                template: "app/templates/login.tpl.html"
        },
            {
                display: "Cart",
                template: "app/templates/cart.tpl.html"
            }



        ];

        vm.loadPage = function (data) {
            vm.contentTemplate = data.template;
        };
}])
