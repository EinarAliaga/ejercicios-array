console.log('Archivo cargado');

/**
 * .push Agrega un elemento al arreglo
 * .pop  Elimina el último elemento
 * .sort Ordena un arreglo
 * .slice Dividir un arreglo
 * .join Une los elementos del array, regresa string
 * .concat  Une arreglos y regresa uno nuevo
 * .indexOf Regresa el primer index del elemento a buscar
 *
 * Iteran el arreglo
 *
 * .foreach ✅ ejecuta un callback(fn) por cada elemento -> void
 * .sort ✅ agrupa en 2 y ejecuta callback por cada elementi si retornamo -1, 0 ó  1 cambia el orden -> regresa el arreglo ordenado
 * .reduce ✅ ejecuta un callback por cada elemento y lleva un acarreado por cada iteración, se le puede pasar un valor inicial -> regresa el último return
 * .filter ✅  ejecuta un callback por cada elemento el cual debe retornar true o false, regresa un nuevo arreglo con los valores que hayan retornado true
 * .map  ✅ ejecuta un callback por cada elemento y en el return regresa la nueva forma del elemento iterado
 */

//*********************************************************** */
//0  1  2  3  4  5  6  7  8
const nums = [4, 3, 7, 6, 3, 2, 1, 8, 9];

//foreach callback (value, index, array)
// const resultado = nums.forEach((value, index, array) => {
//   console.log('indice:', index, 'valor:', value, 'array:', array);
// });

// console.log(resultado);
//********************************************************************** */

// //sort   callback
// const a = nums.sort((a, b) => {
//   /**
//    * a antes que b regresar   < 0
//    * b antes que a regresar   > 0
//    * a y b son iguals regresar 0
//    */
//   return a - b;
// });

// console.log(a);

//********************************************************** */

//reduce
// const resultado = nums.reduce((prev, current) => {
//   return prev * current;
// }, 1);

// console.log(resultado);

//Filter

// const resultado = nums.filter((value) => {
//   //regresar un booleano
//   /**
//    * true cumple el filtro
//    * false si no cumple el filtro
//    */
//   return value > 5;
// });

// const resultado2 = nums.filter((value) => {
//   return 0 != 0;
// });

// const result = nums.map((value) => {
//   return value * 2;
// });

// const result2 = nums.map((value) => {
//   return value + 1;
// });

// console.log(nums);

// console.log(result2);
