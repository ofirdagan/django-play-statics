/// <reference path="../app.ts" />

'use strict';

module djangoItunesStaticsApp {

  export class ArtistsCtrl {
    private artists: Array<Artist>;
    private artistAlbums: Array<Album>;

    constructor (private iTunesApi: ITunesApi) {
      this.artists = [];
      this.artistAlbums = [];

      iTunesApi.fetchArtists().then((artists: Array<Artist>) => {
        angular.copy(artists, this.artists);
      });
    }
    select(artistId: number) {
      this.iTunesApi.fetchArtistAlbums(artistId).then((albums: Array<Album>) => {
        angular.copy(albums, this.artistAlbums);
      });
    }
  }

  export class Artist {
    name: string;
    id: number;
  }

  export class Album {
    name: string;
    imageUrl: string;
    id: number;
  }
}

angular.module('djangoItunesStaticsApp')
  .controller('ArtistsCtrl', djangoItunesStaticsApp.ArtistsCtrl);
