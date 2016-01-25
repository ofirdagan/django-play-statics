/// <reference path="../app.ts" />

'use strict';

module djangoItunesStaticsApp {

  export class ArtistsCtrl {
    private artists: Array<ArtistDto>;
    private artistAlbums: Array<AlbumDto>;
    private selected: number;
    /*@ngInject*/
    constructor (private iTunesApi: ITunesApi) {
      this.artists = [];
      this.artistAlbums = [];

      iTunesApi.fetchArtists().then((artists: Array<ArtistDto>) => {
        angular.copy(artists, this.artists);
        if(artists.length > 0) {
          this.select(this.artists[0].id);
        }
      });
    }
    select(artistId: number) {
      this.selected = artistId;
      this.iTunesApi.fetchArtistAlbums(artistId).then((albums: Array<AlbumDto>) => {
        angular.copy(albums, this.artistAlbums);
      });
    }
  }

  export class ArtistDto {
    name: string;
    id: number;
  }

  export class AlbumDto {
    name: string;
    imageUrl: string;
    id: number;
  }
}

angular.module('djangoItunesStaticsApp')
  .controller('ArtistsCtrl', djangoItunesStaticsApp.ArtistsCtrl);
