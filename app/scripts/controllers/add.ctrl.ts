/// <reference path="../app.ts" />

'use strict';

module djangoItunesStaticsApp {
  export interface IMainScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class MainCtrl {
    private artist: string;

    constructor (private $scope: IMainScope, private iTunesApi: ITunesApi) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }

  submit() {
    this.iTunesApi.addArtist(this.artist);
  }

  }
}

angular.module('djangoItunesStaticsApp')
  .controller('MainCtrl', djangoItunesStaticsApp.MainCtrl);
