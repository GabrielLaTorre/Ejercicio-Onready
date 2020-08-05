const Vehiculo = require('./Vehiculo');
const { formatearNros } = require('../utils');

class Moto extends Vehiculo {
    constructor(marca, modelo, precio, cilindradas){
        super(marca, modelo, precio);
        this.cilindradas = cilindradas;
    }
    mostrarDatos() {
        return `Marca: ${this.marca} // Modelo: ${this.modelo} // Cilindradas: ${this.cilindradas} // Precio: $${formatearNros(this.precio)}`
    }
}

module.exports = Moto;