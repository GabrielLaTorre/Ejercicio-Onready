const Vehiculo = require('./Vehiculo');
const { formatearNros } = require('../utils');

class Auto extends Vehiculo {
    constructor(marca, modelo, precio, puertas){
        super(marca, modelo, precio);
        this.puertas = puertas;
    }

     mostrarDatos() {
        return `Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: $${formatearNros(this.precio)}`
         }
}

module.exports = Auto;