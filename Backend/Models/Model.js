const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")


const connection = ()=>{
   mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce-Database')
.then(()=>{
    console.log("database has been connected")
}).catch((err)=>{
    console.log(err)
})
}

const userSchema = new mongoose.Schema({
     name:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true
     },
     phone:{
      type:String,
      required:true,
     },
     password:{
        type:String,
        required:true
     },
     isAdmin:{
      type:Boolean,
      default:false,
     }

}); 

// hash the password using mongoose hook 

userSchema.pre('save', async function(next){
   const user = this;
   if(!user.isModified("password")){
      next();
   }
   try{
       const saltRound = await bcrypt.genSalt(10);
       const hash_password = await bcrypt.hash(user.password,saltRound);
       user.password = hash_password ;
   }
   catch(error){
      next(error);
   }
});

// comapre the password during the login
userSchema.methods.comparePassword = async function(password){
   return  bcrypt.compare(password,this.password);
   
}

// authentication using jsonwebtoken
userSchema.methods.createToken = async function(){
   try{ 
      return jwt.sign({
         userId:this._id.toString(),
         email:this.email,
         isAdmin:this.isAdmin,
      },
     process.env.JWT_PRITVATE_KEY,
      { 
         expiresIn:"5d",
      }
   );

   }
   catch(err){
      console.error(err)
   }
}

const Collection = mongoose.model('userInformation',userSchema)

module.exports = {
   Collection,
   connection
}
