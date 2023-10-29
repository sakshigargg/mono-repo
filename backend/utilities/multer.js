const multer = require("multer");

// Define the storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads'); // Define the destination directory
  },
  filename: function (req, file, cb) {
    const dotIndex = file.originalname.lastIndexOf(".");
    const extension = file.originalname.substring(dotIndex);
    console.log("extension", extension);
    if (extension === ".csv") {
      cb(null, `${new Date().toISOString()}-${file.originalname}`); // Valid CSV file, save with its original name
    } else {
      // Invalid file, pass an error to the callback
      cb(new Error("Invalid Request, Not a csv formatted file"));
    }
  },
});

// Initialize Multer with the storage configuration
const upload = multer({ storage: storage }).single("inputFile");

module.exports = { upload };
