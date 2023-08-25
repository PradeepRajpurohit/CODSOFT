const JWT = require('jsonwebtoken');
const JWT_Secret = 'job4u3000';

const fetchuser = (req,res,next) =>{
    const token = req.header('auth-token');
    if(!token){
        return res.status(401).send({error:"Please authonticate using valid token"})
    }
    try {
        const data = JWT.verify(token,JWT_Secret);
        console.log(data)
        req.company = data.company; 
        next()
    } catch (error) {
        res.status(401).send({error:"Please authonticate using valid token"})   
    }
}

module.exports = fetchuser;