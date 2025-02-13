const express = require('express');
const { createUser, loginUser, getAccount } = require('../controllers/userControllers');
const {createTodo, getAllTodo, deleteTodo} = require('../controllers/todoController');
const auth = require('../middleWare/auth');
const delay = require('../middleWare/delay');
const routerAPI = express.Router();

routerAPI.all("*", auth)
routerAPI.post("/register", createUser);
routerAPI.post("/login", loginUser);
routerAPI.post("/add_todos", createTodo);
routerAPI.get("/todos", getAllTodo);
routerAPI.get("/account", getAccount);
routerAPI.delete("/deleteTodo/:id", deleteTodo);
routerAPI.get("/", delay, (req, res) => {
    return res.status(200).json({ message: 'OK' });
})

module.exports = routerAPI;