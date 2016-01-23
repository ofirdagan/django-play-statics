/// <reference path="../app.ts" />

'use strict';

module djangoItunesStaticsApp {
  export interface IAboutScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class AboutCtrl {

    constructor (private $scope: IAboutScope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  }
}

angular.module('djangoItunesStaticsApp')
  .controller('AboutCtrl', djangoItunesStaticsApp.AboutCtrl);
