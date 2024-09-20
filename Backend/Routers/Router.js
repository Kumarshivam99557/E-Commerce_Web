const express = require('express')
const {createAccount,getUser,dltUser,updateUser,loginUser,getUserAftrLogin}= require('../Controllers/Controller')
const signupSchema= require('../Validators/formValidation');
const validate = require('../Middleware/Validate-middleware');
const loginSchema = require('../Validators/loginValidation');
const userMiddleware = require('../Middleware/User-middleware');

const router = express.Router()

router.post('/createuser', validate(signupSchema),createAccount)

router.get('/getUser',getUser)

router.delete('/deleteData/:id',dltUser)

router.put('/updateInfo/:id',updateUser)

// make the route after getting the data from database after login 
router.get('/getUserAftrLogin',userMiddleware,getUserAftrLogin);

router.post('/login',validate(loginSchema),loginUser)

module.exports=router;

// coding testing2222222


