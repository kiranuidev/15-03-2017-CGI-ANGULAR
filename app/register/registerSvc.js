angular.module("register")
    .service("registerSvc", ["$q", "$http", function($q, $http) {
        var countries = [{
                "name": "Afghanistan",
                "code": "AF"
            },
            {
                "name": "Åland Islands",
                "code": "AX"
            }
        ];

        this.getCountries = function() {
            /* 1. Create Deferred object.
               2. return the promise.
               3. resolve the promise ifn the response is positive.
               4. reject the promise if the respnonse is negative.
            */

            var dfd = $q.defer();
            if (countries.length > 0) {
                dfd.resolve(countries);
            } else {
                dfd.reject("Error no countries");
            }
            return dfd.promise;
        };

        this.getCountriesFromApi = function() {
            var dfd = $q.defer();
            $http.get("api/countries.json")
                .then(function(response) {
                    dfd.resolve(response.data.countries);
                })
                .catch(function(errorResponse) {
                    console.log(errorResponse);
                    dfd.reject(errorResponse);
                });
            return dfd.promise;
        };
    }]);