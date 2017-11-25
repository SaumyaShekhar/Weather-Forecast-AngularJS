//Creating a Directive
weatherApp.directive("forecastResult", function () {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'directives/forecastResult.html',
        scope: {
            weatherDate: "@",
            weatherTemp: "@",
            convertToStandard: "&"
        }

    }

});
