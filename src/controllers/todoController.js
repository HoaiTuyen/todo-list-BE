const { handleCreateTodo, handleGetAll, handleDeleteTodo } = require("../services/todoService");


const createTodo = async(req, res) => {
    
    const {title} = req.body;
    const data = await handleCreateTodo(title);
    return res.status(200).json(data);
}
const getAllTodo = async(req, res) => { 
    const data = await handleGetAll();
    return res.status(200).json(data);
}
const deleteTodo = async(req, res) => { 
   const {id} = req.params;
    const data = await handleDeleteTodo(id);
    return res.status(200).json("DELETE SUCCESS")
}

module.exports = {createTodo, getAllTodo, deleteTodo}