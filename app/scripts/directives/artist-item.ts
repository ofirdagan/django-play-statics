/// <reference path="../app.ts" />

'use strict';

module djangoItunesStaticsApp {

  export class ArtistItem implements ng.IDirective {
    restrict = 'E';
    scope = {
      artist: '='
    };
    link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes): void => {

    };
    template = `<div>{{artist.name}}</div>`;
  }

  export function artistItemFactory() {
    return new djangoItunesStaticsApp.ArtistItem();
  }

}

angular.module('djangoItunesStaticsApp')
  .directive('artistItem', djangoItunesStaticsApp.artistItemFactory);
