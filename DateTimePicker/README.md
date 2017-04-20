![CSCore Logo](http://hop.ie/talks/angular-intro/images/angularjs.jpeg)

# Utilizando o Date Time Picker no angular #

### Lembrando que é necessário já estar com o angular js em sua página.
---
## Para a utilização do Date Time Picker é necessário ter os seguintes plugins:

- Moment
- Moment-develop
- Bdatepicker
- Bootstrap
- E a diretiva que iremos criar
---
## Criando a diretiva do Date Time Picker!
```sh
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
```
---
Feito isso, basta chamar em sua página o moment, moment-develop e o css e js do bdatepicker.
```sh
<link rel="stylesheet" type="text/css" href="bdatepicker/build/css/bootstrap-datetimepicker.css">

<script src="moment/moment.js"></script>
<script src="moment/momentlocale.js"></script>
<script src="moment-develop/locale/pt-br.js"></script>
<script src='bdatepicker/src/js/bootstrap-datetimepicker.js'></script>
```
---
E por fim basta chamar a diretiva criada, no meu caso eu criei dentro da basta do angular uma pasta com o nome de diretiva e nela esta a nossa direta.
```sh
<script src='angular/diretivas/datepickerDiretiva.js'></script>
```
---
Agora para estar utilizando o mesmo, basta fazer da seguinte maneira em seu input:
```sh
<input

  bsdatepicker-valida
  class="form-control datepicker"
  placeholder="Data e hora"

/>
```
