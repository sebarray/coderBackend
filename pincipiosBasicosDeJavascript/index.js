const Usuario = require('./Usuario')
const user= new Usuario("juan", "saenz",[],["pulgas", "oreo"])
console.log(user.getFullNmae())
console.log(`cantidad de mascots ${user.countMascotas()}`)
user.addBooks("c", "dennise ritchie")
user.addBooks("vigilancia permanente", "edward snowden")
console.log(user.getBooksNames())

