const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/propiedades");
class Propiedad extends Sequelize.Model {}

Propiedad.init(
  {
    name: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.INTEGER
    },
    location: {
      type: Sequelize.STRING
    },
    img: {
      type: Sequelize.STRING
    }
  },
  { sequelize: db, modelName: "propiedad" }
);

module.exports = { db, Propiedad };
