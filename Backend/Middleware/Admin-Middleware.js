const adminMiddleware = async(req,res,next)=>{
    try{
        console.log(req.user.isAdmin);
        const isAdminVarified = req.user.isAdmin;
        if(!isAdminVarified){
            return res.status(403).json({
                success:false,
                message:"permission denid you are not admin , you cannot access this route",
            });
        }
     next();
    }
    catch(err){
       return res.status(401).json({
        success:false,
        message:"something went wrong while checking whether isAdmin or not",
        error:err.message,
       });
    }
}

module.exports =adminMiddleware ;