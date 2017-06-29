var app = angular.module("MyApp", ['angularUtils.directives.dirPagination']);

app.controller("listagemControlador", function($scope, $http, $timeout){

    $scope.dados = [];
    $scope.totalporpagina = "";

    $http.get("dados.json").success(function(response){

        $scope.dados = response;

        $scope.totalporpagina = (response.length)/2;

    });


    $scope.ordenacao = function( nomeordenar ){

        $scope.sortKey = nomeordenar;
        $scope.reverse = !$scope.reverse;

    };

});