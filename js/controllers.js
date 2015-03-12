/*global angular */

// Controller - dispatches inputs and outputs.
var myControllers = (function () {
    var myControllers = angular.module('myControllers', []);

    // Controllers are defined by the controller function.
    myControllers.controller('AppCtrl', ['$scope', function ($scope) {
        $scope.title = "Login Assignment";
    }]);
    myControllers.controller('LoginCtrl', ['$scope', function ($scope) {
        $scope.title = "Login";
    }]);
    return myControllers;
}());
