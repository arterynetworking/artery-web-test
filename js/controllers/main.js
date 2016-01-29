/* main controller */
app.controller("MainController", ["$scope", "$window", "$location",
    function ($scope, $window, $location) {

        $scope.defaultPage = "pages/home.html"
        $scope.templateUrl = null;
        $scope.isLoading = false;

        $scope.goToPage = function (pageName) {
            
            $location.url(pageName);
            $scope.templateUrl = "pages" + pageName + ".html";
        }
        
        $scope.loadPageEvent = function () {

            if ($location.url() !== "") {
                $scope.goToPage($location.url());
                $scope.$apply();
            } else {
                $scope.templateUrl = $scope.defaultPage;
            }
        }

        angular.element($window).bind("load", $scope.loadPageEvent);
    }]);