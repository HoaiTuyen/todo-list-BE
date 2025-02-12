const { handleCreateTodo, handleGetAll } = require("../services/todoService");


const createTodo = async(req, res) => {
    
    const {title} = req.body;
    const data = await handleCreateTodo(title);
    return res.status(200).json(data);
}
const getAllTodo = async(req, res) => { 
    const data = await handleGetAll();
    return res.status(200).json(data);
}
module.exports = {createTodo, getAllTodo}