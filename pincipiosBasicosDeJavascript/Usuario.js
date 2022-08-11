class Usuario {

    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullNmae() {
        return `${this.nombre} ${this.apellido}`;
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBooks(nombre, autor) {
        this.libros.push({ nombre: nombre, autor: autor });
    }

    getBooksNames() {
        const nameBooks = [];
        let i = 0;
        for (i; i < this.libros.length; i++) {
            nameBooks.push(this.libros[i].nombre);
        }

        return nameBooks;


    }

}

module.exports = Usuario