function add() {
	var num1 = document.getElementById('num1').value;
	num1 = parseInt(num1);
	alert('The first number is ' + num1);

	var num2 = document.getElementById('num2').value;
	num2 = parseInt(num2);
	alert('The second number is ' + num2);

	var result = num1 + num2;
	alert('The sum is '  + result);

	document.getElementById('hist').innerHTML += '<br>';
	document.getElementById('hist').innerHTML += 'You requested : ' + num1 + ' + ' + num2;
	document.getElementById('hist').innerHTML += '<br>';
	document.getElementById('hist').innerHTML += 'The result : ' + result;
	document.getElementById('hist').innerHTML += '<br>';

	document.getElementById('num1').value = result;
	document.getElementById('num2').value = '';

}

function sbtrct() {
	var num1 = document.getElementById('num1').value;
	num1 = parseInt(num1);
	alert('The first number is ' + num1);

	var num2 = document.getElementById('num2').value;
	num2 = parseInt(num2);
	alert('The second number is ' + num2);

	var result = num1 - num2;
	alert('The sum is '  + result);

	document.getElementById('hist').innerHTML += '<br>';
	document.getElementById('hist').innerHTML += 'You requested : ' + num1 + ' - ' + num2;
	document.getElementById('hist').innerHTML += '<br>';
	document.getElementById('hist').innerHTML += 'The result : ' + result;
	document.getElementById('hist').innerHTML += '<br>';

	document.getElementById('num1').value = result;
	document.getElementById('num2').value = '';

}

function mult() {
	var num1 = document.getElementById('num1').value;
	num1 = parseInt(num1);
	alert('The first number is ' + num1);

	var num2 = document.getElementById('num2').value;
	num2 = parseInt(num2);
	alert('The second number is ' + num2);

	var result = num1 * num2;
	alert('The product is '  + result);

	document.getElementById('hist').innerHTML += '<br>';
	document.getElementById('hist').innerHTML += 'You requested : ' + num1 + ' * ' + num2;
	document.getElementById('hist').innerHTML += '<br>';
	document.getElementById('hist').innerHTML += 'The result : ' + result;
	document.getElementById('hist').innerHTML += '<br>';

	document.getElementById('num1').value = result;
	document.getElementById('num2').value = '';

}

function dvde() {
	var num1 = document.getElementById('num1').value;
	num1 = parseInt(num1);
	alert('The first number is ' + num1);

	var num2 = document.getElementById('num2').value;
	num2 = parseInt(num2);
	alert('The second number is ' + num2);

	var result = num1 / num2;
	alert('The product is '  + result);

	document.getElementById('hist').innerHTML += '<br>';
	document.getElementById('hist').innerHTML += 'You requested : ' + num1 + ' / ' + num2;
	document.getElementById('hist').innerHTML += '<br>';
	document.getElementById('hist').innerHTML += 'The result : ' + result;
	document.getElementById('hist').innerHTML += '<br>';

	document.getElementById('num1').value = result;
	document.getElementById('num2').value = '';

}