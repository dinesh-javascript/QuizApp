'use strict';

/**
 * @ngdoc service
 * @name itechApp.questionService
 * @description
 * # questionService
 * Service in the itechApp.
 */
angular.module('itechApp')
  .service('QuestionService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.questions = [
        { "id": 1, "text": "Tim Berners-Lee invented the Internet"},
        { "id": 2, "text": "Dogs are better than cats"},
        { "id": 3, "text": "Winter is coming"},
        { "id": 4, "text": "Internet Explorer is the most advanced browser on Earth"}
    ];

    this.answers = [
        { "id": 1, "selected": "true"},
        { "id": 2, "selected": "false"},
        { "id": 3, "selected": "true"},
        { "id": 4, "selected": "false"}
    ];
    this.answered = [
        { "id": 1, "value": "none"},
        { "id": 2, "value": "none"},
        { "id": 3, "value": "none"},
        { "id": 4, "value": "none"}
    ];  

  });
