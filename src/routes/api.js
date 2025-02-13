const express = require('express');
const { createUser, loginUser } = require('../controllers/userControllers');
const {createTodo, getAllTodo} = require('../controllers/todoController');
const auth = require('../middleWare/auth');

const routerAPI = express.Router();

routerAPI.all("*", auth)
routerAPI.post("/register", createUser);
routerAPI.post("/login", loginUser);
routerAPI.post("/add_todos", createTodo);
routerAPI.get("/todos", getAllTodo);
routerAPI.get("/", (req, res) => {
    return res.status(200).json({ message: 'OK' });
})

module.exports = routerAPI;