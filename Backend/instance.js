const Razorpay = require("razorpay");
const dotenv =require("dotenv");

dotenv.config({path:"./Config/config.env"});

const instance = new Razorpay({
  
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  
});

module.exports=instance;