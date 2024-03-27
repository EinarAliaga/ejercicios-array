/**
 * Crear un clase
 * Aprender a usar las clases
 */

/**
 * Reglas para nombrar clases:
 * 1.- CamelCase
 * 2.- Singular
 */

//funciones dentro de una clase se llaman métodos
class Persona {
  constructor(nombre, apellidos, edad) {
    //Una funcion que deben tener todas las clases
    //Sirven para crear una instancia nueva de la clase
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
  }

  datosCompletos() {
    // console.log('Nombre completo: ' + this.nombre + ' ' + this.apellidos);
    console.log(`
        Nombre completo: ${this.nombre} ${this.apellidos}
        Edad: ${this.edad}
    `);
  }

  cumplirAños() {
    this.edad++;
  }
}

/**
 * Cosas necesarias para hacer una clase
 * 1.- Nombre
 * 2.- Propiedades de la clase
 * 3.- Comportamiento
 */

class Rectangle {
  /**
   * base
   * height
   */
  /**
   * calcArea
   */
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }

  calcArea() {
    return this.base * this.height;
  }
}

class Circle {
  constructor(radio) {
    this.radio = radio;
  }

  calcArea() {
    return Math.PI * this.radio ** 2;
  }
}

// class Car {
//   constructor(model, plate, brand, doors, seats) {
//     this.model = model;
//     this.plate = plate;
//     this.brand = brand;
//     this.doors = doors;
//     this.seats = seats;
//   }

//   getInfo() {
//     console.log(`
//         Modelo: ${this.model}
//         Placa: ${this.plate}
//         Marca: ${this.brand}
//         No. Puertas: ${this.doors}
//         No. Asientos ${this.seats}
//     `);
//   }
// }

// class Motorcycle {
//   /**
//    * brand
//    * model
//    * color
//    * plate
//    */
//   constructor(brand, model, color, plate) {
//     this.brand = brand;
//     this.model = model;
//     this.color = color;
//     this.plate = plate;
//   }

//   getInfo() {
//     console.log(`
//         Marca: ${this.brand}
//         Modelo: ${this.model}
//         Color: ${this.color}
//         Placa: ${this.plate}
//     `);
//   }
// }

class Vehicle {
  constructor(model, brand, plate) {
    this.model = model;
    this.brand = brand;
    this.plate = plate;
  }

  getInfo() {
    console.log(`
        Info del vehículo:
            Modelo: ${this.model}
            Marca: ${this.brand}
            Placa: ${this.plate}
    `);
  }
}

class Car extends Vehicle {
  constructor(model, brand, plate, doors, seats) {
    super(model, brand, plate);
    this.doors = doors;
    this.seats = seats;
  }
}

class Motorcycle extends Vehicle {
  constructor(model, brand, plate, track) {
    super(model, brand, plate);
    this.track = track;
  }

  getInfo() {
    super.getInfo();
    console.log(`
        Datos de moto:
            Rodada: ${this.track}
    `);
  }
}
