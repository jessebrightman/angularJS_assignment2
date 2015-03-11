/**
 * Created by Jesse on 09/03/2015.
 */

// Declare module that references our controllers.
var loginApp = angular.module('loginApp', ['ngRoute', 'loginAppControllers']).config(function ($routeProvider) {

    /*
     Inject the AngularJS routing (ngRoute) service so we can
     access the $routeProvider reference in our routing function.
     Also inject the 'cardAppControllers' service which we will
     define in 'controllers.js'.
     */

    'use strict';

    $routeProvider.when("/home", {
        /* When 'home' route is selected
         use the 'list.html' template and the 'ListCtrl' controller. */
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
    }).
        /*when('/home/number/:numberID/suit/:suitID', {
            templateUrl: 'views/detail.html', controller: 'DetailCtrl'
        }).
        when('/add', {
            templateUrl: 'views/add.html', controller: 'AddCtrl'
        }).
        when('/addconfirm/number/:numberID/suit/:suitID', {
            templateUrl: 'views/confirm.html', controller: 'AddConfirmCtrl'
        }).*/

        // If no route is selected then use the 'home' route.
        otherwise({ redirectTo: '/home' });
});

