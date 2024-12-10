function calcularPrestamo() {
    let monto 
    while (true) {
        monto = parseFloat(prompt("Ingrese el monto del préstamo:"));
        if (monto > 0) {
            break; 
        } else {
            alert("El monto debe ser un número positivo. Inténtelo nuevamente.");
        }
    }

    let cuotas 
    while (true) {
        cuotas = parseInt(prompt("Ingrese la cantidad de cuotas (3, 6 o 12):"));
        if (cuotas === 3 || cuotas === 6 || cuotas === 12) {
            break;  
        } else {
            alert("La cantidad de cuotas debe ser 3, 6 o 12. Inténtelo nuevamente.");
        }
    }

    let interes = 0;
    if (cuotas === 3) {
        interes = 0.15; 
    } else if (cuotas === 6) {
        interes = 0.40; 
    } else if (cuotas === 12) {
        interes = 0.70; 
    }

    let montoTotal = monto + (monto * interes);

    let cuota = montoTotal / cuotas;

    alert(`Monto total con intereses: ${montoTotal.toFixed(2)}\nValor de cada cuota: ${cuota.toFixed(2)}`);
}


calcularPrestamo();
