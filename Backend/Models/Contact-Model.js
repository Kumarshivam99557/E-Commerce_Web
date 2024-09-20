const mongoose = require("mongoose");
const { required } = require("../Validators/contactValidation");

const contactSchema = new mongoose.Schema({
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
    messageName:{
        type:String,
        required:true
    },
});

const Services = mongoose.model("Service",contactSchema);

module.exports = Services;