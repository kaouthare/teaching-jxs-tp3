var pokeApp = angular.module('pokedex', ['ngResource']);

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;}]);

pokeApp.controller('repeatController',
        function($scope){
            $scope.pokemon=[
                {id: 1, nom: "picachu"},
                {id:2, nom: "bulbasor"},
                {id: 3, nom: "dragon"},
                {id:4, nom: "charmandar"}
            ];

    });

var pokeApiUrl = "http://pokeapi.co/";
