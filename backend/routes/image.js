const express = require("express");
const router = express.Router();
const fs = require("fs");
const auth = require('../middleware/auth');
// Read image file and convert it to binary data
// const imagePath = '../test.jpg';

//takes an image path and converts it to base64
//For frontend ppl -- need to figure this out
function imageToBinary(image) {
    return fs.readFileSync(image, 'base64');
}  
function binaryToBuffer(base64) {
    return Buffer.from(base64, "base64");
    
}

const User = require("../models/User");
router.get('/list', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id); // request user id is the json web token
        res.json(user.designs);
    } catch (e) {
      res.send({ message: 'Error in Fetching user' });
    }
});
router.post('/add-image', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id); // request user id is the json web token
        newList = [...user.designs]
        image = req.body.file
        console.log(image)
        newList.push(imageToBinary(image))
        console.log(image)
        await User.updateOne({"email": user.email}, {$set: {"designs": newList}})
        res.json(newList)
    } catch (e) {
        console.log(e)
      res.send({ message: 'Error in Fetching user' });
    }
});
router.delete('/delete', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id); // request user id is the json web token
        newList = [...user.designs]
        const index = newList.indexOf(req.body.item);
        if (index > -1) {
            newList.splice(index, 1)
        }
        await User.updateOne({"email": user.email}, {$set: {"shoppinglist": newList}})
        res.json(newList)
    } catch (e) {
        console.log(e)
      res.send({ message: 'Error in Fetching user' });
    }
});
