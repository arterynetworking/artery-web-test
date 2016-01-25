/* home controller */
app.controller("HomeController", ["$scope", "$location", "$anchorScroll",
    function ($scope, $location, $anchorScroll) {
    
    $scope.goToTickets = function () {
        $location.hash("tickets");
        $anchorScroll();
    }
}]);