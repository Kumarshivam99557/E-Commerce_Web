
const Services = require('../Models/Contact-Model');
const contactForm = async(req,res)=>{
    try{
     const {name,email,phone,messageName}= req.body;
     data = await Services.create({name,email,phone,messageName});
     res.status(200).json({
        success:true,
        message:"message successfully sent",
        data
     })
}
   catch(err){
    res.status(505).json({
        success:false,
        message:"message did not send",
        error:err.message
    })

}
}

module.exports=contactForm;