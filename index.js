const {cargarVehiculos} = require('./utils');

const mostrarVehiculos = (arr) => {
    arr.forEach(element => {
        console.log(element.mostrarDatos());
    });
    console.log('=============================');
}

mostrarVehiculos(cargarVehiculos());