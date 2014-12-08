'use strict';

/**
 * @ngdoc overview
 * @name itechApp
 * @description
 * # itechApp
 *
 * Main module of the application.
 */
angular
  .module('itechApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/takeTest', {
        templateUrl: 'views/test.html',
        controller: 'TestcontrollerCtrl'
      })
      .when('/showResult', {
        templateUrl: 'views/result.html',
        controller: 'ResultcontrollerCtrl'
      })      
      .otherwise({
        redirectTo: '/'
      });
  });
