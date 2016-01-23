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
  .config(function ($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  })
  .config(($routeProvider: ng.route.IRouteProvider) => {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl as main'
      })
      .when('/albums', {
        templateUrl: 'views/artists.html',
        controller: 'ArtistsCtrl as artistsCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
