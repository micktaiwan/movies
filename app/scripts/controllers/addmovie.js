'use strict';

angular.module('moviesApp')
    .controller('AddMovieCtrl', function($scope, $firebase, $routeParams) {

        var moviesRef = new Firebase('https://mymovies.firebaseio.com/movies');
        // first search for the movie in movies
        //$firebase(moviesRef).child(id);

        $scope.movie = {Title: $routeParams.imdbId};


    });
