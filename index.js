console.log('Hola mundo');

//Botones
const createButton = document.getElementById('createButton');
const deleteButton = document.getElementById('deleteButton');
//eventos
//1er param string de evento
createButton.addEventListener('click', () => {
  console.log('Click');
});

//Crear etiqueta <p>
const parrafo = document.createElement('p');
//Agrego texto a mi etiqueta p
parrafo.textContent = 'Texto dentro del párrafo';

//Buscar div con id contenedor
const contenedor = document.getElementById('contenedor');

//Dentro del div contenedor metí parrafo <p>
contenedor.appendChild(parrafo);

//borrar contendor
contenedor.remove();

console.log(parrafo);
