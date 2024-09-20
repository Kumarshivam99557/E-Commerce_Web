
const {Collection} = require("../Models/Model");
const Services = require("../Models/Contact-Model");

const adminUser = async(req,res)=>{
    try{
        const user = await Collection.find({},{password:0});
        if(!user  || user.length === 0 ){
             return res.status(404).json({
                success:false,
                message:"there is no adminUser found"
             });
        }
        
        return res.status(200).json({
            success:true,
            message:"successfully data fetched for admin panel",
            user,
        });

    }
    catch(err){
        return res.status(401).json({
            success:false,
            message:"something went wrong while fetching user data ",
            error:err.message

        });

    }

}




const adminContact = async(req,res)=>{
    try{
        const contact = await Services.find();
        if(!contact || contact.length === 0){
            return res.status(404).json({
                success:false,
                message:"there is no adminContact found",
            })
        }

       return res.status(201).json({
          success:true,
          message:"successfully adminContact data fetched ",
          contact,
       });
    }
    catch(err){
       return res.status(401).json({
        success:false,
        message:"something went wrong while fetching the admin contact data",
        error:err.message,
       });
    }
}



module.exports = {adminUser,adminContact}