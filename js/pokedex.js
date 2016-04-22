var pokeApp = angular.module('pokedex', ['ngResource']);

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;}]);

 var pokeApiUrl = "http://pokeapi.co/";
pokeApp.factory('searchPokemon', function($resource){
    return $resource("http://pokeapi.co/api/v2/pokemon-species/:id/", {id:'@id'});

});

pokeApp.controller('repeatController',
        function($scope, $log, $http, $resource,searchPokemon){
            /*$scope.pokemon=[
                {id: 1, nom: "picachu"},
                {id:2, nom: "bulbasor"},
                {id: 3, nom: "dragon"},
                {id:4, nom: "charmandar"}
            ];

            //$scope.pokemonSelected="blastoise";
            $http.get("http://pokeapi.co/api/v1/pokedex/1").then(function(response){
                $scope.pokemonSite=response.data.pokemon;
            });*/
            $scope.log = $log;
             $http({
                    method: 'GET',
                    url: 'http://pokeapi.co/api/v2/pokedex/1/'
                }).then(function successCallback(response) {
                    //console.log(response.data)
                    $scope.pokemonSite = response.data.pokemon_entries;
                });
                $scope.go = function(idpoke){
                    $scope.pokemonObj = searchPokemon.get({id:idpoke});
                }
            /*
            var Pokemons= $resource('http://pokeapi.co/api/v1/type/:id/');
            Pokemons.get({id:2}, function(pokemon){
                $log.info(pokemon);
                $scope.typepok= pokemon.weakness;
            })
*/


    }).controller('infosPokemon', function($scope, $resource,$log){

            var Pokemons = $resource('http://pokeapi.co/api/v1/type/:id/');
            Pokemons.get({id:3}, function(pokemon){
                $log.info(pokemon);
                $scope.idpoke= pokemon.id;
                $scope.nompoke= pokemon.name;
                $scope.typepoks= pokemon.weakness;
            })
});

var test ;



