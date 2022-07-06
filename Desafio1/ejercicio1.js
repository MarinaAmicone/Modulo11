const CostosFijos = Number(prompt("Ingrese los costos fijos:"));
const PrecioDeVenta = Number(prompt("Ingrese el precio de venta:"));
const CostosVariables = Number(prompt("Ingrese los costos variables:"));

const PuntoDeEquilibrio = CostosFijos / (PrecioDeVenta - CostosVariables);

document.write("El punto de equilibrio es " + PuntoDeEquilibrio);

