![CSCore Logo](http://hop.ie/talks/angular-intro/images/angularjs.jpeg)

# Renderizando HTML no textarea #

### Lembrando que é necessário já estar com o angular js em sua página.
---
## É importante você criar uma diretiva, ficando assim:
```sh
var app = angular.module( "MyApp", [] );

app.directive("contenteditable", function() {
  return {
    restrict: "A",
    require: "ngModel",
    link: function(scope, element, attrs, ngModel) {

      function read() {
        ngModel.$setViewValue(element.html());
      }

      ngModel.$render = function() {
        element.html(ngModel.$viewValue || "");
      };

      element.bind("blur keyup change", function() {
        scope.$apply(read);
      });
    }
  };
});
```
---
## No seu HTML basta você colocar:
```sh
<body ng-app="MyApp">

  <div contenteditable ng-model="texto">
  </div>

</body>
```
---
Com esse código já é possível estar utilizando!

* É possível personalizar o contenteditable no css, como por exemplo:
```sh
[contenteditable] {
  border: 2px dotted #ccc;
  background-color: #eee;
  padding: 2px;
}
```
