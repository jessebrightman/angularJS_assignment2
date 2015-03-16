/**
 * Created by Jesse on 09/03/2015.
 */

// declare angular app
    var validationApp = angular.module('validationApp', []);

// declare controller
    validationApp.controller('mainController', function($scope){

        //declare function for submit
        $scope.submitForm = function(isValid, $location){
            if(isValid){
                $location.path("/welcome");
            }
        }

    });

// Declare module that references our controllers.
var loginApp = angular.module('validationApp', ['ngRoute', 'myControllers'])
    .config(function ($routeProvider) {
        $routeProvider.when("/", {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
        }),

        $routeProvider.when("/welcome", {
            templateUrl: 'views/welcome.html',
            controller: 'LoginCtrl'
        })

            // If no route is selected then use the 'home' route.
            .otherwise({ redirectTo: '/index' });
    });

