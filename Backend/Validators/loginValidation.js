const {z} = require("zod");

const loginSchema = z.object({
    email: z.string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(10,{message:"Email should be atleast 3 character"})
    .max(200,{message:"Email should be atmost 200 Character"}),

    password: z.string({required_error:"Passwors is required"})
    .trim()
    .min(7,{message:"Password should be atleast 7 character"})
    .max(200,{message:"Password should be atmost 200 character"}),
});

module.exports =loginSchema;

// coding testing 2222