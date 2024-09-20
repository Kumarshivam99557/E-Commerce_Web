const {z} = require("zod");

 const contactSchema = z.object({
    name: z.string({name: "name is required"})
    .trim()
    .min(3,{message:"name shouild be at least 3 character"})
    .max(200,{message:"name should be atmost 200 character"}),
    
    email: z.string({name:"email is required"})
    .trim()
    .email({message:"email addres is not valid"})
    .min(10,{message:"email should be at least 10 character"})
    .max(50,{message:"email sholud be at most 30 character"}),

    phone: z.string({required_error:"Phone is required"})
    .trim()
    .min(10,{message:"Phone number should be atleast 10 character"})
    .max(20,{message:"Phone number should be atmost 20 character"}),

    messageName: z.string({message:"message is required"})
    .trim()
    .min(20,{message:"message should be atmost 20 character"})
    .max(2000,{message:"message sholid be at most 2000 charater"}),

 });

 module.exports = contactSchema;