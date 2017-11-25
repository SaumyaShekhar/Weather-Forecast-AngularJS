//Define Routes
weatherApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/weather.html',
            controller: 'weatherController'
        })
        .when('/forecast', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })
        .when('/forecast/:days', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })

});