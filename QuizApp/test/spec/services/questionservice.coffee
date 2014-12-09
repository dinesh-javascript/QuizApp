"use strict"
describe "Service: questionService", ->
  
  # load the service's module
  beforeEach module("itechApp")
  
  # instantiate service
  questionService = undefined
  beforeEach inject((_questionService_) ->
    questionService = _questionService_
    return
  )
  it "should do something", ->
    expect(!!questionService).toBe true
    return

  return

