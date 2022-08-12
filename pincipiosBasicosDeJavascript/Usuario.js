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
        return this.libros.map((e)=>{return e.nombre})


    }

}

module.exports = Usuario