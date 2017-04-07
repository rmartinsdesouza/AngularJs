/*
* É necessário que você baixe todos os arquivos no seguinte link: https://github.com/CrackerakiUA/ui-cropper
* Nesse link você estará encontrando todas as informações de como estar utilizando.
* Adiciona o ui-cropper-master/compile/minified/ui-cropper.js no seu script html.
* Depois de baixado você irá no seu controlador principal e deixará da seguinte maneira:
*/

angular.module( "MyApp", ["uiCropper"] ).controller( "MyApp_ctrl", ["$scope", function(){

    $scope.imagemcrop = "";
    $scope.minhaimagem = "";
    
    $scope.blockingObject = {block:true};
		$scope.callTestFuntion = function(){
		$scope.blockingObject.render(function(dataURL){
		console.log('via render');
		console.log(dataURL.length);
		});
	}

	$scope.blockingObject.callback=function(dataURL){
		console.log('via function');
		console.log(dataURL.length);
	}


	var handleFileSelect=function(evt) {
		var file=evt.currentTarget.files[0];
		var reader = new FileReader();
		reader.onload = function (evt) {
			$scope.$apply(function($scope){
				$scope.myImage=evt.target.result;
			});
		};
		reader.readAsDataURL(file);
	};
	angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);

}]);

/*
* Com esse código já é possível estar utilizando o JCrop, agora no HTML você fará assim:
*
* Adiciona um input para conseguir subir as imagens, adicionadando o id fileInput.
* <input type="file" id="fileInput" accept="image/*" class="hidden" />
*
* Depois pode estar colocando um botão para recortar a imagem:
* <button type="button" ng-click="callTestFuntion()">Cortar</button>
*
* Em seguida adiciona uma div com a classe cropArea e dentro dela a imagem que você subiu, no caso estaremos cortando a imagem para 120 x 120:
* <div class="cropArea">
*   <ui-cropper image="minhaimagem" area-type="rectangle" result-image="imagemcrop" live-view="blockingObject" result-image-size="120" area-init-size="{w:120,h:120}" aspect-ratio="1"></ui-cropper>
* </div>
*
* Depois disso, basta colocar um img para exibir a imagem recortada:
* <img class="img-responsive img-thumbnail" />
*/
