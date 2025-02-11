import { Producto } from "./evaluacion_poo";
/*Cree la clase inventario para poder agregar los productos y tener un mejor
control en las ventas */
export class inventario{
        productos: Producto []=[];
    
        addProducto(id_Pro: Producto): void {
            this.productos.push(id_Pro);
        }
    
        findProductoNombre(nombre: string): Producto | undefined {
            return this.productos.find(id_Pro => id_Pro.nombre.toLowerCase() === nombre.toLowerCase());
        }
    
        getAllProductos(): Producto[] {
            return this.productos;
        }

        ProductoDisponible(nombre: string, cantidad: number): boolean {
            const id_Pro = this.findProductoNombre(nombre);
            return id_Pro ? id_Pro.existencias >= cantidad : false;
        }
    
    }