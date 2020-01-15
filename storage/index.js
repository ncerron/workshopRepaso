const multer = require("multer");

// define multer storage configuration
const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "./public/images/properties");
  },
  filename: function(req, file, callback) {
    console.log(req.file);
    callback(null, `${file.fieldname} -  ${Date.now()}`);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }
}).single("myImage");

module.exports = upload;
