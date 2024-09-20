const express = require("express")
const {paymentCheck,paymentVerification,keyfunction}= require("../Controllers/Payment-controllers")

router = express.Router();


router.post("/check",paymentCheck);
router.post("/verification",paymentVerification);
router.get("/key",keyfunction);

module.exports=router;