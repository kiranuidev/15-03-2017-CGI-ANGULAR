angular.module("common", []);

angular.module("common")
    .directive("cgiHeader", [function() {
        return {
            template: "<h1>Welcome to directives</h1>"
        };
    }]);

angular.module("common")
    .directive("cgiNavBar", [function() {
        return {
            templateUrl: "app/templates/header.tpl.html",
            restrict: "A"
        };
    }]);
angular.module("common")
    .directive("cgiClick", [function() {
        return {

            restrict: "A",
            link: function(scope, element, attrs) {
                var fun = attrs["cgiClick"];
                element.bind("click", function() {
                    //alert("hello");
                    scope.$eval(fun);
                });
            }
        };
    }]);
angular.module("common")
    .directive("cgiNumbersOnly", [function() {
        return {

            restrict: "A",
            link: function(scope, element, attrs) {
                var maxlength = attrs["maxlength"];
                element.bind("keypress", function(e) {
                    if (this.value.length == maxlength) {
                        e.preventDefault();
                    }

                });
            }
        };
    }]);

angular.module("common")
    .directive("cgiDatePicker", [function() {
        return {

            restrict: "A",
            link: function(scope, element, attrs) {
                element.datepicker();
            }
        };
    }]);

angular.module("common")
    .directive("cgiCustomNav", [function() {
        return {
            templateUrl: "app/templates/custom.tpl.html",
            restrict: "A",
            scope: {
                logo: "@",
                menu: "="
            }



        };
    }]);


angular.module("common")
    .directive("cgiTransclude", [function() {
        return {
            template: "<h1>I am the boss</h1><span ng-transclude></span> ",
            restrict: "A",
            transclude: true
        };
    }]);


angular.module("common")
    .directive("cgiChangeColor", [function() {
        return {
            restrict: "A",
            compile: function(element, attrs) {
                console.log(element);
                element.innerHTML = "hey i am dir";
                console.log(attrs);
                return {
                    pre: function(scope, element, attrs) {
                        console.log("i am prelink");
                    },
                    post: function(scope, element, attrs) {
                        console.log("i am post link");
                    }
                }

            }
        };
    }]);