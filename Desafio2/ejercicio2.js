const ingresoTotal = Number(prompt("Ingreso la totalidad de sus ingresos:"))
const gastosNecesarios = ingresoTotal * 0.5;
const gastosOpcionales = ingresoTotal * 0.3;
const ahorrosInversion = ingresoTotal * 0.2;

document.write("Sus ingresos fueron divididos de la siguiente forma:");

document.write("<br/>Gastos necesarios: " + gastosNecesarios);

document.write("<br/>Gastos opcionales: " + gastosOpcionales);

document.write("<br/>Ahorros/Inversiones: " + ahorrosInversion);