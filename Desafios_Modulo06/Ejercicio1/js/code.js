const btnCalcular = document.getElementById("btn-calcular");

btnCalcular.onclick = function() {
    let precioDeVenta = document.getElementById("precioDeVenta").value;
    let costosFijos = document.getElementById("costosFijos").value;
    let costosVariables = document.getElementById("costosVariables").value;

    if(precioDeVenta === '' || costosFijos === '' || costosVariables === '') return;

    let puntoDeEquilibrio = (costosFijos/(precioDeVenta-costosVariables));
    alert("Su punto de equilibrio es: " + puntoDeEquilibrio);
};

//
// Probar solamente el codigo JS
//

/*
function calcularPuntoDeEquilibrio(){
    let costosFijos = parseFloat(prompt("Indicar numericamente los Costos Fijos"));
    let precioDeVenta = parseFloat(prompt("Indicar numericamente el Precio de Venta"));
    let costosVariables = parseFloat(prompt("Indicar numericamente los Costos Variables"));

    if(isNaN(costosFijos) || isNaN(precioDeVenta) === NaN || isNaN(costosVariables)) {
        return alert("Ingresar los datos solicitados");
    };

    let puntoDeEquilibrio = (costosFijos/(precioDeVenta-costosVariables));

    console.log(costosFijos, precioDeVenta, costosVariables);
    alert("Su punto de equilibrio es: " + puntoDeEquilibrio);
}

calcularPuntoDeEquilibrio();
*/