const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true
    },
    offer:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },

});

const productCollection = mongoose.model("Products", productSchema);

module.exports = productCollection;