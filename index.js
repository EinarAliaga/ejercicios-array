console.log('Archivo cargado');

/**
 * .push Agrega un elemento al arreglo
 * .pop  Elimina el último elemento
 * .sort Ordena un arreglo
 * .slice Dividir un arreglo
 * .join Une los elementos del array, regresa string
 * .concat  Une arreglos y regresa uno nuevo
 *
 * Iteran el arreglo
 *
 * .map
 * .foreach
 * .sort
 * .reduce
 * .filter
 */

//callbacks //fn que se pasa como param que se van a ejecutar después

// function calculadora
function calculadora(num1, num2, call) {
  call(num1, num2);
}

calculadora(1, 2, function (num1, num2) {
  console.log(num1 + num2);
});

calculadora(1, 2, function (num1, num2) {
  console.log(num1 - num2);
});

console.log(calculadora);
