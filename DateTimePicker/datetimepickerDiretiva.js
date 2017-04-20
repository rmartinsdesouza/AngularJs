/*
* Para utilizar o date time picker no angular, é necessário ter o moment, moment-develop, bdatepicker, bootstrap e essa diretiva.
* Para começar utilizar, basta usar essa diretiva:
*/

var app = angular.module('MyApp', []);

app.directive('bsdatepickerValida', function() {
  return {
      restrict: 'AE',
      require: 'ngModel',
      link: function(scope,element,attrs,ctrl){
      	
      	  element.datetimepicker({locale: 'pt-br', format: 'DD/MM/YYYY HH:mm:ss'}).on("dp.change", function (e) {

      		  var data= $('#'+attrs.id).val();
			
			      ctrl.$setViewValue(data);
			

          });

      }
  };
  
});;

/*
* Feito a diretiva, na página onde será utilizado o date time picker, basta chamar o moment e o moment-develop, da seguinte maneira
*
* <script src="moment/moment.js"></script>
* <script src="moment/momentlocale.js"></script>
* <script src="moment-develop/locale/pt-br.js"></script>
*
* Depois disso, basta chamar o css e o js do bdatepicker
*
* <link rel="stylesheet" type="text/css" href="bdatepicker/build/css/bootstrap-datetimepicker.css">
* <script src='bdatepicker/src/js/bootstrap-datetimepicker.js'></script>
*
* Agora simplesmente chame a diretiva (no meu caso, criei uma pasta dentro do angular, com o nome de diretivas):
*
* <script src='angular/diretivas/datepickerDiretiva.js'></script>
*
* Em seu input você fará a seguinte maneira:
*
* <input
*
*   bsdatepicker-valida
*   class="form-control datepicker"
*
* />
*
* Depois disso, estará funcionando normalmente!
*
*/
