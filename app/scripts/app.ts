/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />

'use strict';
angular.module('djangoItunesStaticsAppInternal', []);

angular.module('djangoItunesStaticsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'djangoItunesStaticsAppInternal',
  ])
  .config(/*@ngInject*/ function ($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  })
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue');
  })
  .config(function ($ariaProvider) {
    $ariaProvider.config({
      tabindex: false
    });
  })
  .config(/*@ngInject*/ ($routeProvider: ng.route.IRouteProvider) => {
    $routeProvider
      .when('/', {
        templateUrl: 'views/add.html',
        controller: 'AddCtrl as addCtrl'
      })
      .when('/albums', {
        templateUrl: 'views/artists.html',
        controller: 'ArtistsCtrl as artistsCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
