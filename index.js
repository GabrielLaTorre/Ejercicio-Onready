const Auto = require('./clases/Auto');
const Moto = require('./clases/Moto');
const { mostrarInfoTotal } = require('./utils');

const cargarVehiculos = () => {
    const vehiculo1 = new Auto('Peugeot', '206', 200000, 4);
    const vehiculo2 = new Moto('Honda', 'Titan', 60000, 125);
    const vehiculo3 = new Auto('Peugeot', '208', 250000, 5);
    const vehiculo4 = new Moto('Yamaha', 'YBR', 80500.50, 160);
    
    return [vehiculo1, vehiculo2, vehiculo3, vehiculo4];
}

const vehiculosArr = cargarVehiculos();

mostrarInfoTotal(vehiculosArr);

