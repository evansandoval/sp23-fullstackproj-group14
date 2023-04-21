const express = require("express");
const router = express.Router();
const ImageSchema = require("../models/Image");
const fs = require("fs")

// Read image file and convert it to binary data
const imagePath = '../test.jpg';

//takes an image path and converts it to base64
//For frontend ppl -- need to figure this out
function imageToBinary(image) {
    return fs.readFileSync(image, 'base64');
}  
function binaryToBuffer(base64) {
    return Buffer.from(base64, "base64");
    
}
const binary = imageToBinary(imagePath)
const buffer = binaryToBuffer(binary)

fs.writeFileSync("new-image.jpg", buffer);
