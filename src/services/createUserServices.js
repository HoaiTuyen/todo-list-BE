require("dotenv").config();
const jwt = require("jsonwebtoken")
const User = require("../models/User")
const bcrypt = require('bcrypt');
const saltRounds = 10;
const  createUserServices = async (name, email, password) => {
    try {
        const checkEmailExist = await User.findOne({email});
        if(checkEmailExist) {
            console.log("Email Exist");
            return null;
            
        }
        const hashPass = await bcrypt.hash(password, saltRounds);
        let result = await User.create({
            name: name,
            email: email,
            password: hashPass,
            role: "DEV Tuyen"
        })
        return result;
    } catch(error) {
        console.log(error);
        return null;
        
    }
}
const loginUserService = async (email, password) => {
    try {
        const  checkEmail = await User.findOne({email});
    if(checkEmail) {
        const isMatchPass = await bcrypt.compare(password, checkEmail.password);
        if(!isMatchPass) {
            return {
                EC: 2,
                EM: "Email/Password không hợp lệ"
            }
        } else {
            const payload = {
                email: checkEmail.email,
                name: checkEmail.name
            }
            const access_token = jwt.sign(
                payload,
                process.env.JWT_SECRET,
                {
                    expiresIn: "1d"
                }
            )
            return {
                EC: 0,
                access_token,
                user: {
                    name: checkEmail.name,
                    email: checkEmail.email
                }
            }
        }
    } else {
        return {
            EC: 1,
            EM: "Email/Password không hợp lệ"
        }
    }
    } catch(error) {
        console.log(error);
        return null;
    }
    
}

module.exports = {
    createUserServices, loginUserService
}