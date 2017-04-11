/*
* Para utilizar o Typeahead angular, é necesário que você tenha o UI-Bootstrap, para começar a utilizar basta chamar o mesmo.
* No exemplo estarei retornando o nome do administrador.
* Veja o exemplo abaixo!
* Observação importante: Estou utilizando o PHP!
*/

angular.module("MyApp", ['ngAnimate', 'ui.bootstrap']).controller("MyApp_ctrl", ['$scope','$http', '$timeout', function($scope, $http, $timeout){

    /*
    * Criamos um método que fará a busca e retornará no typeahead
    */
    $scope.getLocation = function(val) {

		//Acessa o controlador
        return $http.get(caminho+"/administradores/autocompletar/ajax/requisicaoajax/buscaadm/"+val).then(function(response){

			//console.log(response.data);
			return response.data.map(function(item){

				//console.log(item);
				return item;

			});
		
		});
	};
    /*
    * #Criamos um método que fará a busca e retornará no typeahead
    */
    
    
    
    //---------------------------------------------------------------------------------------------------
    
    
    
    /*
    * Envia o formulário ao clicar no nome
    */
    $scope.enviaform = function(){

		$timeout( function(){
			
			document.getElementById("form_adm").submit();

		}, 500 );

	}
    /*
    * #Envia o formulário ao clicar no nome
    */

}]);

/*
* Feito tudo isso, está na hora de mexermos no HTML
*/

/*
* <form action="#" name="form_adm" id="form_adm" method="post" autocomplete="off">
*
*   <input
*
*       placeholder="Digite sua busca..."
*       class="form-control"
*       type="text"
*       name="form_adm_busca"
*       id="form_adm_busca"
*       ng-model="form_adm_busca"
*       ng-init="form_adm_busca='<?php echo $_POST['form_adm_busca']; ?>'"
*       uib-typeahead="administrador as administrador.strAdminNome for administrador in getLocation($viewValue)"
*       typeahead-template-url="customTemplate.html"
*       typeahead-show-hint="true"
*       typeahead-min-length="3"
*       style="position: relative; vertical-align: top; background-color: transparent;"
*       typeahead-loading="loadingLocations"
*       typeahead-no-results="noResults"
*       typeahead-on-select="enviaform()"
*
*   >
*
* </form>
*/

/*
* Além disso, é necessário utilizar um script e um css
*/

/*
* <script type="text/ng-template" id="customTemplate.html">
*
*   <a href="#">
*
*       <span ng-bind-html="match.label | uibTypeaheadHighlight:query"></span>
*
*   </>
*
* </script>
*
* <style>
*
*   .typeahead-demo .custom-popup-wrapper {position: absolute; top: 100%; left: 0; z-index: 1000; display: none; background-color: #f9f9f9;}
*   .typeahead-demo .custom-popup-wrapper > .message {padding: 10px 20px; border-bottom: 1px solid #ddd; color: #868686;}
*   .typeahead-demo .custom-popup-wrapper > .dropdown-menu{position: static; float: none; display: block; min-width: 160px; background-color: transparent; border: none; border-radius: 0; box-shadow: none;}
*   .cssFade {transition: 0.5s linear all; opacity: 1;}
*   .cssFade.ng-hide {opacity: 0;}
*
* </style>
*/
