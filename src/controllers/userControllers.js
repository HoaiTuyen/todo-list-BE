const { createUserServices, loginUserService } = require("../services/createUserServices");


const createUser = async (req, res) => { 
    const {name, email, password} = req.body;
    const data = await createUserServices(name, email, password);
    return res.status(200).json(data);
}
const loginUser = async(req, res) => {
   const {email, password} = req.body;
   const data = await loginUserService(email, password);
    return res.status(200).json(data);
}
const getAccount = async(req, res) => {
    return res.status(200).json(req.user)
}   
module.exports = {
    createUser, loginUser, getAccount
}