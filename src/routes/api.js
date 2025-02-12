const express = require('express');
const { createUser, loginUser } = require('../controllers/userControllers');

const routerAPI = express.Router();


routerAPI.post("/register", createUser);
routerAPI.post("/login", loginUser);
routerAPI.get("/", (req, res) => {
    return res.status(200).json({ message: 'OK' });
})

module.exports = routerAPI;