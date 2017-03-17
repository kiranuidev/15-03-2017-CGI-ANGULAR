angular.module("cgikart", ["register", "product", "ui.bootstrap", "pascalprecht.translate", "common"]);

angular.module("cgikart")
    .config(["$translateProvider", function($translateProvider) {
        console.log("Config:cgikart module");
        $translateProvider.translations('en', {
            Home: 'Home',
            Cart: 'Cart',
            Products: 'Produkte',
            Login: 'Login',
            Register: "Register"
        });
        $translateProvider.translations('de', {
            Home: 'Zuhause',
            Cart: 'Karte',
            Products: 'Produkte',
            Login: 'Anmeldung',
            Register: "Neu registrieren"
        });
        $translateProvider.preferredLanguage('de');

    }]);

angular.module("cgikart")
    .run([function() {
        console.log("Run:cgikart module");
    }]);

angular.module("cgikart")
    .controller("mainCtrl", ["$rootScope", "$translate", function($rootScope, $translate) {
        var vm = this;
        vm.brandName = "CGIMall";
        vm.templates = {};
        vm.cartItems = 0;
        vm.templates.header = "app/templates/header.tpl.html";
        vm.templates.register = "app/templates/register.tpl.html";
        /*vm.navItems = ["Home", "Products", "Register", "Login"];*/
        vm.navItems = [{
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

        vm.loadPage = function(data) {
            vm.contentTemplate = data.template;
        };
        $rootScope.$on("ADD-ITEM", function(evet, args) {
            console.log(args);
            vm.cartItems++;
        });

        vm.changeTo = function(type) {
            $translate.use(type);
        };
    }]);