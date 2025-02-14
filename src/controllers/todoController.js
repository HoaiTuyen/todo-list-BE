const { handleCreateTodo, handleGetAll, handleDeleteTodo, handleUpdateTodo } = require("../services/todoService");


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
const updateTodo = async(req, res) => { 
    const {id} = req.params;
    const updateData = req.body;
    
    try {
        const updateTodo = await handleUpdateTodo(id, updateData);
        if(!updateTodo) {
            return res.status(404).json("NOT FOUND");
        }
        return res.status(200).json(updateTodo);

        

    } catch (err) {
        return res.status(500).json(err);
    }
    
}

module.exports = {createTodo, getAllTodo, deleteTodo, updateTodo}