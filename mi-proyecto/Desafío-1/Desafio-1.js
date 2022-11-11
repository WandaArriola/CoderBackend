
/*class User {
    constructor(nombre, apellido, libros = [], mascotas = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }
    addMascotas(nombre) {
        this.mascotas.push(nombre)
    }
    countMascotas() {
        return `${this.getFullName()} tiene ${this.mascotas.length} Mascotas`
    }
    addBook(nombre, autor) {
        let book = { nombre: nombre, autor: autor }
        return this.libros.push(book)
    }
    countBooks() {
        return `${this.libros.length}`
    }
    getBookNames() {
        let bookNames = this.libros.map((libro) => {
            return libro.nombre
        })
        return `Los libros de ${this.getFullName()} son ${this.countBooks()}: ${bookNames}`
    }
}

const usuario01 = new User("Carla", "Nosara")

usuario01.addMascotas("Chipa")
usuario01.addMascotas("Barto")
usuario01.addMascotas("Aldo")

usuario01.addBook("Hercules", "Wanda Daniela")
usuario01.addBook("Tarzan", "Melisa Arriola")
console.log(usuario01)
console.log(usuario01.countMascotas());
console.log(usuario01.getBookNames());*/