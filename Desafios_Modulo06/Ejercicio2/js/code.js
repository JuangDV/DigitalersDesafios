const btnCalcular = document.getElementById("btn-calcular");

btnCalcular.onclick = function() {
    let presupuesto = document.getElementById("input-presupuesto");

    if(presupuesto.value === '' || presupuesto.value <= 0){
        return alert("Debe ingresar un valor mayor a 0");
    }

    let divPorcentaje = (presupuesto.value/100);
    
    document.getElementById("td-presupuestoPersonal").textContent = presupuesto.value;
    document.getElementById("td-gastosNecesarios").textContent = (divPorcentaje*50).toFixed(2);
    document.getElementById("td-gastosOpcionales").textContent = (divPorcentaje*30).toFixed(2);
    document.getElementById("td-ahorroInversion").textContent = (divPorcentaje*20).toFixed(2);
    presupuesto.value = '';
};