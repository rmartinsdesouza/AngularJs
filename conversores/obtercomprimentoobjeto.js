/*
* Para obter o comprimento do objeto em angularjs.
*/
angular.module("MyApp", []).filter('objLength', function(){

    return function (object){
    
        var count = 0;
        
        for( var i in object ){
        
            count++;
        
        }
        
        return count;
    
    }

});

/*
* Para utilizar o filter basta fazer o seguinte no html:
* {{objeto[Chave] | objLength}}
*/
