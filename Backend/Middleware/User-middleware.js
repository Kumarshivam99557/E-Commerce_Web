const jwt = require("jsonwebtoken");
const  {Collection }= require("../Models/Model")

const userMiddleware = async(req,res,next)=>{
    const token = req.header('Authorization');
    if(!token){
        return res.status(401).json({
         message:"Unauthorized HTTP,Token not provided"
        });
    }
     
     const jwtToken = token.replace("Bearer","").trim(); 
    //  console.log("token provided ni kkkk",jwtToken);
     
     try{
        const isVarified = jwt.verify(jwtToken, process.env.JWT_PRITVATE_KEY);
        // console.log(isVarified);

         const userData = await Collection.findOne({email:isVarified.email}).select({password:0})
        
        // console.log(userData);

        req.user = userData;
        req.token = token;
        req.userID = userData._id;

        

        next();
     }
     catch(err){
        return res.status(401).json({
            message:"user is not varifiedxyz",
            error:err.message,
           });
     }

}

module.exports = userMiddleware;


// in this file i got the data from databse after verification of of the token generated during login 