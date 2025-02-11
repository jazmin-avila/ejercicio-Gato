import { Producto } from "./evaluacion_poo";
import { inventario } from "./inventario";

export class ventas{

    constructor(private inventario: inventario) {}

    RealizarVenta(productoNombre: string, cantidad: number): string {
        const product = this.inventario.findProductoNombre(productoNombre);
        if (!product) {
            return `Este producto ${productoNombre} no está disponible.`;
        }

        if (product.existencias < cantidad) {
            return `No hay cantidades suficientes de ${productoNombre}.`;
        }

        product.updateStock(cantidad);

        return `La venta fue exitosa ${cantidad} de ${productoNombre}.`;
    }
}
