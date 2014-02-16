'use strict';

angular.module('moviesApp')
    .controller('MainCtrl', function($scope, $firebase, $location) {

        var moviesRef = new Firebase('https://mymovies.firebaseio.com/movies');

        // Automatically syncs everywhere in realtime
        $scope.movies = $firebase(moviesRef);
        //$scope.movies.$add({title: 'Youpi2'});


        function httpGet(theUrl) {
            var xmlHttp = null;

            xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", theUrl, false);
            xmlHttp.send(null);
            return xmlHttp.responseText;
        };

        function getFromTitle(title) {
            var omdbData = httpGet("http://www.omdbapi.com/?s=" + title);
            var omdbJSON = eval("(" + omdbData + ")");
            return omdbJSON;
        }

        function getFromId(id) {
            var omdbData = httpGet("http://www.omdbapi.com/?i=" + id);
            var omdbJSON = eval("(" + omdbData + ")");
            return omdbJSON;
        }

        $scope.$watch('title', function() {
            if($scope.title===undefined) return;
            $scope.searchResults = getFromTitle($scope.title);
            $scope.movieDetail = null;
        });

        $scope.searchById = function(id) {
            $scope.movieId = id;
            $scope.movieDetail = getFromId(id);
        };

        $scope.addMovie = function(id) {
            $location.path('/addmovie/' + id);
        };

    });
