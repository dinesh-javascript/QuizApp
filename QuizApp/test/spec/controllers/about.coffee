"use strict"
describe "Controller: AboutCtrl", ->
  
  # load the controller's module
  beforeEach module("itechApp")
  AboutCtrl = undefined
  scope = undefined
  
  # Initialize the controller and a mock scope
  beforeEach inject(($controller, $rootScope) ->
    scope = $rootScope.$new()
    AboutCtrl = $controller("AboutCtrl",
      $scope: scope
    )
    return
  )
  it "should attach a list of awesomeThings to the scope", ->
    expect(scope.awesomeThings.length).toBe 3
    return

  return

