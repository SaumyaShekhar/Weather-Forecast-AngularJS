//Define Controllers
weatherApp.controller('weatherController', ['$scope', '$location','weatherService', function ($scope, $location, weatherService) {
    $scope.city = weatherService.city;
    $scope.$watch('city', function () {
        weatherService.city = $scope.city;
    })
    $scope.submit = function(){
        $location.path("/forecast");
    };

}

]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', '$resource', '$sce', 'weatherService', function ($scope, $routeParams, $resource, $sce, weatherService) {
    $scope.city = weatherService.city;
    $scope.days = $routeParams.days || '2';
    $scope.weatherAPI =
        $resource("http://api.openweathermap.org/data/2.5/forecast/", {
            get: {
                method: "GET"
            }
        });
    $scope.weatherResult = $scope.weatherAPI.get({
        q: $scope.city,
        cnt: $scope.days,
        appid: APP_ID //AppId Register on openweathermap.org to get the App ID.
    });

    $scope.convertToFahrenheit = function (degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    }

    //console.log($scope.weatherResult);
}]);