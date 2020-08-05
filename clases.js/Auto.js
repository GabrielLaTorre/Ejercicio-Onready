const Utils = require('../utils');
const Vehiculo = require('./Vehiculo');

class Auto extends Vehiculo {
    constructor(marca, modelo, precio, puertas){
        super(marca, modelo, precio);
        this.puertas = puertas;
    }

    mostrarDatos() {
        return `Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: $${Utils.formatearNros(this.precio)}`
    }
}

module.exports = Auto;