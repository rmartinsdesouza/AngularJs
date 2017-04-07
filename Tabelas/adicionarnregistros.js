/*
* Como adicionar N registros com angular + php.
* Vamos adicionar varios emails!
* Primeiramente no seu controlador, faço o seguinte:
*/
angular.module("MyApp").controller("MyApp_ctrl", ["$scope", function(){

    //Metodo que adiciona a primeira linha
    $scope.$watch('totalcampos', function(val) {
        if (val) {
            $scope.counter = new Number(val);
        }
    });
    
    
    
    /*
    * Metodo que adiciona a linha, quando clica no botão.
    * Você pode estar fazendo um switch para aproveitar para mais coisas futuramente.
    */
    $scope.adicionaLinha = function( tipo ) {

			switch( tipo ){

				case 'email':

						if( $scope.counter<=4 ){
			 
							$scope.counter++;

							$scope.adm.emails.push( {"tipoemail":"","email":""} );

						}

					break;

			}

	}
    
    
    
    /*
    * Metodo que remove a linha adicionada
    * Esse pode deixar o switch para futuramente reaproveitar
    */
    $scope.removeLinha = function(tipo, linha){

		switch(tipo){

			case 'email':

					$scope.emails.splice( linha, 1 );
					$scope.counter --;

				break;

		}

	};
    
    
}]);

/*
* Com o js pronto, podemos ir no html e no php.
*
* Vamos estar adicionando um botão que adiciona as linhas, esse botão ficará desabilitado quando tiver 5 linhas.
*
* <button type="button" ng-disabled="counter == 5" ng-click="adicionaLinha( 'email' )">Adicionar</button>
*
* Vamos adicionar a div onde ficara nossos inputs, e essa mesmo irá se repetir:
*
* <form action="#" name="form_email" id="form_email">
*
*   <div ng-repeat="linha in emails">
*
*       <input required type="text" name="form_email_{{$index}}" id="form_email_{{$index}}" ng-model="$parent.emails[$index].tipoemail" ng-init="$parent.emails[$index].tipoemail = $parent.emails[$index].tipoemail" />
*
*       <input required type="text" name="form_email_{{$index}}" id="form_email_{{$index}}" ng-model="$parent.emails[$index].email" ng-init="$parent.emails[$index].email = $parent.emails[$index].email" />
*
*   </div>
*
*   <div>
*
*       <button type="button" ng-hide="counter == 1" ng-click="removeLinha('email', $index)">Remover</button>
*
*   </div>
*
* <form>
*
* Agora no php, basta colocar:
*
* <?php
*
*   $aux=1;
*   $linhas= '[{ "tipoemail":"","email": ""}]';
*
* ?>
*
* Adiciona dois inputs:
* <input type="hidden" ng-init='emails=<?php echo $linhas; ?>' ng-model="campos">
* <input type="hidden" ng-init="totalcampos='<?php echo $aux; ?>'" ng-model="totalcampos">
*
* Com isso, o adicionar linha já estará funcionando, adicionando e removendo.
*/
