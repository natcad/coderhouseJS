const ventana = 30000;
const metroCuadtado = 20500;
const manoObra= 10000;


function presupuestar(){
    let v = parseInt(prompt("Ingrese cantidad de ventanas"));
    let m = parseInt(prompt("Ingrese cantidad de metros cuadrados"));

    let presupuesto= v*ventana + m*metroCuadtado + manoObra*m;
    console.log(`El presupuesto para su obra es de: ${presupuesto}`);
}

presupuestar();