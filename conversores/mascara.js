horsys.filter('Moeda', function(){

	return function( valor, locale ){

		// Converte a string do valor para float
		valor = parseFloat(valor);

		console.log(locale);

		/*
		* /(?=(?:...)*$)/
		* ?= Vai capturar o espaço seguido da expressão após o =
		* ?: Define toda a expressão dentro dos parênteses em um grupo de não captura
		* ... Qualquer caractere 3 vezes
		* *$ Repetindo várias vezes no final da string
		*/

		switch( locale ){

			case "pt-br":

				//Pega o número e fixa ele com 2 casas decimais e separa a string em um array de 2 partes
				var numero = valor.toFixed(2).split('.');

		    	numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');

		    	return numero.join(',');

		    break;

		    case "en-gb":

		    	//Pega o número e fixa ele com 2 casas decimais e separa a string em um array de 2 partes
				var numero = valor.toFixed(2).split('.');

		    	numero[0] = "\u00a3 " + numero[0].split(/(?=(?:...)*$)/).join(',');

		    	return numero.join('.');

		    break;

		    case "es-bo":

		    	//Pega o número e fixa ele com 2 casas decimais e separa a string em um array de 2 partes
				var numero = valor.toFixed(2).split('.');

		    	numero[0] = "Bs " + numero[0].split(/(?=(?:...)*$)/).join('.');

		    	return numero.join(',');

		    break;

    	}

	}

});
