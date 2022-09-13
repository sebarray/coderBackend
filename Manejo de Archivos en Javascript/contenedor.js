const fs = require("fs");

class Contenedor {
  constructor(name) {
    this.name = name;
  }
  async getInfo() {}

  async save(informacion) {
    try {
      let contenido = await fs.promises.readFile(`./${this.name}`, "utf-8");
      let id
      let contenidoParseado = JSON.parse(contenido).product;

      informacion.id=contenidoParseado.length+1;
      
      contenidoParseado.push(informacion);
      await fs.promises.writeFile(
        `./${this.name}`,
        JSON.stringify(contenidoParseado)
      );
      return id;
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
    try {
      let contenido = await fs.promises.readFile(`./${this.name}`, "utf-8");
      let contenidoParseado = JSON.parse(contenido);
      let contenidoArray;
      contenidoParseado.forEach((element) => {
        if (element.id === id) {
          contenidoArray = element;
        }
      });
      return contenidoArray;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    try {
      let contenido = await fs.promises.readFile(`./${this.name}`, "utf-8");
      let contenidoParseado = JSON.parse(contenido);
      return contenidoParseado;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteById(id) {
    try {
      let contenido = await fs.promises.readFile(`./${this.name}`, "utf-8");
      let contenidoParseado = JSON.parse(contenido);
      let nuevoContenido = contenidoParseado.filter(
        (element) => element.id !== id
      );
      await fs.promises.writeFile(
        `./${this.name}`,
        JSON.stringify(nuevoContenido)
      );
      return nuevoContenido;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteAll() {
    try {
      let contenido = await fs.promises.readFile(`./${this.name}`, "utf-8");
      let contenidoParseado = JSON.parse(contenido);
      await fs.promises.writeFile(`./${this.name}`, JSON.stringify([{}]));
      return console.log("contenido eliminado");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Contenedor