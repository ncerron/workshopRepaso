const db = require("./models/Propiedades");
const { Propiedad } = require("./models/Propiedades");

const propiedades = [
  {
    name: "departamento a estrenar",
    price: 150,
    location: "belgrano",
    img: "dto1.png"
  },
  {
    name: "departamento a estrenar",
    price: 120,
    location: "almagro",
    img: "dto2.png"
  }
];

Propiedad.bulkCreate(propiedades).then(() => {
  console.log("created products");
});
