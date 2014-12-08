'use strict';

/**
 * @ngdoc function
 * @name itechApp.controller:ResultcontrollerCtrl
 * @description
 * # ResultcontrollerCtrl
 * Controller of the itechApp
 */
angular.module('itechApp')
  .controller('ResultcontrollerCtrl', function ($scope,QuestionService) {
  		$scope.questions = QuestionService.questions;
  	    $scope.answers = QuestionService.answers;
    	$scope.answered = QuestionService.answered; 
    	$scope.score=0; 
    	var showResult = function(){
    		var score=0;
    		for(var i=0;i<$scope.answers.length;i++){
    			if($scope.answered[i].value === $scope.answers[i].selected)
    				score++;
    		}
    		$scope.score=score;
    	}
    	showResult();
  });
