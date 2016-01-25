/// <reference path="../app.ts" />

'use strict';

module djangoItunesStaticsApp {

  export class Album implements ng.IDirective {
    restrict = 'E';
    scope = {
      album: '='
    };
    link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes): void => {
    };
    template = `
        <md-card>
            <md-card-title>
              <md-card-title-text>
                <span class="md-headline">{{album.name}}</span>
                <span class="md-subhead">Release Date: {{album.releaseDate | date}}</span>
              </md-card-title-text>
            </md-card-title>
            <md-card-content layout="row" layout-align="space-between">
              <div class="md-media-md card-media">
                <img ng-src="{{album.imageUrl}}">
              </div>
            </md-card-content>
          </md-card>`;
  }

  export function albumFactory() {
    return new djangoItunesStaticsApp.Album();
  }

}

angular.module('djangoItunesStaticsApp')
  .directive('album', djangoItunesStaticsApp.albumFactory);
