const errorMiddleware = (err,req,res,next)=>{

    const status = err.status || 500;
    const message = err.message || "Backend Error";
    const extraDetails = err.extraDetails || "Error from Backend";
    console.log(extraDetails,message);

     res.status(status).json({message,extraDetails,
        message:"try to acccccccccccccccc"
    });
}

module.exports = errorMiddleware ;