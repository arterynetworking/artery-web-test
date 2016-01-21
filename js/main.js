/* global angular */

angular.module("arteryWebApp", [])
    .controller("MainController", ["$scope", function ($scope) {
        $scope.templateUrl = "pages/home.html";
    }])
    .controller("HomeController", ["$scope", function ($scope) {
        
    }]);