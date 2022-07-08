//Pedir ingresar los datos
var precioVenta = prompt("Ingrese el precio de venta");

var costoFijos = prompt("Ingrese los costos fijos");

var costosVariables = prompt("Ingrese los costos variables");

// Medir las ganancias 
var puntoEquilibrio = costoFijos / (precioVenta - costosVariables);

//Resultado
alert("El punto de equilibrio es " + puntoEquilibrio);