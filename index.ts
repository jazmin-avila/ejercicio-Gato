import { Producto } from './evaluacion_poo';
import { inventario } from './inventario';
import { gestion } from './gestionar';
import { ventas } from './operacion_venta';

/* Se incializa el inventario con los productos agregados, con la clase gestion*/
gestion.iniciaInventario();

const venta = new ventas(gestion.Inventario);


console.log('Inventario inicial:');
console.log(gestion.Inventario.getAllProductos());


console.log('\nSe realiza una venta:');
console.log(venta.RealizarVenta('Crayones', 4));
console.log('\nInventario después de la venta:');
console.log(gestion.Inventario.getAllProductos());


console.log('\nIntentando realizar una venta con más unidades de las disponibles:');
console.log(venta.RealizarVenta('Plumones', 30));

/* Realizar aumento de 10 unidades para las ventas en el producto Plumones */
console.log('\nAumentando ventas del producto "Plumones" en 10 unidades:');
const Plumones = gestion.Inventario.findProductoNombre('Plumones');
if (Plumones) {
    Plumones.updateStock(10);
}
console.log(gestion.Inventario.getAllProductos());

/* Consultar inventario después del aumento */
console.log('\nInventario después del aumento incrementado:');
console.log(gestion.Inventario.getAllProductos());
