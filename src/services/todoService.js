const Todo = require("../models/Todo")


const handleCreateTodo = async(title) => {
    console.log(title);
    
    let result = await Todo.create({
        title: title
    })
    return result;
}
const handleGetAll = async() => { 
    const todos = await Todo.find();
    return todos;
}
module.exports = {
    handleCreateTodo, handleGetAll
}