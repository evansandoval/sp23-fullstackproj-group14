const express = require("express");
const router = express.Router();
const ImageSchema = require("../models/Image");
const fs = require("fs")

// Read image file and convert it to binary data
const imagePath = '../test.jpg';

//
function imageToBinary(image) {
    return fs.readFileSync(image, 'base64');
}  
function binaryToBuffer(base64) {
    return Buffer.from(base64, "base64");
    
}
const binary = imageToBinary(imagePath)
const buffer = binaryToBuffer(binary)
console.log(buffer.toJSON())
fs.writeFileSync("new-image.jpg", buffer);
