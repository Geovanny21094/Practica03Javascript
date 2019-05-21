//Declaramos variables
var numero1;
var numero2;
var operacion;
var uno = 1;


function agregar() {
	//variables
	var resultado = document.getElementById('resultado');


	var retroceder = document.getElementById('retroceder');
	var masmenos = document.getElementById('masmenos');
	var raiz = document.getElementById('raiz');
	var reset1 = document.getElementById('reset1');
	var reset2 = document.getElementById('reset2');


	var siete = document.getElementById('siete');
	var ocho = document.getElementById('ocho');
	var nueve = document.getElementById('nueve');
	var division = document.getElementById('division');
	var porcentaje = document.getElementById('porcentaje');


	var cuatro = document.getElementById('cuatro');
	var cinco = document.getElementById('cinco');
	var seis = document.getElementById('seis');
	var multiplicacion = document.getElementById('multiplicacion');
	var fraccion = document.getElementById('fraccion');


	var uno = document.getElementById('uno');
	var dos = document.getElementById('dos');
	var tres = document.getElementById('tres');
	var resta = document.getElementById('resta');
	var potencia = document.getElementById('potencia');



	var cero = document.getElementById('cero');
	var coma = document.getElementById('coma');
	var suma = document.getElementById('suma');
	var igual = document.getElementById('igual');





	//eventos de click
	uno.onclick = function (e) {
		resultado.textContent = resultado.textContent + "1";
	}
	dos.onclick = function (e) {
		resultado.textContent = resultado.textContent + "2";
	}
	tres.onclick = function (e) {
		resultado.textContent = resultado.textContent + "3";
	}
	cuatro.onclick = function (e) {
		resultado.textContent = resultado.textContent + "4";
	}
	cinco.onclick = function (e) {
		resultado.textContent = resultado.textContent + "5";
	}
	seis.onclick = function (e) {
		resultado.textContent = resultado.textContent + "6";
	}
	siete.onclick = function (e) {
		resultado.textContent = resultado.textContent + "7";
	}
	ocho.onclick = function (e) {
		resultado.textContent = resultado.textContent + "8";
	}
	nueve.onclick = function (e) {
		resultado.textContent = resultado.textContent + "9";
	}
	cero.onclick = function (e) {
		resultado.textContent = resultado.textContent + "0";
	}

	coma.onclick = function (e) {
		resultado.textContent = resultado.textContent + ",";
	}

	masmenos.onclick = function (e) {
		resultado.textContent = "-" + resultado.textContent  ;
	}

	

	reset1.onclick = function (e) {
		resetear();
	}
	reset2.onclick = function (e) {
		resetear();
	}





	suma.onclick = function (e) {
		numero1 = resultado.textContent;
		operacion = "+";
		limpiar();
	}
	resta.onclick = function (e) {
		numero1 = resultado.textContent;
		operacion = "-";
		limpiar();
	}
	multiplicacion.onclick = function (e) {
		numero1 = resultado.textContent;
		operacion = "*";
		limpiar();
	}
	division.onclick = function (e) {
		numero1 = resultado.textContent;
		operacion = "/";
		limpiar();
	}

	raiz.onclick = function (e) {
		numero1 = resultado.textContent;
		operacion = "sqrt";
		
	}


	potencia.onclick = function (e) {
		numero1 = resultado.textContent;
		operacion = "sqr";
		
	}

	porcentaje.onclick = function (e) {
		res1 = resultado.textContent;
		operacion = "prct";
		
	}

	fraccion.onclick = function (e) {
		res1 = resultado.textContent;
		operacion = "fraccion";
		
	}




	igual.onclick = function (e) {
		numero2 = resultado.textContent;
		resolver();
	}
}


function limpiar() {
	resultado.textContent = "";
}

function resetear() {
	resultado.textContent = "";
	numero1 = 0;
	numero2 = 0;
	operacion = "";
}

function resolver() {
	var res = 0;
	var res1 = 0;
	switch (operacion) {
		case "+":
			res = parseFloat(numero1) + parseFloat(numero2);
			break;

		case "-":
			res = parseFloat(numero1) - parseFloat(numero2);
			break;

		case "*":
			res = (parseFloat(numero1) * parseFloat(numero2)).toFixed(3);
			break;

		case "/":
			res = (parseFloat(numero1) / parseFloat(numero2)).toFixed(3);
			break;

		case "sqrt":
			res = Math.sqrt(numero1);
			break;

			case "sqr":
			res = Math.pow(numero1,2);
			break;

			case "prct":
			res=parseFloat(numero1)*(numero2/100);
		

			break;

			case "fraccion":
			res = uno/ parseFloat(numero2);
		res1 = res.toFixed(3);

			break;




	}
	resetear();
	resultado.textContent = res;
}
