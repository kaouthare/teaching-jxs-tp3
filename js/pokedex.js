var pokeApp = angular.module('pokedex', ['ngResource']);

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;}]);

pokeApp.controller('repeatController',
        function($scope, $log, $http, $resource){
            $scope.pokemon=[
                {id: 1, nom: "picachu"},
                {id:2, nom: "bulbasor"},
                {id: 3, nom: "dragon"},
                {id:4, nom: "charmandar"}
            ];
            $scope.log = $log;
            //$scope.pokemonSelected="blastoise";
            $http.get("http://pokeapi.co/api/v1/pokedex/1").then(function(response){
                $scope.pokemonSite=response.data.pokemon;
            });
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


var pokeApiUrl = "http://pokeapi.co/";


