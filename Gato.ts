class Gato {
    nombre: string;
    sexo: string;
    age:number;
    weight:number;
    color: string;
    textura: string;

    constructor(nombre: string, sexo: string, age:number, weight:number, color: string, textura: string) {
        this.nombre = nombre;
        this.sexo = sexo;
        this.age = age;
        this.weight = weight;
        this.color = color;
        this.textura = textura;
    }

    mostrarInformacion(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`age: ${this.sexo}`);
        console.log(`weight: ${this.sexo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Textura: ${this.textura}`);
    }
}

const gato1 = new Gato("Oscar", "Macho", 3, 7, "Marron", "Rayada");
const gato2 = new Gato("Luna", "Hembra", 2, 5, "Gris", "Lisa");

gato1.mostrarInformacion();
