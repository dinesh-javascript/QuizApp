"use strict"

###*
@ngdoc function
@name itechApp.controller:MainCtrl
@description
# MainCtrl
Controller of the itechApp
###
angular.module("itechApp").controller "MainCtrl", ($scope, QuestionService) ->
  i = 0

  while i < QuestionService.answered.length
    QuestionService.answered[i].value = "none"
    i++
  return

