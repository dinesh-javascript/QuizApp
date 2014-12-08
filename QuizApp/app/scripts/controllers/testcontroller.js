'use strict';

/**
 * @ngdoc function
 * @name itechApp.controller:TestcontrollerCtrl
 * @description
 * # TestcontrollerCtrl
 * Controller of the itechApp
 */
angular.module('itechApp')
  .controller('TestcontrollerCtrl', function ($scope,QuestionService) {
    $scope.questions = QuestionService.questions;
    $scope.answers = QuestionService.ansers;
    $scope.answered = QuestionService.answered;  

    $scope.currentQuestion = 1;
    $scope.totalQuestion = $scope.questions.length;

    $scope.nextQuestion = function(){
    	if( $scope.currentQuestion < $scope.totalQuestion)
    		$scope.currentQuestion = $scope.currentQuestion+1;
    }
    $scope.prevQuestion = function(){
    	if( $scope.currentQuestion > 1)
    		$scope.currentQuestion = $scope.currentQuestion-1;
    }
    $scope.showQuestion = function(qID){
    	$scope.currentQuestion = qID;
    }

  });
