const jwt = require('jsonwebtoken');

module.exports = generateToken = (id)=>{
    //generate token
    return jwt.sign({id:id},process.env.JWT_SECRET,{expiresIn:"1d"})

}