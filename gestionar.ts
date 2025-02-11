import { Producto } from "./evaluacion_poo";
import { inventario } from "./inventario";
/*Se creo la clases de gestion en la que almacenamos la informacion del inventario
sobre los productos */
export class gestion {
    public static Inventario: inventario = new inventario();

    static iniciaInventario(): void {
        const Producto1 = new Producto(1, "Crayones", "Crayola", 70, 10);
        const Producto2 = new Producto(2, "Plumones", "Iforu", 120, 20);
        const Producto3 = new Producto(3, "Lapiz Adhesivo", "Pritt", 15, 50);

        this.Inventario.addProducto(Producto1);
        this.Inventario.addProducto(Producto2);
        this.Inventario.addProducto(Producto3);
    }
}