const {z} = require("zod")


const signupSchema = z.object({
    name: z.string({required_error:" Name is required"})
    .trim()
    .min(3,{message:"Name should be atleast 3 character"})
    .max(250,{message:"Name shold be atmost 250 character"}),
    
    email: z.string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(7,{message:"Email should be atleast 3 character"})
    .max(200,{message:"Email should be atmost 200 Character"}),
    
    phone: z.string({required_error:"Phone is required"})
    .trim()
    .min(10,{message:"Phone number should be atleast 10 character"})
    .max(20,{message:"Phone number should be atmost 20 character"}),

    password: z.string({required_error:"Passwors is required"})
    .trim()
    .min(7,{message:"Password should be atleast 7 character"})
    .max(200,{message:"Password should be atmost 200 character"}),
});



module.exports = signupSchema;

// coding testing22222222