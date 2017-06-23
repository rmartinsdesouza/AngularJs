/*
* Muitas vezes é necessário saber qual é o tipo de objeto que estamos trabalhando, e isse filter irá ajudar muito!
*/
angular.module("MyApp", []).filter('tipoobj', function(){

    return function(input){

        return typeof(input);

    }

});

/*
* Para utilizado no html basta fazer o seguinte:
* {{obj | tipoobj}}
*
* Os retornos dessa função pode ser: number, string, boolean, object, function e undefined.
*/
