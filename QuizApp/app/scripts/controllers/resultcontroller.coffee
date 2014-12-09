"use strict"

###*
@ngdoc function
@name itechApp.controller:ResultcontrollerCtrl
@description
# ResultcontrollerCtrl
Controller of the itechApp
###
angular.module("itechApp").controller "ResultcontrollerCtrl", ($scope, QuestionService) ->
  $scope.questions = QuestionService.questions
  $scope.answers = QuestionService.answers
  $scope.answered = QuestionService.answered
  $scope.score = 0
  showResult = ->
    score = 0
    i = 0

    while i < $scope.answers.length
      score++  if $scope.answered[i].value is $scope.answers[i].selected
      i++
    $scope.score = score
    return

  showResult()
  return

