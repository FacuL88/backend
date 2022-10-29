class User {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        console.log(`El nombre completo es: ${this.nombre}, ${this.apellido}`);
    }

    addMascotas(nombreDeMascotas){
        this.mascotas.push(nombreDeMascotas);
    }

    countMascotas(){     
            console.log(`La cantidad de mascotas son: ${this.mascotas.length}`);        
    }

    addBook(nombreDeLibros){
        this.libros.push(nombreDeLibros);
    }

    getBookName(){
        const newArray = this.libros.map(element => {
            console.log(element);
        })

        /* return newArray; */
    }

}

const nombreDeLibros = [{nombreLibro: 'El hobbit', nombreAutor: 'JRR Tolkien'}]
const nombreDeMascotas = ['mora', 'india'];

const user1 = new User('Facundo', 'Laugle', nombreDeLibros, nombreDeMascotas);

user1.getFullName();
user1.addMascotas();
user1.countMascotas();
user1.addBook();
user1.getBookName();

console.log(user1);