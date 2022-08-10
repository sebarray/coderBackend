
class Usuario{

    constructor(nombre, apellido,libros, mascotas){
        this.nombre=nombre
        this.apellido=apellido
        this.libros=libros
        this.mascotas=mascotas
    }

    getFullNmae(){
        return `${this.nombre} ${this.apellido}`
    }
    
    countMascotas(){
        return  this.mascotas.length
    }

    addBooks(nombre, autor){
        this.libros.push({nombre:nombre, autor: autor})
    }

    getBooksNames(){
        const nameBooks=[]
        let i=0
        for ( i; i< this.libros.length; i++){
       nameBooks.push( this.libros[i].nombre)
    }

    return nameBooks;
    

    }

}



const user= new Usuario("juan", "saenz",[],["pulgas", "oreo"])
console.log(user.getFullNmae())
console.log(`cantidad de mascots ${user.countMascotas()}`)
user.addBooks("c", "dennise ritchie")
user.addBooks("vigilancia permanente", "edward snowden")
console.log(user.getBooksNames())

