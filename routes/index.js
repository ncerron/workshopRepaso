const Router = require("express").Router();
const { Propiedad } = require("../models/Propiedades");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const multer = require("multer");

// define multer storage configuration
const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "./public/images/properties");
  },
  filename: function(req, file, callback) {
    callback(null, `${file.originalname}`);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }
}).single("img");

Router.post("/upload", function(req, res) {
  upload(req, res, function(err) {
    if (!err) {
      return res.sendStatus(200).end();
    }
  });
});

Router.post("/create", (req, res, next) => {
  Propiedad.create(req.body)
    .then(nuevaPropiedad => res.send(nuevaPropiedad))
    .catch(err => {
      console.log(err, "error");
    });
});

Router.get("/all", (req, res) => {
  Propiedad.findAll().then(propiedades => res.send(propiedades));
});

Router.put("/update/:id", (req, res) => {
  Propiedad.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(() => {
    Propiedad.findAll({
      where: {
        id: req.params.id
      }
    }).then(propiedad => res.send(propiedad));
  });
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

Router.get("/all/nameA", (req, res) => {
  Propiedad.findAll({
    order: [["name", "ASC"]]
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

Router.get("/property/:id", (req, res) => {
  Propiedad.findAll({
    where: {
      id: req.params.id
    }
  }).then(propiedad => res.send(propiedad));
});

module.exports = Router;
