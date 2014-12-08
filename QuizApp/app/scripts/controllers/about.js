'use strict';

/**
 * @ngdoc function
 * @name itechApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the itechApp
 */
angular.module('itechApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
