/*
* Chamada via GET
*/

$http({
	method : "GET",
	url : 'LINKCOMASINFORMACOESVIA'
}).then(function mySucces(response) {

		/*
    * Chamada deu certo, toda programação será aqui.
    * Em "response" exite o "data", colocando "response.data" o mesmo retornará todas as informações
    */

}, function myError(response) {

	/*
  * Caso a chamada dê algum erro, toda informação do erro derá que ser programado aqui.
  */

});

/*
Para recuperar o get no php, basta usar:

$dadospost = file_get_contents( "php://input" );
$requisicao = json_decode( $dadospost );
*/
