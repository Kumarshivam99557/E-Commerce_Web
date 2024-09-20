
const instance = require("../instance");
const paymentCollection = require("../Models/Paymentmodel");
const crypto = require("crypto")


exports.paymentCheck = async(req,res)=>{
    try{
       
        const  options = {
            amount: Number(req.body.total * 100),  // amount in the smallest currency unit
            currency: "INR",
          };
        const order = await  instance.orders.create(options);
        return res.status(200).json({
            success:true,
            order,
            message:"your payment has been made"
        });
    }catch(err){
        return res.status(401).json({
            success:false,
            message:"something went while doing the payment ",
        });
    } 
}

 exports.paymentVerification = async(req,res)=>{
    // console.log(req.body);
    try{
        const {razorpay_order_id,razorpay_payment_id,razorpay_signature}=req.body;

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expected_sign = crypto
        .createHmac('sha256',process.env.RAZORPAY_API_SECRET)
        .update(body.toString())
        .digest('hex');
        // console.log("razorpaysignature",razorpay_signature);
        // console.log("expectedsignature",expected_sign);
        
        const isAuthentic =  expected_sign === razorpay_signature;

        if(isAuthentic){
            const data = await paymentCollection.create({ 
                razorpay_order_id,
                 razorpay_payment_id,
                  razorpay_signature });

                  res.redirect(`http://localhost:3001/paymentsuccess?reference=${razorpay_order_id}`);
        }
        else{
            res.status(401).json({
                success:false,
                message:"payment is not authentic make it again"
            })
        }
    }
catch(err){
         res.status(401).json({
            success:false,
            message:"something went while doing the payment ",
        });
    } 
}

exports.keyfunction =async(req,res)=>{
    try{
     res.status(200).json({
        success:true,
        key: process.env.RAZORPAY_API_KEY,
     })
    }
    catch(err){
        res.status(401).json({
            success:false,
        })
    }
}