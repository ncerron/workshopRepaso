const Sequelize = require("sequelize");
const url = (url =
  process.env.DATABASE_URL || "postgres://localhost:5432/propiedades");
const db = new Sequelize(url, { logging: false });
class Propiedad extends Sequelize.Model {}

Propiedad.init(
  {
    name: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.INTEGER,
    },
    location: {
      type: Sequelize.STRING,
    },
    img: {
      type: Sequelize.STRING,
    },
  },
  { sequelize: db, modelName: "propiedad" }
);

module.exports = { db, Propiedad };
