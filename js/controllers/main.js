/* main controller */
app.controller("MainController", ["$scope", "$window", "$location",
    function ($scope, $window, $location) {

        $scope.defaultPage = "pages/home.html"
        $scope.templateUrl = null;
        $scope.hideNav = true;
        $scope.isLoading = false;

        $scope.goToPage = function (pageName) {
            
            $location.url(pageName);
            $scope.templateUrl = "pages" + pageName + ".html";
            $scope.scrollPageEvent();
            
            $scope.$apply();
        }
        
        $scope.loadPageEvent = function () {

            if ($location.url() !== "") {
                $scope.goToPage($location.url());
            } else {
                $scope.templateUrl = $scope.defaultPage;
            }
            $scope.scrollPageEvent();
        }
        
        $scope.scrollPageEvent = function () {

            if ($scope.templateUrl !== $scope.defaultPage) {
                $scope.hideNav = false;
            } else {
                if ($window.pageYOffset >= $window.innerHeight * 0.4) {
                    $scope.hideNav = false;
                } else {
                    $scope.hideNav = true;
                }
            }
            
            $scope.$apply();
        }

        angular.element($window).bind("load", $scope.loadPageEvent);
        angular.element($window).bind("scroll", $scope.scrollPageEvent);
    }]);