/**
 * Created by Jesse on 09/03/2015.
 */

// Declare module that references our controllers.
var loginApp = angular.module('loginApp', ['ngRoute', 'myControllers'])
    .config(function ($routeProvider) {
        $routeProvider.when("/", {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
        })

            // If no route is selected then use the 'home' route.
            .otherwise({ redirectTo: '/index' });
    });

