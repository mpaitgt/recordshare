const cloudinary = require('cloudinary').v2;
const cloudinaryStorage = require("multer-storage-cloudinary");
const dotenv = require('dotenv').config();

const { 
  REACT_APP_CLOUDINARY_KEY, 
  REACT_APP_CLOUDINARY_SECRET, 
  REACT_APP_CLOUD_NAME 
} = process.env;

cloudinary.config({
  cloud_name: REACT_APP_CLOUD_NAME,
  api_key: REACT_APP_CLOUDINARY_KEY,
  api_secret: REACT_APP_CLOUDINARY_SECRET
});

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "demo",
  allowedFormats: ["jpg", "png", "jpeg"],
  transformation: [{ width: 500, height: 500, crop: "limit" }]
});

module.exports = cloudinary;