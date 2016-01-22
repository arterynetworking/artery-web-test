/* main controller */
app.controller("MainController", ["$scope", "$window", function ($scope, $window) {

    $scope.templateUrl = "pages/home.html";
    $scope.hideNav = true;

    angular.element($window).bind("scroll", function () {
        
        if ($window.pageYOffset >= $window.innerHeight * 0.4) {
            $scope.hideNav = false;
        } else {
            $scope.hideNav = true;
        }
        
        $scope.$apply();
    });
}]);