'use strict';

angular.module('moviesApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/addmovie/:imdbId', {
        templateUrl: 'views/addmovie.html',
        controller: 'AddMovieCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
