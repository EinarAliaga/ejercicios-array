const contenedor = document.getElementById('contenedor');

let productos = [];

fetch('data.json')
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    productos = data;
  });

//Pide un [productos] y los muestra en el DOM
const mostrarProductos = (productos) => {
  /**
   * [productos] -> [divs]
   * mostrar los divs de productos
   */

  contenedor.innerHTML = '';

  const productosDiv = productos.map((producto, productoIndex) => {
    const productoDiv = document.createElement('div');
    productoDiv.classList.add('producto');

    const index = document.createElement('p');
    index.textContent = 'No.' + (productoIndex + 1);
    productoDiv.appendChild(index);

    const nombreP = document.createElement('p');
    nombreP.textContent = producto.product_name;
    productoDiv.appendChild(nombreP);

    const precioP = document.createElement('p');
    precioP.textContent = producto.price;
    productoDiv.appendChild(precioP);

    const stockP = document.createElement('p');
    stockP.textContent = producto.quantity_in_stock;
    productoDiv.appendChild(stockP);

    const fabricanteP = document.createElement('p');
    fabricanteP.textContent = producto.manufacturer;
    productoDiv.appendChild(fabricanteP);

    const categoriaP = document.createElement('p');
    categoriaP.textContent = producto.category;
    productoDiv.appendChild(categoriaP);

    return productoDiv;
  });

  productosDiv.forEach((element) => {
    contenedor.appendChild(element);
  });
};

//Pide un [string] y los muestra en el DOM
const mostrarStrings = (strings) => {
  //Borrar contenido de contenedor
  contenedor.innerHTML = '';

  //[string] -> [div]
  const stringDivs = strings.map((cadena) => {
    const stringDiv = document.createElement('div');
    stringDiv.textContent = cadena;
    return stringDiv;
  });

  //agregar todos los divs al contenedor
  stringDivs.forEach((stringDiv) => {
    contenedor.appendChild(stringDiv);
  });
};

const ejercicio1 = () => {
  contenedor.innerHTML = '';

  //usar las fn de array
  productos.sort((a, b) => {
    if (a.price < b.price) {
      return 1;
    } else if (b.price < a.price) {
      return -1;
    } else {
      return 0;
    }
  });

  const top10 = productos.slice(0, 10);

  // [productos] -> [<div class="producto"></div>]
  mostrarProductos(top10);
};

const ejercicio2 = () => {
  contenedor.innerHTML = '';

  // [productos] -> [categorias]
  const categoriasArreglo = productos.map((product) => {
    return product.category;
  });

  const categoriasFiltradas = categoriasArreglo.filter((categoria, index) => {
    return categoriasArreglo.indexOf(categoria) == index;
  });

  //[string] -> [divs]
  mostrarStrings(categoriasFiltradas);
};

const ejercicio3 = () => {
  //filtrar productos stock < 100]
  const productosFiltrados = productos.filter((producto) => {
    return producto.quantity_in_stock < 100;
  });

  //sort  menor a mayor precio
  productosFiltrados.sort((productoA, productoB) => {
    return productoA.price - productoB.price;
  });

  //[productosOrdenados] -> [divs]
  mostrarProductos(productosFiltrados);
};

const ejercicio4 = () => {
  //top 5 productos más caros
  productos.sort((productoA, productoB) => {
    return productoB.price - productoA.price;
  });

  const top5 = productos.slice(0, 5);

  //[productos] -> [strings MAYUS]
  //manufacturer -> mayus

  const fabricantes = top5.map((producto) => {
    return producto.manufacturer.toUpperCase();
  });

  //[string] -> [divs]
  mostrarStrings(fabricantes);
};

const ejercicio5 = () => {
  //Precio promedio de los productos
  //[productos] -> number

  //calcular suma
  const suma = productos.reduce((acu, producto) => {
    return acu + producto.price;
  }, 0);

  //dividir entre longitud de arreglo
  const promedio = suma / productos.length;

  //mostrarlo en el DOM

  contenedor.innerHTML = '';

  const promedioP = document.createElement('p');
  promedioP.textContent = 'Promedio: ' + promedio.toFixed(2);

  contenedor.appendChild(promedioP);
};

const ejercicio1Button = document.getElementById('ejercicio1');
ejercicio1Button.addEventListener('click', ejercicio1);

const ejercicio2Button = document.getElementById('ejercicio2');
ejercicio2Button.addEventListener('click', ejercicio2);

const ejercicio3Button = document.getElementById('ejercicio3');
ejercicio3Button.addEventListener('click', ejercicio3);

const ejercicio4Button = document.getElementById('ejercicio4');
ejercicio4Button.addEventListener('click', ejercicio4);

const ejercicio5Button = document.getElementById('ejercicio5');
ejercicio5Button.addEventListener('click', ejercicio5);
