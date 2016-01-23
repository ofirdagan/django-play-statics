/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/i-tunes-api.ts" />

'use strict';

describe('Service: iTunesApi', () => {

  // load the service's module
  beforeEach(module('djangoItunesStaticsAppInternal'));

  // instantiate service
  var iTunesApi;
  beforeEach(inject(_iTunesApi_ => {
    iTunesApi = _iTunesApi_;
  }));

  it('should add artist', inject(($httpBackend) => {
    $httpBackend.expectPOST('/api/v1/artists/', {name: 'artist name'}).respond({success: true});
    iTunesApi.addArtist('artist name');
    $httpBackend.flush();
  }));

  it('should fetch artists', inject(($httpBackend) => {
    let mockedResult = [{id: 1, name: 'some-artists'}, {id: 2, name: 'some-other-artists'}];
    $httpBackend.expectGET('/api/v1/artists/').respond(mockedResult);
    let result = jasmine.createSpy('result');

    iTunesApi.fetchArtists().then(result);
    $httpBackend.flush();

    expect(result).toHaveBeenCalledWith(mockedResult);
  }));

  it('should fetch albums by artist', inject(($httpBackend) => {
    let mockedResult = [{id: 1, name: 'my-album', imageUrl: 'some-url'}];
    $httpBackend.expectGET('/api/v1/artists/3/albums').respond(mockedResult);
    let resultSpy = jasmine.createSpy('');

    iTunesApi.fetchArtistAlbums(3).then(resultSpy);
    $httpBackend.flush();

    expect(resultSpy).toHaveBeenCalledWith(mockedResult);
  }));

});
