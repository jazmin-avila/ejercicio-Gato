class Gato {
    nombre: string;
    sexo: string;
    color: string;
    textura: string;

    constructor(nombre: string, sexo: string, color: string, textura: string) {
        this.nombre = nombre;
        this.sexo = sexo;
        this.color = color;
        this.textura = textura;
    }

    mostrarInformacion(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Textura: ${this.textura}`);
    }
}

const gato1 = new Gato("Felix", "Macho", "Naranja", "Suave");

gato1.mostrarInformacion();
