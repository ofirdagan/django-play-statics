/// <reference path="../app.ts" />

'use strict';

module djangoItunesStaticsApp {
  export class AddCtrl {
    private artist: string;
    private loading: boolean;
    /*@ngInject*/
    constructor(private iTunesApi: ITunesApi, private $mdToast: any) {
    }

    submit() {
      this.loading = true;
      this.iTunesApi.addArtist(this.artist).then((result) => {
        let text = result.success ? 'All albums added' : 'Artist not found';
        this.showToast(text);
      }).catch(() => {
        this.showToast('Something went wrong, try again')
      }).finally(() => {
        this.loading = false;
      });
    }

    private showToast(text: string) {
      this.$mdToast.show(
        this.$mdToast.simple()
          .textContent(text)
          .hideDelay(3000)
      );
    }
  }
}

angular.module('djangoItunesStaticsApp')
  .controller('AddCtrl', djangoItunesStaticsApp.AddCtrl);
