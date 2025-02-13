const jwt = require('jsonwebtoken');
require("dotenv").config();
const auth = (req, res, next) => {
    const public = ["/", "/login", "/register"];
    if(public.includes(req.path)) {
        next();
    } else {
        if(req?.headers?.authorization) {
            const token = req.headers.authorization.split(' ')[1];
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET)
                req.user = {
                    email: decoded.email,
                    name: decoded.name
                }
                next();

            } catch(e) {
                return res.status(401).json({
                    message: "Un Authorization"
                })
            }
        } else {
            return res.status(401).json({
                message: "Un Authorization"
            })
        }
    }
     

}
module.exports = auth