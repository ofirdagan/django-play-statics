/// <reference path="../app.ts" />

'use strict';

module djangoItunesStaticsApp {
  import IPromise = angular.IPromise;
  export class ITunesApi {

    /*@ngInject*/
    constructor (private $http: ng.IHttpService) {

    }

    addArtist(name):any {
      return this.$http.post('/api/v1/artists/', {name: name}).then(response => {
        return response.data;
      });
    };

    fetchArtists(): IPromise<any> {
      return this.$http.get('/api/v1/artists/').then(response => {
        return response.data;
      });
    }

    fetchArtistAlbums(artistId: number): IPromise<any> {
      return this.$http.get(`/api/v1/artists/${artistId}/albums/`).then(response => {
        return response.data;
      });
    }
  }
}

angular.module('djangoItunesStaticsAppInternal')
  .service('iTunesApi', djangoItunesStaticsApp.ITunesApi);
