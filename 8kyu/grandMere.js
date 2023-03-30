function dividirCuenta(cuenta){
    const impuesto = 1.3;
    let cuantaConImpuesto;
    let quintaParte;
    cuantaConImpuesto = cuenta * impuesto;
    console.log(cuantaConImpuesto);
    quintaParte = cuantaConImpuesto/5
    console.log(quintaParte);
    let total = Number.parseFloat(quintaParte).toFixed(2);
    return total
}

console.log(dividirCuenta(20));

