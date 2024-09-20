const {adminUser,adminContact }= require("../Controllers/AdminUser-Controllers");
const userMiddleware = require('../Middleware/User-middleware');
const  adminMiddleware = require("../Middleware/Admin-Middleware")

const express = require("express");

const router = express.Router();

router.get("/adminUser",userMiddleware,adminMiddleware,adminUser);
router.get('/adminContact',userMiddleware,adminMiddleware,adminContact);


module.exports = router;