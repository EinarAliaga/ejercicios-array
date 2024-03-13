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
 * .foreach ✅
 * .sort
 * .reduce
 * .filter
 * .map
 */

//0  1  2  3  4  5  6  7  8
const nums = [4, 3, 7, 6, 3, 2, 1, 8, 9];

//foreach callback (value, index, array)
// nums.forEach((value, index, array) => {
//   console.log('indice:', index, 'valor:', value, 'array:', array);
// });

console.log(nums);

//sort   callback
nums.sort((a, b) => {
  // x < 0 < x

  /**
   * a antes que b regresar   < 0
   * b antes que a regresar   > 0
   * a y b son iguals regresar 0
   */
  if (a < b) {
    return 1;
  } else if (b < a) {
    return -1;
  } else {
    return 0;
  }
});

console.log(nums);
