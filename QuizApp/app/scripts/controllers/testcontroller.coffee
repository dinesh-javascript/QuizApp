"use strict"

###*
@ngdoc
@name itechApp.controller:TestcontrollerCtrl
@description
# TestcontrollerCtrl
Controller of the itechApp
###
angular.module("itechApp").controller "TestcontrollerCtrl", ($scope, QuestionService) ->
  $scope.questions = QuestionService.questions
  $scope.answers = QuestionService.ansers
  $scope.answered = QuestionService.answered
  $scope.currentQuestion = 1
  $scope.totalQuestion = $scope.questions.length
  $scope.nextQuestion = ->
    $scope.currentQuestion = $scope.currentQuestion + 1  if $scope.currentQuestion < $scope.totalQuestion
    return

  $scope.prevQuestion = ->
    $scope.currentQuestion = $scope.currentQuestion - 1  if $scope.currentQuestion > 1
    return

  $scope.showQuestion = (qID) ->
    $scope.currentQuestion = qID
    return

  return

