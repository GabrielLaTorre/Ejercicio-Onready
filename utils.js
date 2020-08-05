const Auto = require('./clases.js/Auto');
const Moto = require('./clases.js/Moto');

module.exports = {
    cargarVehiculos: function() {
        const vehiculo1 = new Auto('Peugeot', '206', 200000, 4);
        const vehiculo2 = new Moto('Honda', 'Titan', 60000, 125);
        const vehiculo3 = new Auto('Peugeot', '208', 250000, 5);
        const vehiculo4 = new Moto('Yamaha', 'YBR', 80500.50, 160);
    
        return [vehiculo1, vehiculo2, vehiculo3, vehiculo4];
    },

    formatearNros: function(nro) {
        if(Number.isInteger(nro)) {
            const totalNro = new Intl.NumberFormat("de-DE", {minimumFractionDigits: 2}).format(nro);
            const totalStr = totalNro.replace(/[,.]/g, function (m) {
                return m === ',' ? '.' : ',';
            });
            return totalStr;
        } else {
            const totalNro = new Intl.NumberFormat("de-DE", {minimumFractionDigits: 2}).format(nro)
            const totalStr = totalNro.replace(/[,.]/g, function (m) {
                return m === ',' ? '.' : ',';
            });
            return totalStr;
        }
    }
}
