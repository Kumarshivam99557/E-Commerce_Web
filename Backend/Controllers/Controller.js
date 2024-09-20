const {Collection} = require('../Models/Model')



exports.createAccount = async(req,res)=>{

    try{
      const {name ,email,phone,password} =req.body;

      const userExist = await Collection.findOne({email});

      if(userExist){
        return res.status(400).json({
          success:false,
          message:"email already exist in the database"
        })
          }
        
          // this is also good way to hash the password but we use another way to hasing the password using mongoose hook inorder to maintain the clearance in the code

          // const saltRound = await bcrypt.genSalt(10);
          // const hash_password = await bcrypt.hash(password,saltRound);

        const user = await Collection.create({name,email,phone,password});
        res.status(201).json({
        success:true,  
        message:"User Succesfully registred",
        token: await user.createToken (),
        userId: user._id.toString(),
    });
    }
    catch(err){
         res.status(500).json({
            success:false,
            message:"an error while creating a user",
            error:err.message
         });
    }
    
}; 




exports.loginUser = async(req,res)=>{
  try{
     const{email,password}=req.body;
     const emailExist = await Collection.findOne({email});
     if(!emailExist){
        return res.status(400).json({
          message:"Invalid Credential & try again"
        });
     }

     const passwordValid = await emailExist.comparePassword(password) ;

     if(passwordValid){
         res.status(200).json({
          success:true,
          message:"Login Successfully ",
          token: await emailExist.createToken (),
         });
     }
     else{
      res.status(401).json({
        success:false,
        message:"Invalid Email & Password"
      });
     }
      
  }
  catch(err){
       res.status(500).json({
        success:false,
        message:"unauthorised user you cannot login",
        error:err.message
      });
  }
};



// write the logic for getting the data from database after logging the user and varvify the token after login 
exports.getUserAftrLogin = async (req,res)=>{
  try{
// req.user is a custom req i have made it  at usser-middleware.js in Middleware folder and get the user data from there after verification of token
    const userData = req.user; 
    // console.log("user dat after middlewarw",userData)

     return res.status(200).json({
      success:true,
      userData
    });

  }
  catch(err){
    return res.status(400).json({
    success:false,
    message:"problem from server using getting the data",
    error:err.message,

   });
  }

}





exports.getUser = async(req,res)=>{

    try{
      const allUser = await Collection.find()
      res.status(200).json({
        success:true,
        allUser
      })
    }
    catch(err){
      res.status(500).json({
        success:false,
        message:" something went wrong while fetching the data ",
        error:err.message
      });
    }
};






exports.dltUser = async(req,res)=>{
  const {id}=req.params;
    try{
      const dlt = await Collection.deleteOne({id})
      res.status(200).json({
        success:true,
        dlt,
        message:"data has been deleted from the datbase"
      });
    }
    catch(err){
      res.status(500).json({
        success:false,
        message:"something went wrong during deleting the database",
        error:err.message
      });
    }
};





exports.updateUser = async(req,res)=>{

       const {name,email,phone,password}=req.body;
       const{id}=req.params;
 try{
       const update = await Collection.findByIdAndUpdate(id,{name,email,phone,password})
       
       res.status(200).json({
        success:true,
        update,
        message:"successfully data update into database"
       });

  }
 catch(err){
      res.status(500).json({
        success:false,
        message:"something went wrong during updte into database",
        error:err.message

      });
  }
}