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