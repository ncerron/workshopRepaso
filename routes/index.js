const Router = require("express").Router();
const { Propiedad } = require("../models/Propiedades");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

Router.post("/create", (req, res) => {
  Propiedad.create(req.body).then(nuevaPropiedad => res.send(nuevaPropiedad));
});

Router.get("/all", (req, res) => {
  Propiedad.findAll().then(propiedades => res.send(propiedades));
});

Router.post("/update/:id", (req, res) => {
  Propiedad.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(() => res.send("Ok, done"));
});

Router.get("/delete/:id", (req, res) => {
  Propiedad.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => res.send("Ok, done!"));
});

Router.get("/all/name", (req, res) => {
  Propiedad.findAll({
    order: [["name", "DESC"]]
  }).then(propiedades => res.send(propiedades));
});

Router.get("/all/price", (req, res) => {
  Propiedad.findAll({
    order: [["price", "DESC"]]
  }).then(propiedades => res.send(propiedades));
});

Router.get("/all/priceA", (req, res) => {
  Propiedad.findAll({
    order: [["price", "ASC"]]
  }).then(propiedades => res.send(propiedades));
});

Router.get("/all/:barrio", (req, res) => {
  const barrio = req.params.barrio;
  Propiedad.findAll({
    where: {
      location: {
        [Op.iLike]: `%${barrio}%`
      }
    }
  }).then(propiedades => res.send(propiedades));
});

module.exports = Router;
