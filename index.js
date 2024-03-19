fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Aquí puedes utilizar los datos como desees
  })
  .catch((error) => console.error('Error al cargar el archivo JSON:', error));
/**
 * .find
 * .filter
 * .map
 * .sort
 * .forEach
 */
