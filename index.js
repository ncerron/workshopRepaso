const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./routes");
const { db } = require("./models/Propiedades");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //

app.use(express.static(path.join(__dirname, "./public")));

const port = process.env.PORT || 3000;

app.use("/api", router);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

db.sync({ force: false })
  .then(() => {
    app.listen(port, () => console.log("Server running on port 3000"));
  })
  .catch(console.log);
