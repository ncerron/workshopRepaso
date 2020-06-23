const db = require("./models/Propiedades");
const { Propiedad } = require("./models/Propiedades");

const propiedades = [
  {
    name: "departamento a estrenar",
    price: 150,
    location: "retiro",
    img: "dto4.png",
  },
  {
    name: "departamento a estrenar",
    price: 120,
    location: "recoleta",
    img: "dto2.png",
  },
];

Propiedad.bulkCreate(propiedades).then(() => {
  console.log("created products");
});
