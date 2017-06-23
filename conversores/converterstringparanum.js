/*
* Caso você deseja realizar alguma soma e o numero esta vindo como string, este filter irá ajudar e muito!
*/
angular.module("MyApp", []).filter('num', function(){

    return function (input) {
    
        return parseInt(input, 10);
    
    }

});

/*
* Para utilizar o filter no HTML basta colocar o seguinte:
* {{total | num}}
*/
