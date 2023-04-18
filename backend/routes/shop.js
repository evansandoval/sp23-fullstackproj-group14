const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require('../middleware/auth');

const User = require("../models/User");
router.get('/list', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id); // request user id is the json web token
        res.json(user.shoppinglist);
    } catch (e) {
      res.send({ message: 'Error in Fetching user' });
    }
});
router.post('/add', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id); // request user id is the json web token
        newList = [...user.shoppinglist]
        newList.push(req.body.item)
        await User.updateOne({"email": user.email}, {$set: {"shoppinglist": newList}})
        res.json(newList)
    } catch (e) {
        console.log(e)
      res.send({ message: 'Error in Fetching user' });
    }
});
router.delete('/delete', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id); // request user id is the json web token
        newList = [...user.shoppinglist]
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

  
module.exports = router;
  