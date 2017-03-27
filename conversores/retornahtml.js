angular.module( "MyApp", [] ).controller("MyApp_CTRL", ["$scope", "$sce", function($scope, $sce){

    //Função que retorna o html
    $scope.renderizaHtml = function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    };
    
    $scope.teste = "<h1>Olá mundo!</h1>";

}]);

/*
Para chamar no html, basta fazer da seguinte maneira:

<div ng-bind-html="renderizaHtml(teste)">

</div>

*/
