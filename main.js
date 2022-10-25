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

    addMascotas(nombreDeMascota){
        this.mascotas.push(nombreDeMascota);
    }

    countMascotas(){     
            console.log(`La cantidad de mascotas son: ${this.mascotas.length}`);        
    }

    addBook(libros, autorLibro){
        this.libros.push([{nombre:libros, autor:autorLibro}]);
    }

    getBookName(){
        const nombreDeLibros = this.libros.map(libro => libro.nombreLibro)
        console.log(`Libros: ${nombreDeLibros}`);
        const nombreAutor = this.libros.map(libro=>libro.autor)
        console.log(`Autor: ${nombreAutor}`);
    }

}

const user1 = new User('Facundo', 'Laugle', [{nombreLibro: 'El hobbit', autor: 'JRR Tolkin'}], ['mora', 'india']);

user1.getFullName();
user1.addMascotas();
user1.countMascotas();
user1.addBook();
user1.getBookName();

console.log(user1);
