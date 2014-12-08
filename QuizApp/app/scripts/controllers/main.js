'use strict';

/**
 * @ngdoc function
 * @name itechApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the itechApp
 */
angular.module('itechApp')
  .controller('MainCtrl', function ($scope,QuestionService) {
  	for(var i=0;i<QuestionService.answered.length;i++){
		QuestionService.answered[i].value = "none";
	}
    
  });
