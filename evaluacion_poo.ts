/*Esta clase la genere para poder agregar los datos en los productos
como es su id para identeficarlos, nombre y su marca*/
export class  Producto{
    id_Pro: number;
    nombre: string;
    marca: string;
    precio: number;
    existencias: number;

    constructor(id_Pro: number, nombre: string, marca: string, precio:number, existencias:number) {
        this.id_Pro = id_Pro;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.existencias = existencias;
        
    }
    updateStock(CantidadVendida: number): void {
        this.existencias -= CantidadVendida;
    }
}



