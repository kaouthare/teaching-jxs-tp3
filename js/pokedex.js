var pokeApp = angular.module('pokedex', ['ngResource']);

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;}]);

pokeApp.controller('repeatController',
        function($scope,$log,$http){
            $scope.pokemon=[
                {id: 1, nom: "picachu"},
                {id:2, nom: "bulbasor"},
                {id: 3, nom: "dragon"},
                {id:4, nom: "charmandar"}
            ];
            $scope.log = $log;
            $scope.pokemonSelected="blastoise";
            $http.get("http://www.pokeapi.co/api/v1/pokedex/1/").then(function(response){
                $scope.pokemonSite=response.data.pokemon;
            });


    });


var pokeApiUrl = "http://pokeapi.co/";
