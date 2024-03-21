const contenedor = document.getElementById('contenedor');

let productos = [];

fetch('data.json')
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    productos = data;
  });

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
  const productosDiv = top10.map((producto, productoIndex) => {
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

const ejercicio2 = () => {
  // [productos] -> [categorias]
  const categoriasArreglo = productos.map((product) => {
    return product.category;
  });

  const categoriasFiltradas = categoriasArreglo.filter((categoria, index) => {
    return categoriasArreglo.indexOf(categoria) == index;
  });

  //[categorías] -> [divs]
  const categoriaDivs = categoriasFiltradas.map((categoria) => {
    const categoriaDiv = document.createElement('div');
    categoriaDiv.textContent = categoria;
    return categoriaDiv;
  });

  categoriaDivs.forEach((categoriaDiv) => {
    contenedor.appendChild(categoriaDiv);
  });
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
  const productosDiv = productosFiltrados.map((producto) => {
    const div = document.createElement();
    return;
  });
};

const ejercicio1Button = document.getElementById('ejercicio1');
ejercicio1Button.addEventListener('click', ejercicio1);

const ejercicio2Button = document.getElementById('ejercicio2');
ejercicio2Button.addEventListener('click', ejercicio2);

const ejercicio3Button = document.getElementById('ejercicio3');
ejercicio3Button.addEventListener('click', ejercicio3);
