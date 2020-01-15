const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/propiedades");
class Propiedad extends Sequelize.Model {}

Propiedad.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    location: {
      type: Sequelize.STRING,
      allowNull: false
    },
    img: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  { sequelize: db, modelName: "propiedad" }
);

module.exports = { db, Propiedad };
