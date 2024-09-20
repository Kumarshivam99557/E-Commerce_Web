const productCollection =require("../Models/Product-Model");

const product = async(req,res)=>{
    try{
       
        const product = await productCollection.find();

        return res.status(200).json({
            success:true,
            message:"data succesfully fetched from databse",
            product,
        });
    }
    catch(err){
        return res.status(401).json({
            success:false,
            message:"something went while fetching the data from product database",
            error:message.err,
        })
    }
}


module.exports = product;