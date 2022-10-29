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
        const newArray = this.libros.map(element =>  element.nombreLibro)
        return console.log(newArray)        
    }

}

const user1 = new User('Facundo', 'Laugle', [{nombreLibro: 'El hobbit', nombreAutor: 'JRR Tolkien'}], ['mora', 'india']);

user1.getFullName();
user1.addMascotas('patan');
user1.countMascotas();
user1.addBook({nombreLibro: 'El Principito', nombreAutor:'Fulano'});
user1.getBookName();

console.log(user1);