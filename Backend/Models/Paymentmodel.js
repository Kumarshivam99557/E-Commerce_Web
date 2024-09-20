const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
    razorpay_payment_id:{
        type:String,
        required:true,
    },
    razorpay_order_id:{
        type:String,
        required:true,
    },
    razorpay_signature:{
        type:String,
        required:true,
    },
})

const paymentCollection = mongoose.model("payment",paymentSchema);
module.exports =paymentCollection;