const contenedor = require('./contenedor')
const fs = require("fs");



 const content= new contenedor("productos.json")

const milk={
    title: 'Escuadra',                                                                                                                                 
    price: 123.45,                                                                                                                                     
    thumbnail: 'https://image.shutterstock.com/image-vector/milk-cartoon-vector-illustration-hand-260nw-740660731.jpg',                                     
    id: 1                                                                                                                                              
  }

  let informacionNueva = {
    id: "1",
    name: "Gorra Blanca",
    price: 1000.0,
  };
  
  content.save(informacionNueva).then((res) => console.log(res));

 


