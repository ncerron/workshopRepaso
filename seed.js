const db = require("./models/Propiedades");
const { Propiedad } = require("./models/Propiedades");

const propiedades = [
  {
    name: "Departamento a estrenar",
    price: 150,
    location: "Retiro",
    img: "dto4.jpg",
  },
  {
    name: "Nuevo departamento",
    price: 120,
    location: "recoleta",
    img: "dto2.png",
  },
  {
    name: "Moderno proyecto",
    price: 120,
    location: "almagro",
    img: "dto5.png",
  },
];

Propiedad.bulkCreate(propiedades).then(() => {
  console.log("created products");
});
