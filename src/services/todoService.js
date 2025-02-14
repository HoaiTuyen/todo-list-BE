const Todo = require("../models/Todo")


const handleCreateTodo = async(title) => {
   
    
    let result = await Todo.create({
        title: title
    })
    return result;
}
const handleGetAll = async() => { 
    const todos = await Todo.find();
    return todos;
}
const handleDeleteTodo = async(id) => { 
    const result = await Todo.findByIdAndDelete(id);
    return result;
}
const handleUpdateTodo = async(id, title) => { 
    const todo = await Todo.findByIdAndUpdate(id, title);
    return todo;
}
module.exports = {
    handleCreateTodo, handleGetAll, handleDeleteTodo, handleUpdateTodo
}