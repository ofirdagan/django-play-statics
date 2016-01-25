/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/directives/album.ts" />

'use strict';

describe('Directive: album', () => {

  // load the directive's module
  beforeEach(module('djangoItunesStaticsApp'));

  var element: JQuery,
    scope: ng.IScope;

  beforeEach(inject(($rootScope: ng.IRootScopeService) => {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(($compile: ng.ICompileService) => {
    element = angular.element('<album></album>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the album directive');
  }));
});
