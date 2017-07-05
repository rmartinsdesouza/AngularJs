![CSCore Logo](http://hop.ie/talks/angular-intro/images/angularjs.jpeg)

# ColorPicker com Angular #

### Lembrando que é necessário já estar com o angular js em sua página.
---
## Para a criação, é necessário usar o plugin abaixo:

- [COLABORADORES DO COLORPICKER]
---
## No seu controlador angular app.js, você fará o seguinte:
```sh
var app = angular.module("MyApp", ['colorpicker']);
```
---
## Em seu HTML basta fazer a seguinte maneira:
```sh
<!DOCTYPE html>
<html ng-app="MyApp">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Teste ColorPicker</title>
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/color-picker.min.css">
</head>
<body>

	<div class="container">

		<div class="row">

			<div class="col-lg-6" style="margin-top: 20px;">
      
				<input

				    type="text"
				    class="form-control mar-bot15"
				    ng-model="site.corsite"
				    color-picker
				    color-picker-model="site.corsite"
				    ng-style="{background: site.corsite}"

				>

			</div>
			
		</div>

	</div>


	<script src="angular/angular.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	<script src="js/color-picker.min.js"></script>
	<script src="app.js"></script>

</body>
</html>
```

[COLABORADORES DO COLORPICKER]: <https://github.com/Alberplz/angular-colorpicker-directive>
