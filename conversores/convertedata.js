//Função que converte data para pt-BR
angular.module("MyApp", []).filter('dataparaISO', function() {
  return function(input) {
    input = new Date(input).toISOString();
    return input;
  };
});

/*
* Para chamar essa função é necessário fazer o seguinte:
* {{dataquequeroconverter | dataparaISO | date:'dd/MM/yyyy HH:mm:ss'}}
*/
