/*
* Nos campos inputs por exemplo, é necessário que a informação seja salva em uma variavel do angular ( Exemplo: ng-init ou ng-model ).
* É declarada uma variavel qualquer, no caso abaixo é "dados", ai é passado todos os dados que o php ou outra linguagem irá recuperar.
*/
var dados = {
    nomecliente: $scope.nomecliente,
    cpfcliente : $scope.cpfcliente
};

//Realiza a chamada, utilizando $http
$http.post('CAMINHODOLINK', dados,{timeout:10000}).success(function(data,status,headers,config){
    
    /*
    * Se a chamada por um sucesso, toda a programação irá aqui!
    * Obs: Em "data" vem todas as informações.
    */
    
	//console.log(data);

}).error(function(data,status,header,config){

    /*
    * Se a chamada por um sucesso, toda a programação irá aqui!
    */

	//console.log(status);

});
