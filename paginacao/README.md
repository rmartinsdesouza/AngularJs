![CSCore Logo](http://hop.ie/talks/angular-intro/images/angularjs.jpeg)

# Fazer paginação com Angular #

### Lembrando que é necessário já estar com o angular js em sua página.
---
## Para a criação, é necessário usar a paginacao.js:

- [COLABORADORES DA PAGINAÇÃO]
---
## No seu controlador angular app.js, você fará o seguinte:
```sh
var app = angular.module("MyApp", ['angularUtils.directives.dirPagination']);

app.controller("listagemControlador", function($scope, $http, $timeout){

    $scope.dados = [];
    $scope.totalporpagina = "";
    
    $scope.$watch('dados', function() {

		$http.get("dados.json").success(function(response){

			$scope.dados = response;

			$scope.totalporpagina = (response.length)/2;

		});

     });


    $scope.ordenacao = function( nomeordenar ){

        $scope.sortKey = nomeordenar;
        $scope.reverse = !$scope.reverse;

    };

});
```
---
## Em seu HTML basta fazer a seguinte maneira:
```sh
<!DOCTYPE html>
<html ng-app="MyApp">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Teste páginação</title>
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
</head>
<body>

	<div class="container" ng-controller="listagemControlador">

		<div class="row">

			<div class="col-lg-12" style="margin-top: 20px;">
				
				<form action="form-inline">
					
					<input type="text" class="form-control" placeholder="Digite sua busca..." ng-model="busca">

				</form>

				<table class="table">
					
					<thead>
						
						<tr>
							
							<th ng-click="ordenacao('id')">Id</th>

							<th ng-click="ordenacao('nome')">Nome</th>

							<th ng-click="ordenacao('email')">E-mail</th>

							<th ng-click="ordenacao('telefone')">Telefone</th>

							<th ng-click="ordenacao('empresa')">Empresa</th>

						</tr>

					</thead>

					<tbody>
						
						<tr dir-paginate="dado in dados | filter:busca | orderBy:sortKey:reverse | itemsPerPage:totalporpagina">

							<th ng-bind="dado.id"></th>

							<th ng-bind="dado.nome"></th>

							<th ng-bind="dado.email"></th>

							<th ng-bind="dado.telefone"></th>

							<th ng-bind="dado.empresa"></th>

						</tr>

					</tbody>

				</table>

				<div class="row">
					
					<div class="col-lg-12">
					
						<dir-pagination-controls

							max-size="5"
							boundary-links="true"
							direction-links="true"
							auto-hide="true"
							template-url="template.html"

						></dir-pagination-controls>

					</div>

				</div>

			</div>
			
		</div>

	</div>


	<script src="angular/angular.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	<script src="paginacao.js"></script>
	<script src="app.js"></script>

</body>
</html>
```

* Lembrando que é necessário ter um array com os dados ao qual irá rodar no ng-repeat

### API de diretrizes
```
<ANY
	dir-paginate="expression | itemsPerPage: (int|expression) [: paginationId (string literal)]"
	[current-page=""]
	[pagination-id=""]
	[total-items=""]>
	...
</ANY>

dir-paginate
```
**expressão**: Sob o capô, esta diretiva delega a diretiva ng-repeat, então a sintaxe para a expressão é exatamente como você esperaria. Veja os documentos ng-repeat para o resumo completo. Isso significa que você também pode usar qualquer tipo de filtros que você gosta, etc.

**itemsPerPage**: A expressão deve incluir esse filtro. É exigido pela lógica de paginação. A sintaxe é igual a qualquer filtro: itemsPerPage: 10, ou você também pode vinculá-lo a uma propriedade do $ scope: itemsPerPage: pageSize. Nota: Este filtro deve vir após qualquer outro filtro para funcionar como esperado. Uma regra segura é sempre colocá-lo no final da expressão. O paginationId do terceiro argumento opcional é usado quando você precisa de mais de uma instância de paginação independente em uma página. Veja a seção abaixo sobre a configuração de múltiplas instâncias.

**current-page**: (Opcional) Especifique uma propriedade no escopo $ do seu controlador que será vinculado à página atual da paginação. Se isso não for especificado, a diretiva criará automaticamente uma propriedade chamada __default__currentPage e usará isso em vez disso.

**pagination-id**: (Opcional) Usado para agrupar a diretiva dir-paginate com um correspondente-paginação-controles quando você precisa de mais de uma instância de paginação por página. Veja a seção abaixo sobre a configuração de múltiplas instâncias.

**total-items**: Ao trabalhar com dados assíncronos (ou seja, dados que são paginados no servidor e enviados uma página de cada vez para o cliente), você enviaria apenas uma página de resultados e, em seguida, alguns meta-dados contendo o número total de resultados. Nesse caso, a diretriz de paginação pensaria que sua página de resultado era o conjunto de dados completo e, portanto, nenhuma paginação era necessária. Para evitar o comportamento padrão, você precisa especificar o atributo de itens totais, que será usado para calcular a paginação. Para obter mais informações, consulte a seção sobre como trabalhar com dados assíncronos abaixo.

```
<dir-pagination-controls

    [max-size=""]
    [direction-links=""]
    [boundary-links=""]
    [on-page-change=""]
    [pagination-id=""]
    [template-url=""]
    [auto-hide=""]
    
>
    
</dir-pagination-controls>

dir-pagination-controls
```
**max-size**: (Opcional, padrão = 9) Especifique um número máximo de links de paginação a serem exibidos. O padrão é 9 e o mínimo é 5 (definir um valor inferior a 5 não terá efeito).

**direction-links**: (optional, default = true) Specify whether to display the "forwards" & "backwards" arrows in the pagination.

**boundary-links**: (optional, default = false) Specify whether to display the "start" & "end" arrows in the pagination.

**on-page-change**: (Opcional, padrão = nulo) Especifique um método de retorno de chamada para executar cada vez que um dos links de paginação é clicado. O método será passado os argumentos opcionais newPageNumber e oldPageNumber, que são inteiros iguais ao número da página que acabou de ser navegado e o que acabou de sair, respectivamente. Observe que você deve usar esse nome de argumento exato em sua exibição, ou seja, <dir-pagination-controls on-page-change = "myMethod (newPageNumber, oldPageNumber)"> e o método que você especificar deve ser definido no $scope do seu controlador .

**pagination-id**: (Opcional) Usado para agrupar o dir-pagination-controls com um correspondente dir-paginate quando você precisa de mais de uma instância de paginação por página. Veja a seção abaixo sobre a configuração de múltiplas instâncias.

**template-url**: (Opcional, padrão = diretivas / paginação / dirPagination.tpl.html) Especifica o modelo a ser usado.

**auto-hide**: (Opcional, padrão = verdadeiro) Especifique se os controles de paginação dir devem estar ocultos quando não há elementos suficientes para paginar.

* Tradução não está 100% correta!

[COLABORADORES DA PAGINAÇÃO]: <https://github.com/michaelbromley/angularUtils/tree/master/src/directives/pagination>
