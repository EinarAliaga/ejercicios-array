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
