const mostrarVehiculos = (arr) => {
    let infoStr = '';
    arr.forEach(element => {
        infoStr += `${element.mostrarDatos()}\n`
    });
    return `${infoStr}\n=============================\n`;
}

const ordernarMayoraMenor = (arr) => {
    const mayoraMenor = [...arr].sort( (a,b) => b.precio - a.precio);
    return mayoraMenor;
}

const contieneLetraY = (arr) => {
    const contieneY = arr.find(element => element.modelo.includes('Y'));
    return contieneY;
}

const calcularMasCaro = (arr) => {
    const arrPrecios = arr.map((element) => element.precio)
    const mayorPrecio = arrPrecios.sort( (a,b) => a - b)[arrPrecios.length - 1];
    const masCaro = arr.find(element => element.precio == mayorPrecio);
    return masCaro;
}

const calcularMasBarato = (arr) => {
    const arrPrecios = arr.map((element) => element.precio)
    const [menorPrecio] = arrPrecios.sort( (a,b) => a - b);
    const masBarato = arr.find(element => element.precio == menorPrecio);
    return masBarato;
}

    
    const formatearNros = (nro) => {
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

    const mostrarOrdenados = (arr) => {
        const masCaro = calcularMasCaro(arr);
        const masBarato = calcularMasBarato(arr);
        const contieneY = contieneLetraY(arr);
        return `\nVehículo más caro: ${masCaro.marca} ${masCaro.modelo}\nVehículo más barato: ${masBarato.marca} ${masBarato.modelo}\nVehículo que contiene en el modelo la letra \`\Y´: ${contieneY.marca} ${contieneY.modelo} $${formatearNros(contieneY.precio)}\n`
    }

    const mostrarMayoraMenor = (arr) => {
        const arrOrdenado = ordernarMayoraMenor(arr);
        let listaStr = '';
        arrOrdenado.forEach(element => {
            listaStr += `${element.marca} ${element.modelo}\n`
        })
        return `\n============================= \nVehículos ordenados por precio de mayor a menor:\n${listaStr}`
    }

    const mostrarInfoTotal = (arr) => {
       console.log(
           mostrarVehiculos(arr),
           mostrarOrdenados(arr),
           mostrarMayoraMenor(arr)
       )
    }

    module.exports = {
        formatearNros,
        mostrarInfoTotal
    };