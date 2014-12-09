"use strict"
describe "Controller: TestcontrollerCtrl", ->
  
  # load the controller's module
  beforeEach module("itechApp")
  TestcontrollerCtrl = undefined
  scope = undefined
  
  # Initialize the controller and a mock scope
  beforeEach inject(($controller, $rootScope) ->
    scope = $rootScope.$new()
    TestcontrollerCtrl = $controller("TestcontrollerCtrl",
      $scope: scope
    )
    return
  )
  it "should attach a list of awesomeThings to the scope", ->
    expect(scope.awesomeThings.length).toBe 3
    return

  return

