var monto = prompt("Ingrese un monto: ");

var gNecesario = monto * 0.5;
var gOpcionales = monto * 0.3;
var ahorro = monto * 0.2;

alert(
    "La division de gastos: \n"+
    "Gastos necesarios: $"+gNecesario + "\n" +
    "Gastos opcionales: $"+gOpcionales + "\n"+
    "Ahorro e inversión: $"+ahorro
);